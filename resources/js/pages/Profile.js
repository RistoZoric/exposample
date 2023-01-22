import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Avatar,
  Box,
  Text,
  Icon,
  Button,
  VStack,
  HStack,
  Progress,
  Stack,
  useToast,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalContent,
  Link,
  Textarea,
  Input,
  BreadcrumbItem,
  BreadcrumbLink,
  Breadcrumb,
  Alert,
  AlertIcon,
  FormErrorMessage,
  FormControl,
  FormLabel,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  Select,
} from '@chakra-ui/react';
import { FaStar, FaRegHeart, FaHeart } from 'react-icons/fa';
import {
  IoCheckmarkCircleOutline,
  IoChevronForward,
  IoFlag,
  IoThumbsUp,
  IoShareSocial,
  IoLink,
} from 'react-icons/io5';

import { Head, InertiaLink, useForm, usePage } from '@inertiajs/inertia-react';
import React, { useState } from 'react';
import Layout from '@/shared/Layout';
import blacklistedWords from '../utils/blacklisted-words';

import Navigation from '@/components/UI/Navigation';
import Footer from '@/components/UI/Footer';

import { toggleMobileMenu, selectGlobal } from '@/slices/globalSlice';
import VerifiedBadge from '@/components/UI/VerifiedBadge';
import VipBadge from '@/components/UI/VipBadge';
import useRoutesAsync from '@/utils/useRoutesAsync';
import useRoutes from '@/utils/useRoutes';
import useLang from '@/utils/useLang';
import { Helmet } from 'react-helmet';
import '../../css/app_dev.css';
import ReactStars from 'react-stars'

const Profile = ({ user, suggestions }) => {
  document.documentElement.scrollTop = 0;
  const dispatch = useDispatch();
  const { isMobileMenuOpen } = useSelector(selectGlobal);
  const { flash, csrfToken } = usePage().props;
  const route = useRoutes();
  const routeAsync = useRoutesAsync();
  const { authUser, locale } = usePage().props;
  const lang = useLang(locale);
  lang.setFallback("en");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFlagModalOpen, setIsFlagModalOpen] = useState(false);
  const [hasBlacklistedWords, setHasBlacklistedWords] = useState(false);
  const [reviewId, setReviewId] = useState(null);
  const [reason, setReason] = useState(null);
  const [isFlagging, setIsFlagging] = useState(false);
  const [flaggingErrors, setFlaggingErrors] = useState({});
  const [isFavorited, setIsFavorited] = useState(user.is_favorited);
  const [usefulVotes, setUsefulVotes] = useState({});


  const { data, setData, post, processing, errors } = useForm({
    rating: user.my_review ? user.my_review.rating : 0,
    platform: user.my_review ? user.my_review.platform : '',
    title: user.my_review ? user.my_review.title : '',
    description: user.my_review ? user.my_review.description : '',
  });
  const toast = useToast();

  const stars = [];
  const rating = (user.b_avg<3.5?3.5:user.b_avg)
  const int_part = Math.trunc(rating); // returns 3
  const float_part = Number((rating-int_part).toFixed(2));
  const value = int_part + (float_part>0?0.5:0)
    stars.push(
      <div style={{pointerEvents:'none'}}>
        <ReactStars count={5} value={value} size={24} color2={'#ffd700'} />
      </div>
    );

  const myReviewStars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= data.rating) {
      myReviewStars.push(
        <Icon
          as={FaStar}
          fontSize={{
            base: '2xl',
            md: '3xl',
          }}
          color="#ffcc80"
          cursor="pointer"
          onClick={() => setData('rating', i)}
        />
      );
    } else {
      myReviewStars.push(
        <Icon
          as={FaStar}
          fontSize={{ base: '2xl', md: '3xl' }}
          color="gray.300"
          cursor="pointer"
          onClick={() => setData('rating', i)}
        />
      );
    }
  }

  function handleOpenModal() {
    setIsModalOpen(true);
  }
  const handleUserProfile = (username) => {
    window.location.href = '/@' + username;
  };
  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleOpenFlagModal(id) {
    setReviewId(id);
    setIsFlagModalOpen(true);
  }

  function handleCloseFlagModal() {
    setReviewId(null);
    setReason(null);
    setIsFlagModalOpen(false);
  }

  async function handleFlag() {
    setIsFlagging(true);
    const url = await routeAsync('api.reviews.flag', reviewId);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reason,
        _token: csrfToken,
      }),
    });
    const body = await response.json();
    if (body.success) {
      toast({
        title: 'Success',
        description: body.message,
        status: 'success',
        position: 'bottom-right',
        duration: 3000,
        isClosable: true,
      });
      handleCloseFlagModal();
    }
    if (!body.success) {
      setFlaggingErrors(body.errors);
    }
    setIsFlagging(false);
  }

  function handleReview() {
    console.log(data.description);
    const foundSwears = blacklistedWords.filter((word) =>
      data.description.toLowerCase().includes(word.toLowerCase())
    );
    if (foundSwears.length) {
      setHasBlacklistedWords(true);
    } else {
      setHasBlacklistedWords(false);
      post(route('users.review', user.id));
    }
  }

  function handleAddFavorite() {
    setIsFavorited(true);
    fetch(route('api.auth.favorites.add', user.id));
  }

  function handleRemoveFavorite() {
    setIsFavorited(false);
    fetch(route('api.auth.favorites.remove', user.id));
  }

  function handleVoteAsUseful(reviewId) {
    setUsefulVotes({
      ...usefulVotes,
      [reviewId]: true,
    });
    fetch(route('api.reviews.vote_as_useful', reviewId));
  }

  function handleRemoveUsefulVote(reviewId) {
    setUsefulVotes({
      ...usefulVotes,
      [reviewId]: false,
    });
    fetch(route('api.reviews.remove_useful_vote', reviewId));
  }

  const renderSuggestion = (user) => {
    const stars = [];

    for (let i = 0; i < Math.floor(user.rating); i++) {
      stars.push(<Icon as={FaStar} fontSize="md" color="#ffcc80" />);
    }

    for (let i = 0; i < 5 - user.rating; i++) {
      stars.push(<Icon as={FaStar} fontSize="md" color="gray.300" />);
    }

    return (
      <Box
        width="full"
        background="white"
        borderRadius="10px"
        boxShadow="sm"
        key={user.id}
      >
        <HStack spacing={4} align="center">
          <Link as={InertiaLink} href={route('users.view', user.username)}>
            <Avatar
              src={user.avatar}
              height="120px"
              width="100px"
              fit="cover"
              borderRadius="10px"
              background="glacier.300"
            />
          </Link>
          <Stack direction="column" spacing={4} p={4} className="suggest-stack">
            <VStack spacing={2} align="start">
              <Link
                as={InertiaLink}
                href={route('users.view', user.username)}
                fontSize="lg"
                fontWeight="semibold"
                _hover={{ color: 'glacier.500', textDecoration: 'underline' }}
              >
                {user.username}
              </Link>
              <HStack spacing={4}>
                <HStack spacing={2}>{stars}</HStack>
                <HStack spacing={2}>
                  <Text fontSize="sm">
                    {lang.get('categories.reviews_number', {
                      number: user.received_reviews_count,
                    })}
                  </Text>
                </HStack>
              </HStack>
            </VStack>
            <HStack spacing={2}>
              <Text fontSize="xs">
                {user.category ? user.category.name : ''}
              </Text>
            </HStack>
          </Stack>
        </HStack>
      </Box>
    );
  };

  const renderReview = (review) => {
    const stars = [];

    for (let i = 0; i < review.rating; i++) {
      stars.push(<Icon as={FaStar} fontSize="md" color="#ffcc80" />);
    }

    for (let i = 0; i < 5 - review.rating; i++) {
      stars.push(<Icon as={FaStar} fontSize="md" color="gray.300" />);
    }

    return (
      <Box
        background="white"
        px={5}
        py={5}
        width="full"
        boxShadow="sm"
        key={review.id}
      >
        <HStack>
          <Avatar
            size="md"
            src={review.avatar}
            mr={5}
            background="glacier.300"
          />
          <HStack align="start">
            <Box>
              <Text fontWeight="bold" fontSize="xl">
                {review.username}
              </Text>
              <Text fontSize="sm" color="gray.400" fontWeight="medium">
                {review.written_reviews_count} reviews
              </Text>
            </Box>
            {review.is_verified && (
              <Icon
                as={IoCheckmarkCircleOutline}
                fontSize="xl"
                color="green.200"
              />
            )}
          </HStack>
        </HStack>
        <Box background="gray.100" height="2px" width="full" my={3} />
        <HStack spacing={1}>{stars}</HStack>
        <Box color="gray.400" mt={4}>
          <HStack spacing={1}>
            <IoLink />
            <Text fontSize="sm" fontWeight="medium">
              {review.platform}
            </Text>
          </HStack>
        </Box>
        <Text fontWeight="bold" fontSize="lg">
          {review.title}
        </Text>
        <Text
          fontSize="md"
          fontStyle={review.status === 'Published' ? 'normal' : 'italic'}
          mt={2}
        >
          {review.status === 'Published'
            ? review.description
            : 'This content is currently under review.'}
        </Text>
        <Box background="gray.100" height="2px" width="full" my={3} />
        <HStack spacing={3}>
          <HStack spacing={1}>
            <Icon
              as={IoThumbsUp}
              color={
                (usefulVotes[review.id] && usefulVotes[review.id] === true) ||
                review.is_voted_as_useful
                  ? 'glacier.500'
                  : 'gray.500'
              }
              fontSize="sm"
            />
            {user && (
              <Link
                color={
                  usefulVotes[review.id] || review.is_voted_as_useful
                    ? 'glacier.500'
                    : 'gray.500'
                }
                onClick={() =>
                  (usefulVotes[review.id] && usefulVotes[review.id] === true) ||
                  review.is_voted_as_useful
                    ? handleRemoveUsefulVote(review.id)
                    : handleVoteAsUseful(review.id)
                }
              >
                {lang.get('profile.useful')}
              </Link>
            )}
            {!user && (
              <Link
                as={InertiaLink}
                href={route('auth.login', { back: window.location.href })}
                color="gray.500"
              >
                {lang.get('profile.useful')}
              </Link>
            )}
          </HStack>
          <HStack spacing={1}>
            <Icon as={IoFlag} color="gray.500" fontSize="sm" />
            {user && (
              <Link
                color="gray.500"
                onClick={() => handleOpenFlagModal(review.id)}
              >
                {lang.get('profile.flag')}
              </Link>
            )}
            {!user && (
              <Link
                as={InertiaLink}
                href={route('auth.login', { back: window.location.href })}
                color="gray.500"
              >
                {lang.get('profile.flag')}
              </Link>
            )}
          </HStack>
          <HStack spacing={1}>
            <Icon as={IoShareSocial} color="gray.500" fontSize="sm" />
            <Link color="gray.500">{lang.get('profile.share')}</Link>
          </HStack>
        </HStack>
        {review.response && review.response.length > 1 && (
          <>
            <Box background="gray.100" height="2px" width="full" my={3} />
            <HStack spacing={5}>
              <Avatar src={user.avatar} size="sm" background="glacier.300" />
              <Text fontSize="sm">{review.response}</Text>
            </HStack>
          </>
        )}
      </Box>
    );
  };

  return (
    <>
      <Head>
        <title>{lang.get('profile.meta_title', { name: user.username })}</title>
      </Head>
      <VStack spacing={0} background="glacier.900" className="vcustom-stack">
        <Navigation
          isMobileMenuOpen={isMobileMenuOpen}
          onToggle={() => dispatch(toggleMobileMenu())}
          logo="white"
          textColor="white"
          btnScheme={{
            color: 'glacier.500',
            background: 'white',
          }}
          scheme="glacier"
        />
        <Container
          className="container mt-5 "
          maxWidth="8xl"
          px={{ base: 6, md: 12, lg: 24 }}
          pt={8}
          pb={16}
        >
          <Breadcrumb
            spacing="16px"
            separator={<Icon as={IoChevronForward} fontSize="xs" />}
            color="white"
            mb={6}
            className="mt-4"
          >
            <BreadcrumbItem key={user.category.slug}>
              <BreadcrumbLink
                as={InertiaLink}
                href={route('categories.view', user.category.slug)}
              >
                {user.category.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#"> {user.username}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={8}
            align="center"
            justify={{ base: 'center', md: 'space-between' }}
            color="white"
          >
            <HStack spacing={{ base: 8, md: 24 }}>
              <Avatar
                src={user.avatar}
                height={{ base: 100, md: 200 }}
                width={{ base: 100, md: 200 }}
                background="glacier.300"
              />
              <VStack
                spacing={6}
                align={{ base: 'center', md: 'start' }}
                textAlign={{ base: 'center', md: 'left' }}
                className="review-pannel-profile"
              >
                <Box>
                  <HStack spacing={6} align="center">
                    <Text
                      fontSize={{ base: '3xl', md: '5xl' }}
                      fontWeight="bold"
                    >
                      {user.username}
                    </Text>
                    <HStack spacing={3} align="center">
                      {user.is_verified && user.is_email_verified && (
                        <VerifiedBadge />
                      )}
                      {user.plan && <VipBadge />}
                    </HStack>
                  </HStack>
                  <Text fontSize={{ base: 'md', md: 'xl' }}>
                    {lang.get('profile.reviews_number', {
                      number: user.received_reviews_count,
                    })}{' '}
                    - {user.rating_text}
                  </Text>
                </Box>
                <HStack spacing={1}>
                  {stars}
                  <Text fontSize="md" fontWeight="bold" pl={{ base: 4, md: 8 }}>
                    {user.b_avg<3.5?3.5:user.b_avg}
                  </Text>
                </HStack>
                {isFavorited && (
                  <Button
                    variant="link"
                    color="white"
                    onClick={handleRemoveFavorite}
                    isDisabled={authUser ? authUser.id === user.id : true}
                  >
                    <HStack spacing={3}>
                      <Icon as={FaHeart} height={5} width={5} />
                      <Text fontSize="md" fontWeight="bold">
                        {lang.get('profile.remove_from_favorites')}
                      </Text>
                    </HStack>
                  </Button>
                )}
                {/* {!isFavorited && (
                  <Button
                    variant="link"
                    color="white"
                    onClick={handleAddFavorite}
                    isDisabled={authUser ? authUser.id === user.id : true}
                  >
                    <HStack spacing={3}>
                      <Icon as={FaRegHeart} height={5} width={5} />
                      <Text fontSize="md" fontWeight="bold">
                        {lang.get('profile.add_to_favorites')}
                      </Text>
                    </HStack>
                  </Button>
                )} */}
              </VStack>
            </HStack>
            <Menu>
              <MenuButton
                as={Button}
                borderRadius="50px"
                borderWidth="2px"
                background="transparent"
                textAlign="left"
                _hover={{ background: 'transparent' }}
                _focus={{ background: 'transparent' }}
                _active={{ background: 'transparent' }}
                rightIcon={<Icon as={IoChevronForward} fontSize="lg" />}
                width={{ base: 'full', md: '400px' }}
                justifyContent="space-between"
                p={{ base: 8, md: 10 }}
                fontWeight="semibold"
              >
                <Stack direction="column" spacing={2}>
                  <Text fontSize={{ base: 'lg', md: 'xl' }}>
                    Verified Platforms
                  </Text>
                </Stack>
              </MenuButton>
              <MenuList color="black">
                {user.onlyfans_username && (
                  <MenuItem
                    as={Link}
                    href={`https://onlyfans.com/${user.onlyfans_username}`}
                    _hover={{ textDecoration: 'none' }}
                    isExternal
                  >
                    <HStack spacing={1}>
                      <Text>OnlyFans</Text>
                    </HStack>
                  </MenuItem>
                )}
                {user.fansly_username && (
                  <MenuItem
                    as={Link}
                    href={`https://fansly.com/${user.fansly_username}`}
                    _hover={{ textDecoration: 'none' }}
                    isExternal
                  >
                    <HStack spacing={1}>
                      <Text>Fansly</Text>
                    </HStack>
                  </MenuItem>
                )}
                {user.patreon_username && (
                  <MenuItem
                    as={Link}
                    href={`https://patreon.com/${user.patreon_username}`}
                    _hover={{ textDecoration: 'none' }}
                    isExternal
                  >
                    <HStack spacing={1}>
                      <Text>Patreon</Text>
                    </HStack>
                  </MenuItem>
                )}
                {user.twitch_username && (
                  <MenuItem
                    as={Link}
                    href={`https://twitch.com/${user.twitch_username}`}
                    _hover={{ textDecoration: 'none' }}
                    isExternal
                  >
                    <HStack spacing={1}>
                      <Text>Twitch</Text>
                    </HStack>
                  </MenuItem>
                )}
                {user.youtube_username && (
                  <MenuItem
                    as={Link}
                    href={`https://youtube.com/channel/${user.youtube_username}`}
                    _hover={{ textDecoration: 'none' }}
                    isExternal
                  >
                    <HStack spacing={1}>
                      <Text>YouTube</Text>
                    </HStack>
                  </MenuItem>
                )}
                {user.kickstarter_username && (
                  <MenuItem
                    as={Link}
                    href={`https://kickstarter.com/profile/${user.kickstarter_username}`}
                    _hover={{ textDecoration: 'none' }}
                    isExternal
                  >
                    <HStack spacing={1}>
                      <Text>Kickstarter</Text>
                    </HStack>
                  </MenuItem>
                )}
                {user.soundcloud_username && (
                  <MenuItem
                    as={Link}
                    href={`https://kickstarter.com/${user.soundcloud_username}`}
                    _hover={{ textDecoration: 'none' }}
                    isExternal
                  >
                    <HStack spacing={1}>
                      <Text>SoundCloud</Text>
                    </HStack>
                  </MenuItem>
                )}
              </MenuList>
            </Menu>
          </Stack>
        </Container>
      </VStack>
      <VStack background="#fafafa" pb={12}>
        <Container
          className="container"
          maxWidth="8xl"
          px={{ base: 6, md: 12, lg: 24 }}
        >
          <Stack
            direction={{ base: 'column', md: 'row' }}
            align="start"
            justify="start"
            wrap={{ base: 'wrap', md: 'nowrap' }}
            spacing={6}
          >
            <VStack width={{ base: 'full', lg: '60%' }}>
              <HStack
                width="full"
                justify="space-between"
                wrap="wrap"
                background="white"
                p={5}
                mt={5}
                boxShadow="sm"
              >
                <HStack spacing={6}>
                  <Avatar
                    size="lg"
                    src={user.avatar}
                    height={50}
                    width={50}
                    background="glacier.300"
                  />
                  <Box>
                    <Text fontWeight="bold" fontSize={{ base: 'lg', md: 'xl' }}>
                      {user.username}
                    </Text>
                    <Link
                      fontSize={{ base: 'xs', md: 'sm' }}
                      color="gray.400"
                      fontWeight="medium"
                      onClick={handleOpenModal}
                    >
                      {lang.get('profile.write_a_review')}
                    </Link>
                  </Box>
                </HStack>
                <HStack spacing={1} onClick={handleOpenModal}>
                  {myReviewStars}
                </HStack>
              </HStack>
              <VStack
                width="full"
                spacing={6}
                align="start"
                wrap="wrap"
                background="white"
                p={5}
                boxShadow="sm"
              >
                <HStack width="full" justify="space-between" wrap="wrap">
                  <Text fontWeight="bold" fontSize="2xl">
                    {lang.get('profile.reviews_number', {
                      number: user.received_reviews_count,
                    })}
                  </Text>
                </HStack>
                <VStack className="Paras-sharma">
                  <HStack spacing={2} className="review-text-area">
                    <Text width={100} color="gray.500" fontWeight="medium">
                      Excellent
                    </Text>
                    <Progress
                      value={user.rating_percentages.excellent}
                      size="md"
                      width={{
                        base: '130px',
                        md: '200px',
                        xl: '450px',
                      }}
                      colorScheme="glacier"
                      mr={5}
                    />
                    <Text width={60} color="gray.500" fontWeight="medium">
                      {user.rating_percentages.excellent}%
                    </Text>
                  </HStack>
                  <HStack spacing={2}>
                    <Text width={100} color="gray.500" fontWeight="medium">
                      Great
                    </Text>
                    <Progress
                      value={user.rating_percentages.great}
                      size="md"
                      width={{
                        base: '130px',
                        md: '200px',
                        xl: '450px',
                      }}
                      colorScheme="glacier"
                      mr={5}
                    />
                    <Text width={60} color="gray.500" fontWeight="medium">
                      {user.rating_percentages.great}%
                    </Text>
                  </HStack>
                  <HStack spacing={2}>
                    <Text width={100} color="gray.500" fontWeight="medium">
                      Average
                    </Text>
                    <Progress
                      value={user.rating_percentages.average}
                      size="md"
                      width={{
                        base: '130px',
                        md: '200px',
                        xl: '450px',
                      }}
                      colorScheme="glacier"
                      mr={5}
                    />
                    <Text width={60} color="gray.500" fontWeight="medium">
                      {user.rating_percentages.average}%
                    </Text>
                  </HStack>
                  <HStack spacing={2}>
                    <Text width={100} color="gray.500" fontWeight="medium">
                      Poor
                    </Text>
                    <Progress
                      value={user.rating_percentages.poor}
                      size="md"
                      width={{
                        base: '130px',
                        md: '200px',
                        xl: '450px',
                      }}
                      colorScheme="glacier"
                      mr={5}
                    />
                    <Text width={60} color="gray.500" fontWeight="medium">
                      {user.rating_percentages.poor}%
                    </Text>
                  </HStack>
                  <HStack spacing={2}>
                    <Text width={100} color="gray.500" fontWeight="medium">
                      Bad
                    </Text>
                    <Progress
                      value={user.rating_percentages.bad}
                      size="md"
                      width={{
                        base: '130px',
                        md: '200px',
                        xl: '450px',
                      }}
                      colorScheme="glacier"
                      mr={5}
                    />
                    <Text width={60} color="gray.500" fontWeight="medium">
                      {user.rating_percentages.bad}%
                    </Text>
                  </HStack>
                </VStack>
              </VStack>
              <VStack wrap="wrap" align="start" width="full">
                {user.reviews.map(renderReview)}
              </VStack>
            </VStack>
            <VStack width={{ base: 'full', lg: '30%' }} align="start" pt={5}>
              {user.description && (
                <Box
                  width="full"
                  bg="white"
                  p={4}
                  borderRadius={12}
                  color="black"
                  boxShadow="sm"
                >
                  <Text fontSize="lg" fontWeight="bold" mb={2}>
                    {lang.get('profile.about')}
                  </Text>
                  <Text fontSize="md" color="gray.600">
                    {user.description}
                  </Text>
                </Box>
              )}
              <Text
                fontSize={{ base: 'xl', md: '2xl' }}
                color="glacier.600"
                fontWeight="semibold"
                pt={5}
                pb={4}
              >
                {lang.get('profile.suggested')}
              </Text>
              {suggestions.map(renderSuggestion)}
            </VStack>
          </Stack>
        </Container>
      </VStack>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {lang.get('profile.write_a_review_modal.title')}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4} justify="center" align="start">
              <HStack spacing={1}>{myReviewStars}</HStack>
              <FormControl id="platform" isRequired isInvalid={errors.platform}>
                <Select
                  placeholder={lang.get(
                    'profile.write_a_review_modal.platform_placeholder'
                  )}
                  borderColor="gray.300"
                  value={data.platform}
                  onChange={(event) => setData('platform', event.target.value)}
                >
                  {user.onlyfans_username && (
                    <option value="onlyfans">OnlyFans</option>
                  )}
                  {user.fansly_username && (
                    <option value="fansly">Fansly</option>
                  )}
                  {user.patreon_username && (
                    <option value="patreon">Patreon</option>
                  )}
                  {user.twitch_username && (
                    <option value="twitch">Twitch</option>
                  )}
                  {user.youtube_username && (
                    <option value="youtube">YouTube</option>
                  )}
                  {user.kickstarter_username && (
                    <option value="kickstarter">Kickstarter</option>
                  )}
                </Select>
                <FormErrorMessage color="chantilly.700">
                  {errors.platform}
                </FormErrorMessage>
              </FormControl>
              <FormControl id="title" isRequired isInvalid={errors.title}>
                <Input
                  placeholder={lang.get(
                    'profile.write_a_review_modal.title_placeholder'
                  )}
                  borderColor="gray.300"
                  value={data.title}
                  onChange={(event) => setData('title', event.target.value)}
                />
                <FormErrorMessage color="chantilly.700">
                  {errors.title}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                id="description"
                isRequired
                isInvalid={errors.description}
              >
                <Textarea
                  placeholder={lang.get(
                    'profile.write_a_review_modal.description_placeholder'
                  )}
                  borderColor="gray.300"
                  errorBorderColor="chantilly.700"
                  value={data.description}
                  onChange={(event) =>
                    setData('description', event.target.value)
                  }
                />
                <FormErrorMessage color="chantilly.700">
                  {errors.description}
                </FormErrorMessage>
                {hasBlacklistedWords && (
                  <small style={{ color: 'grey' }}>
                    Your review can’t be posted because it has one or more
                    blacklisted words in it. For more information about how to
                    write a review visit&nbsp;
                    <a
                      href="https://support.privy.reviews/hc/en-us/articles/4406191869331-Tips-for-writing-a-good-review-"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: 'blue' }}
                    >
                      here
                    </a>
                  </small>
                )}
              </FormControl>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleCloseModal}>
              {lang.get('profile.write_a_review_modal.button_1')}
            </Button>
            <Button
              colorScheme="glacier"
              ml={3}
              isLoading={processing}
              loadingText={lang.get(
                'profile.write_a_review_modal.button_2_loading'
              )}
              onClick={handleReview}
              isDisabled={authUser ? authUser.id === user.id : true}
            >
              {lang.get('profile.write_a_review_modal.button_2')}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={isFlagModalOpen} onClose={handleCloseFlagModal} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {lang.get('profile.flag_review_modal.title')}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack w="full" spacing={4} align="start">
              {flash.message && (
                <Alert status="success" variant="left-accent">
                  <HStack align="center">
                    <AlertIcon />
                    <Text fontSize="sm">{flash.message}</Text>
                  </HStack>
                </Alert>
              )}
              <FormControl
                id="reason"
                isRequired
                isInvalid={flaggingErrors.reason}
              >
                <FormLabel>
                  {lang.get('profile.flag_review_modal.flag_reason_label')}
                </FormLabel>
                <Textarea
                  fontSize="sm"
                  placeholder={lang.get(
                    'profile.flag_review_modal.flag_reason_placeholder'
                  )}
                  onChange={(event) => setReason(event.target.value)}
                />
                <FormErrorMessage color="chantilly.700">
                  {flaggingErrors.reason}
                </FormErrorMessage>
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleCloseFlagModal}>
              {lang.get('profile.flag_review_modal.button_1')}
            </Button>
            <Button
              colorScheme="glacier"
              isLoading={isFlagging}
              loadingText={lang.get(
                'profile.flag_review_modal.button_2_loading'
              )}
              isDisabled={data.reason && data.reason.length < 1}
              onClick={handleFlag}
              ml={3}
            >
              {lang.get('profile.flag_review_modal.button_2')}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Footer />
    </>
  );
};

Profile.layout = (page) => <Layout children={page} />;

export default Profile;
