import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Avatar,
  Box,
  Text,
  Icon,
  Button,
  Flex,
  HStack,
  Input,
  Radio,
  RadioGroup,
  VStack,
  Link,
  InputGroup,
  InputRightElement,
  Wrap,
  WrapItem,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select,
  Textarea,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalContent,
  Image
} from '@chakra-ui/react';
import {
  FaUpload, FaTimes, FaStar,FaTrashAlt,FaRegHeart,FaLink,FaExternalLinkAlt
} from 'react-icons/fa';
import {
  SiOnlyfans, SiPatreon, SiTwitch, SiYoutube, SiKickstarter, SiSoundcloud,
} from 'react-icons/si';
import { IoChevronForward } from 'react-icons/io5';
import { filter } from 'lodash';
import { SearchIcon } from '@chakra-ui/icons';
import {
  Head, InertiaLink, useForm, usePage,
} from '@inertiajs/inertia-react';
import React, { useRef, useState, useEffect} from 'react';
import useRoutes from '@/utils/useRoutes';
import useLang from '@/utils/useLang'; 
import { Inertia } from '@inertiajs/inertia';

import Layout from '@/shared/Layout';

import Navigation from '@/components/UI/Navigation';
import Footer from '@/components/UI/Footer';

import { toggleMobileMenu, selectGlobal } from '@/slices/globalSlice';
import VerifyAlert from '@/components/UI/VerifyAlert';
import VerifiedBadge from '@/components/UI/VerifiedBadge';
import VipBadge from '@/components/UI/VipBadge';
import swal from 'sweetalert';
import {Helmet} from 'react-helmet';
import '../../css/app_dev.css';



const FanslyIcon = () => (
  <Box color="glacier.500">
    <svg
      height="14px"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      baseProfile="tiny"
      version="1.2"
      viewBox="0 0 394.7 324.7"
      xmlSpace="preserve"
    >
      <path
        fill="currentColor"
        d="M231.9 95.6c1.5 1.5 2.7 2.9 4 4.2 30.6 30.6 61.3 61.2 91.9 91.9 4.9 4.9 4.9 5.9-.1 10.9-38.2 38.2-76.4 76.3-114.6 114.5-10.3 10.3-20.6 10.3-30.9 0-51.5-51.6-103.4-102.6-154.3-154.7C.3 134.2-6.9 99.8 6.6 62.8 19.7 26.7 46.7 5.8 84.9.9c31.2-4 58 6.1 80.3 28.3 6.6 6.6 13.1 13.3 19.8 19.7 3.4 3.3 3.2 6-.1 9.2-8.5 8.3-16.9 16.6-25.1 25.1-3.4 3.5-6 3.2-9.2-.2-6.8-7.1-13.9-13.9-20.8-20.9-18.7-18.6-48.6-18.5-67.3.2-18.4 18.4-18.2 48.2.3 66.8 10.9 11 21.8 22 33.2 33.4 1.5-1.4 2.8-2.6 4-3.9 43-42.7 85.9-85.6 128.8-128.5 14.8-14.8 32-24.9 52.7-28.6 63.4-11.3 116.9 39.7 113 99.8-1.6 24.1-10.9 44.7-27.6 61.9-7 7.2-14.2 14.1-21.2 21.2-3.1 3.1-5.8 3.3-8.9.1-8.4-8.5-16.9-17-25.5-25.4-3.1-3.1-3.3-5.7 0-8.8 7.1-6.8 14-13.8 20.9-20.8 18.8-19.1 19-48.6.5-67.4-18.3-18.5-48.5-18.6-67.4 0-11.2 11.1-22.1 22.2-33.4 33.5zm-81.6 100.9c0 26.5 21 48 47.1 48.1 25.9.2 47.8-21.6 47.9-47.6.1-26.1-21.4-47.3-47.9-47.3-26.2 0-47.1 20.8-47.1 46.8z"
      />
      <path
        fill="currentColor"
        d="M206.3 168.3c-2.7 5.4-1.7 10.4 2.7 14.4 4.7 4.2 10 4 15.1.4 7.8 10.8 3.6 27.7-5.1 35.9-10.7 10.1-28.7 11.2-39.9 2.2-12.1-9.7-15.4-26.3-7.8-39.4 7.1-12.6 22.5-18.6 35-13.5z"
      />
    </svg>
  </Box>
);

const Settings = ({ countries, categories }) => {
  const dispatch = useDispatch();
  const { authUser, config } = usePage().props;
  const { isMobileMenuOpen } = useSelector(selectGlobal);
  const route = useRoutes();
  const { locale } = usePage().props;
  const lang = useLang(locale);
  lang.setFallback("en"); 
  const planName = (authUser.plan === null ) ? 'Basic' : authUser.plan; 
 
  
     
    const { data, setData, post, processing, errors, } = useForm(
      
      (authUser.type == 'reviewer') ? {
        avatar: authUser.avatar,
      // username: authUser.username,
       full_name: authUser.full_name,
      email: authUser.email,
      user_preferred_lang:"en",
      // date_of_birth: authUser.date_of_birth,
      country: authUser.country,
      // gender: authUser.gender,
      // type: authUser.type,
       category_id: authUser.category_id,
      // description: authUser.description,
      // searchable_tags: authUser.searchable_tags,
      password: '',
    }
    :
    {
      avatar: authUser.avatar,
       username: authUser.username,
       full_name: authUser.full_name,
      email: authUser.email,
      user_preferred_lang:"en",
      // date_of_birth: authUser.date_of_birth,
       country: authUser.country,
       // gender: authUser.gender,
       type: authUser.type,
       category_id: authUser.category_id,
       description: authUser.description,
       searchable_tags: authUser.searchable_tags,
      password: '',
    }
    
    
    );
 
     console.log("auth",authUser)

  const handleChangeLocale = (value) => {
    
    setData('user_preferred_lang',value); 
    Inertia.post(route('auth.update_locale'), {
      locale: value,
    });
  }
  const avatarInputRef = useRef(null);
  const [favorites, setFavorites] = useState(authUser.favorites);
  const [isUserTypeModalOpen, setIsUserTypeModalOpen] = useState(false);

  const handleAvatarChange = (event) => {
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onloadend = () => {
      setData('avatar', reader.result);
    };
    reader.readAsDataURL(file);
  };

  function handleSubmit(event) {
    event.preventDefault();
    post(route('auth.update_settings'));
  }

  function handleRemoveFavorite(id) {
    const newFavorites = filter(favorites, (favorite) => favorite.id !== id);
    setFavorites(newFavorites);
    fetch(route('api.auth.favorites.remove', id)).then(res => {
      handleOpen();
    });
  }

  function handleCloseUserTypeModal(){
    setIsUserTypeModalOpen(false);
  }

  const [isOpenAlertModal, setIsOpenAlertModal] = useState(false);

  function handleOpen() {
    setIsOpenAlertModal(true);
  }

  async function handleClose() {
    // Store for one week (milliseconds).
    setIsOpenAlertModal(false);
  }

  const handleDeleteUser = () =>{
    
    swal({
      title: "Are you sure?",
      text: "You want to delete your profile ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
      confirmButtonText: 'Yes, I am sure!',
    })
    .then((willDelete) => {
      if (willDelete) {
        post(route('auth.delete_reviewer',authUser.id));
        swal("User Has been Successfully Deleted", {
          icon: "success",
        });
      } 
    });  
 
  }

  const renderCategory = (category) => (
    <option value={category.id}>
      {category.name}
    </option>
  );

  useEffect(() => {
    if(authUser.type == '' || authUser.type == null){
      setIsUserTypeModalOpen(true);
    }
  }, []);

  const handleVerificationPopUp = () =>{
    alert("s")
  }

  const renderFavorite = (authUser) => {
    const stars = [];
    const grayStars = [];

    for (let i = 0; i < authUser.rating; i++) {
      stars.push(<Icon as={FaStar} fontSize="md" color="#ffcc80" />);
    }

    for (let i = 0; i < (5 - authUser.rating); i++) {
      grayStars.push(<Icon as={FaStar} fontSize="md" color="gray.300" />);
    }

    return (
      <Box
        width="full"
        background="white"
        borderRadius="10px"
        boxShadow="sm"
        key={authUser.id}
      >
        <HStack spacing={4} align="center">
          <Link
            as={InertiaLink}
            href={route('users.view', authUser.username)}
          >
            <Avatar
              src={authUser.avatar}
              height="120px"
              width="100px"
              fit="cover"
              borderRadius="10px"
              background="glacier.300"
            />
          </Link>
          <Stack direction="column" spacing={4} p={4}>
            <VStack spacing={2} align="start">
              <Link
                as={InertiaLink}
                href={route('users.view', authUser.username)}
                fontSize="lg"
                fontWeight="semibold"
                _hover={{ color: 'glacier.500', textDecoration: 'underline' }}
              >
                {authUser.username}
              </Link>
              <HStack spacing={4}>
                <HStack spacing={2}>
                  {stars}
                  {grayStars}
                </HStack>
                <HStack spacing={2}>
                  <Text fontSize="sm">
                    {lang.get('categories.reviews_number', { number: authUser.received_reviews_count })}
                  </Text>
                </HStack>
              </HStack>
            </VStack>
            <Link onClick={() => handleRemoveFavorite(authUser.id)} color="glacier.500">
              <HStack spacing={1}>
                <Icon as={FaTimes} />
                <Text fontSize="xs" fontWeight="medium">Remove</Text>
              </HStack>
            </Link>
          </Stack>
        </HStack>
      </Box>
    );
  };

  return (
    <>
      {/* <Head>
        <title>{lang.get('settings.meta_title')}</title>
      </Head> */}
      <Helmet>
        <title>{lang.get('settings.meta_title')}</title>
      </Helmet>
      <VStack
        spacing={0}
        background="white"
      >
        <Navigation
          isMobileMenuOpen={isMobileMenuOpen}
          onToggle={() => dispatch(toggleMobileMenu())}
          logo="gradient"
          textColor="glacier.500"
          btnScheme={{
            color: 'white',
            background: 'glacier.500',
          }}
          scheme="glacier"
          navtype={2}
        />
        <VerifyAlert
          authUser={authUser}
          crawlerUrl={config.crawlerUrl}
          onClick={handleVerificationPopUp}
        />
        <Container
          maxWidth="8xl"
          px={{ base: 6, md: 6, lg: 24 }}
          pt={8}
          pb={16}
          className="mt-5 setting-container"
        >
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={8}
            align="center"
            justify={{ base: 'center', md: 'space-between' }}
            color="glacier.500"
            className="vstack-inner-stack"
          >
            <HStack spacing={{ base: 8, md: 12 }}  className="hstack-inner-stack">
           
            <VStack
                spacing={4}
                align={{ base: 'center', md: 'start' }}
                textAlign={{ base: 'center', md: 'left' }}
                className="vstack-inner"
              >
                <Input
                  type="file"
                  accept="image/*"
                  display="none"
                  onChange={(event) => handleAvatarChange(event)}
                  ref={avatarInputRef}
                />
                <Avatar
                  src={data.avatar}
                  height={{ base: 100, md: 150, lg: 200 }}
                  width={{ base: 100, md: 150, lg: 200 }}
                  background="glacier.300"
                />
                <Link onClick={() => avatarInputRef.current.click()}>
                  <HStack spacing={1} align="center">
                    <Icon as={FaUpload} fontSize="lg" />
                    <Text fontSize="md">{lang.get('settings.upload_avatar')}</Text>
                  </HStack>
                </Link>
              </VStack>
              <VStack
                spacing={4}
                align={{ base: 'center', md: 'center' }}
                textAlign={{ base: 'center', md: 'left' }}
              >
                <Box>
                  <HStack spacing={12} >
                  
                  <Text fontSize={{ base: '3xl', md: '5xl' }} color="glacier.500" fontWeight="bold">
                      {authUser.full_name || lang.get('settings.your_name')}
                    </Text>  
                    <HStack spacing={2} align="center">
                      {(authUser.is_verified && authUser.is_email_verified) && (
                      <VerifiedBadge />
                      )}
                      {authUser.plan && (
                      <VipBadge />
                      )}
                    </HStack>               
                  </HStack>
                  {authUser.type == 'creator' &&  <Text fontSize={{ base: 'md', md: 'xl' }} color="glacier.500">
                    @
                    {authUser.username}
                  </Text>}
                    
                </Box>
                
                {authUser.type !== 'creator' && ( <HStack spacing={{ base: 4, md: 12, lg: 24 }}>
                  <Flex direction="column" alignItems="center">
                    <Text
                      fontSize={{ base: '2xl', md: '6xl' }}
                      fontWeight="bold"
                      lineHeight="110%"
                      color="glacier.500"
                    >
                      {authUser.written_reviews_count}
                    </Text>
                    <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="bold" color="glacier.500">
                      {lang.get('settings.reviews')}
                    </Text>
                  </Flex>
                  <Flex direction="column" alignItems="center">
                    <Text
                      fontSize={{ base: '2xl', md: '6xl' }}
                      fontWeight="bold"
                      lineHeight="110%"
                      color="glacier.500"
                    >
                      0
                    </Text>
                    <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="bold" color="glacier.500">
                      {lang.get('settings.read')}
                    </Text>
                  </Flex>
                  <Flex direction="column" alignItems="center">
                    <Text
                      fontSize={{ base: '2xl', md: '6xl' }}
                      fontWeight="bold"
                      lineHeight="110%"
                      color="glacier.500"
                    >
                      0
                    </Text>
                    <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="bold" color="glacier.500">
                      {lang.get('settings.useful')}
                    </Text>
                  </Flex>
                  
                </HStack>
                
                
                )}
               
                
                
              </VStack>
              <VStack
                spacing={4}
                align={{ base: 'center', md: 'right' }}
                textAlign={{ base: 'center', md: 'right' }}
              >
              <div className='action-btn'>
                
              { authUser.type ==='reviewer' && <Button
                    size="sm" 
                    colorScheme="glacier"   
                    borderRadius={25}
                    width={200}
                  > Edit Profile 
                  </Button>}
                  <br/>  <br/>
                  { authUser.type ==='reviewer' && <Button
                    size="sm" 
                    variantColor="teal" variant="outline"
                    // colorScheme="glacier"   
                    borderRadius={25}
                    width={200}
                  ><Icon as={FaRegHeart} marginRight={'10px'} fontSize="lg"/>
                  <Link
                    as={InertiaLink}
                    href={route('auth.favorites.list')}
                    _hover={{ color: 'glacier.500', textDecoration: 'underline' }}
                  >
                    <p className='ml-3 pl-2'>My Favorites </p>  
                  </Link>
                    
                  </Button> }

                </div>
              </VStack>
             
            </HStack>
            {authUser.type === 'creator' && (
              <Button
                as={InertiaLink}
                href={route('users.view', authUser.username)}
                variant="outline"
                borderRadius="50px"
                borderWidth="2px"
                borderColor="glacier.500"
                _hover={{ background: 'transparent' }}
                _focus={{ background: 'transparent' }}
                rightIcon={<Icon as={IoChevronForward} fontSize="lg" />}
                width={{ base: 'full', md: '400px' }}
                justifyContent="space-between"
                p={{ base: 8, md: 10 }}
                fontWeight="semibold"
              >
                <Stack direction="column" spacing={2}>
                  <Text fontSize={{ base: 'lg', md: 'xl' }}>View Live Profile</Text>
                </Stack>
              </Button>
            )}
          </Stack>
        </Container>
      </VStack>
      <Box
        width="full"
        background="#fafafa"
        py={12}
      >
        <Container
          maxWidth="8xl"
          px={{ base: 6, md: 12, lg: 24 }}
        >
          <HStack
            spacing={{ base: 0, md: 12 }}
            width="full"
            align="start"
            wrap={{ base: 'wrap', md: 'nowrap' }}
          >
            <VStack width={{ base: '100%', md: '70%' }} spacing={6} align="left">
              <Text fontSize={{ base: 'xl', md: '2xl' }} color="glacier.500" fontWeight="semibold">{lang.get('settings.personal_information')}</Text>
              {(authUser.type == "creator") &&  <FormControl isRequired isInvalid={errors.username}>
                <HStack justify="end" fontSize="md" spacing={0}>
                  <FormLabel flex={1}>{lang.get('settings.username')}</FormLabel>
                  <Box flex={2}>
                    <Input
                      borderColor="gray.300"
                      errorBorderColor="chantilly.700"
                      borderRadius={12}
                      value={data.username}
                      onChange={(event) => setData('username', event.target.value)}
                    />
                    <FormErrorMessage color="chantilly.700">{errors.username}</FormErrorMessage>
                  </Box>
                </HStack>
              </FormControl> }
              <FormControl isRequired isInvalid={errors.full_name}>
                <HStack justify="end" fontSize="md" spacing={0}>
                  <FormLabel flex={1}>{lang.get('settings.full_name')}</FormLabel>
                  <Box flex={2}> 
                    <Input
                      borderColor="gray.300"
                      errorBorderColor="chantilly.700"
                      borderRadius={12}
                      value={data.full_name}
                      onChange={(event) => setData('full_name', event.target.value)}
                    />
                    <FormErrorMessage color="chantilly.700">{errors.full_name}</FormErrorMessage>
                  </Box>
                </HStack>
              </FormControl>
              <FormControl isRequired isInvalid={errors.email}>
                <HStack justify="end" fontSize="md" spacing={0}>
                  <FormLabel flex={1}>{lang.get('settings.email')}</FormLabel>
                  <Box flex={2}>
                    <Input
                      type="email"
                      borderColor="gray.300"
                      errorBorderColor="chantilly.700"
                      borderRadius={12}
                      value={data.email}
                      onChange={(event) => setData('email', event.target.value)}
                    />
                    <FormErrorMessage color="chantilly.700">{errors.email}</FormErrorMessage>
                  </Box>
                </HStack>
              </FormControl>
              {/* <FormControl isRequired isInvalid={errors.gender}>
                <HStack justify="end" fontSize="md" spacing={0}>
                  <FormLabel flex={1}>{lang.get('settings.gender')}</FormLabel>
                  <Box flex={2}>
                    <RadioGroup defaultValue={data.gender} onChange={(value) => setData('gender', value)}>
                      <Wrap>
                        <WrapItem>
                          <Radio value="male" colorScheme="glacier" size="md">{lang.get('settings.male')}</Radio>
                        </WrapItem>
                        <WrapItem>
                          <Radio value="female" colorScheme="glacier" size="md">{lang.get('settings.female')}</Radio>
                        </WrapItem>
                        <WrapItem>
                          <Radio value="other" colorScheme="glacier" size="md">{lang.get('settings.other')}</Radio>
                        </WrapItem>
                      </Wrap>
                    </RadioGroup>
                    <FormErrorMessage color="chantilly.700">{errors.gender}</FormErrorMessage>
                  </Box>
                </HStack>
              </FormControl> */}
              {/* <FormControl isRequired isInvalid={errors.date_of_birth}>
                <HStack justify="end" fontSize="md" spacing={0}>
                  <FormLabel flex={1}>{lang.get('settings.date_of_birth')}</FormLabel>
                  <Box flex={2}>
                    <Input
                      flex={2}
                      borderColor="gray.300"
                      errorBorderColor="chantilly.700"
                      borderRadius={12}
                      placeholder="YYYY/MM/DD"
                      value={data.date_of_birth}
                      onChange={(event) => setData('date_of_birth', event.target.value)}
                    />
                    <FormErrorMessage color="chantilly.700">{errors.date_of_birth}</FormErrorMessage>
                  </Box>
                </HStack>
              </FormControl> */}
              <FormControl isRequired isInvalid={errors.country}>
                <HStack justify="end" fontSize="md" spacing={0}>
                  <FormLabel flex={1}>{lang.get('settings.country')}</FormLabel>
                  <Box flex={2}>
                    <Select
                      value={data.country}
                      placeholder={lang.get('settings.country')}
                      borderColor="gray.300"
                      errorBorderColor="chantilly.700"
                      borderRadius={12}
                      onChange={(event) => setData('country', event.target.value)}
                    >
                      {Object.entries(countries).map((country) => (
                        <option value={country[0]} key={country[0]}>
                          {country[1]}
                        </option>
                      ))}
                    </Select>
                    <FormErrorMessage color="chantilly.700">{errors.country}</FormErrorMessage>
                  </Box>
                </HStack>
              </FormControl>

              <FormControl >
                <HStack justify="end" fontSize="md" spacing={0}>
                  <FormLabel flex={1}>{lang.get('footer.language.title')}</FormLabel>
                  <Box flex={2}>
                    <Select
                      value={locale}
                      placeholder={lang.get('footer.language.title')}
                      borderColor="gray.300"
                      errorBorderColor="chantilly.700"
                      borderRadius={12}
                      onChange={(event) => handleChangeLocale(event.target.value)}
                    >

                    <option value="en">English</option>
                    <option value="de">German</option>
                      {/* {Object.entries(countries).map((country) => ( */}
                        {/* <option value={country[0]} key={country[0]}>
                          {country[1]}
                        </option> */}
                      {/* ))} */}
                    </Select>
                    <FormErrorMessage color="chantilly.700">{errors.country}</FormErrorMessage>
                  </Box>
                </HStack>
              </FormControl>
              
              {/* <FormControl isRequired isInvalid={errors.type}>
                <HStack justify="end" fontSize="md" spacing={0}>
                  <FormLabel flex={1}>{lang.get('settings.type')}</FormLabel>
                  <Box flex={2}>
                    <RadioGroup defaultValue={data.type} onChange={(value) => setData('type', value)}>
                      <Wrap>
                        <WrapItem>
                          <Radio value="reviewer" colorScheme="glacier" size="md">{lang.get('settings.reviewer')}</Radio>
                        </WrapItem>
                        <WrapItem>
                          <Radio value="creator" colorScheme="glacier" size="md">{lang.get('settings.creator')}</Radio>
                        </WrapItem>
                      </Wrap>
                    </RadioGroup>
                    <FormErrorMessage color="chantilly.700">{errors.type}</FormErrorMessage>
                  </Box>
                </HStack>
              </FormControl> */}
            
              {authUser.type == 'creator' && 
                <FormControl isRequired isInvalid={errors.category_id}>
                  <HStack justify="end" fontSize="md" spacing={0}>
                    <FormLabel flex={1}>{lang.get('settings.category')}</FormLabel>
                    <Box flex={2}>
                      <Select
                        value={data.category_id}
                        placeholder={lang.get('settings.category')}
                        borderColor="gray.300"
                        errorBorderColor="chantilly.700"
                        borderRadius={12}
                        onChange={(event) => setData('category_id', event.target.value)}
                      >
                        {categories.map(renderCategory)}
                      </Select>
                      <FormErrorMessage color="chantilly.700">{errors.category_id}</FormErrorMessage>
                    </Box>
                  </HStack>
                </FormControl>
              }
               { authUser.type == 'creator' && 
                <FormControl isRequired isInvalid={errors.description}>
                  <HStack justify="end" fontSize="md" spacing={0}>
                    <FormLabel flex={1}>{lang.get('settings.description')}</FormLabel>
                    <Box flex={2}>
                      <Textarea
                        value={data.description}
                        borderColor="gray.300"
                        errorBorderColor="chantilly.700"
                        borderRadius={12}
                        onChange={(event) => setData('description', event.target.value)}
                      />
                      <FormErrorMessage color="chantilly.700">{errors.description}</FormErrorMessage>
                    </Box>
                  </HStack>
                </FormControl>
              } 
               { authUser.type == 'creator' && 
                <FormControl isRequired isInvalid={errors.searchable_tags}>
                  <HStack justify="end" fontSize="md" spacing={0}>
                    <FormLabel flex={1}>{lang.get('settings.searchable_tags')}</FormLabel>
                    <Box flex={2}>
                      <Input
                        type="email"
                        borderColor="gray.300"
                        errorBorderColor="chantilly.700"
                        borderRadius={12}
                        value={data.searchable_tags}
                        placeholder="one, two, three, ..."
                        onChange={(event) => setData('searchable_tags', event.target.value)}
                      />
                      <FormErrorMessage color="chantilly.700">{errors.searchable_tags}</FormErrorMessage>
                    </Box>
                  </HStack>
                </FormControl>
              } 
              { authUser.type == 'creator' && <FormControl >
                <HStack justify="end" fontSize="md" spacing={0}>
                  <FormLabel flex={1}>{lang.get('settings.plan')}</FormLabel>
                  <Box flex={2}>
                    <Input
                      value={planName}
                      type="text"
                       borderColor="gray.300"
                      errorBorderColor="chantilly.700"
                      borderRadius={12}
                      readOnly
                    /> 
                   
                  </Box> 
                  <Button
                     className='btn-link'
                     size="sm"
                     colorScheme="glacier" 
                     onClick={() => window.location.href='/checkout/my-plan' } 
                     title="If you want to upgrade your plan please click here"
                     width={10}
                  ><Icon as={FaLink} fontSize="lg" />   </Button>
                </HStack>
              </FormControl> }
              <FormControl isInvalid={errors.password}>
                <HStack justify="end" fontSize="md" spacing={0}>
                  <FormLabel flex={1}>{lang.get('settings.password')}</FormLabel>
                  <Box flex={2}>
                    <Input
                      value={data.password}
                      type="password"
                      borderColor="gray.300"
                      errorBorderColor="chantilly.700"
                      borderRadius={12}
                      onChange={(event) => setData('password', event.target.value)}
                    />
                    <FormErrorMessage color="chantilly.700">{errors.password}</FormErrorMessage>
                  </Box>
                </HStack>
              </FormControl>
              <FormControl className='d-flex custom-delete-user justify-content-between'>
              <HStack justify="end" fontSize="md" spacing={0}>
                  <FormLabel flex={1}>{lang.get('Delete Profile')}</FormLabel>
              </HStack>
              <Box >
              <Button
                size="lg"
                className='btn-block'
                colorScheme="red"
            //    isLoading={processing}
                loadingText={'Delete Profile'}
                onClick={handleDeleteUser}
                borderRadius={12}
                width={200}
              ><Icon as={FaTrashAlt} fontSize="lg" /> </Button>
              {/* <button className='btn btn-danger Delete-user' onClick={handleDeleteUser}> <Icon as={FaTrashAlt} fontSize="lg" /> </button> */}
              </Box>

              </FormControl>

              
              <Button
                size="lg"
                colorScheme="glacier"
                isLoading={processing}
                loadingText={lang.get('settings.saving')}
                onClick={handleSubmit}
                borderRadius={12}
                width={200}
              >
                {lang.get('settings.save')}
              </Button>
            </VStack>
            <Stack direction="column" width={{ base: '100%', md: '30%' }}>
            {authUser.type === 'reviewer' &&  <VStack
                spacing={4}
                pt={{ base: 8, md: 0 }}
                align="left"
              >
                <HStack justify="space-between" align="center">
                  <Text fontSize={{ base: 'xl', md: '2xl' }} color="glacier.500" fontWeight="semibold">
                    {lang.get('settings.my_favorites')}
                  </Text>
                  <Link  as={InertiaLink} href={route('auth.favorites.list')} color="glacier.500" fontSize="md" fontWeight="medium">
                    {lang.get('settings.view_all')}
                  </Link>
                </HStack>
                <InputGroup size="lg">
                  <Input
                    background="white"
                    boxShadow="sm"
                    placeholder={lang.get('settings.search')}
                    _placeholder={{ fontSize: 'md' }}
                    fontSize="md"
                  />
                  <InputRightElement>
                    <SearchIcon color="gray.400" />
                  </InputRightElement>
                </InputGroup>
                <VStack align="start">
                  {favorites.map(renderFavorite)}
                </VStack>
              </VStack> }
              {authUser.type === 'creator' && (
              <VStack
                spacing={4}
                pt={{ base: 8, md: 0 }}
                align="left"
              >
                {/* <HStack justify="space-between" align="center">
                  <Text fontSize={{ base: 'xl', md: '2xl' }} color="glacier.500" fontWeight="semibold">
                    {lang.get('settings.platforms')}
                  </Text>
                  <Link as={InertiaLink} href={route('auth.setup')} color="glacier.500" fontSize="md" fontWeight="medium">
                    {lang.get('settings.edit')}
                  </Link>
                </HStack> */}
                {authUser.onlyfans_username && (
                  <Box
                    bg="white"
                    p={4}
                    borderRadius={12}
                    boxShadow="sm"
                  >
                    <HStack justify="space-between">
                      <HStack spacing={3}>
                        <Icon as={SiOnlyfans} color="glacier.500" />
                        <Text fontSize="md" fontWeight="semibold">OnlyFans</Text>
                      </HStack>
                      {/* <Button size="xs" colorScheme="green" variant="outline">Verify</Button> */}
                    </HStack>
                  </Box>
                )}
                {authUser.fansly_username && (
                  <Box
                    bg="white"
                    p={4}
                    borderRadius={12}
                    boxShadow="sm"
                  >
                    <HStack justify="space-between">
                      <HStack spacing={3}>
                        <FanslyIcon />
                        <Text fontSize="md" fontWeight="semibold">Fansly</Text>
                      </HStack>
                      {/* <Button size="xs" colorScheme="green" variant="outline">Verify</Button> */}
                    </HStack>
                  </Box>
                )}
                {authUser.patreon_username && (
                <Box
                  bg="white"
                  p={4}
                  borderRadius={12}
                  boxShadow="sm"
                >
                  <HStack justify="space-between">
                    <HStack spacing={3}>
                      <Icon as={SiPatreon} color="glacier.500" />
                      <Text fontSize="md" fontWeight="semibold">Patreon</Text>
                    </HStack>
                    {/* <Button size="xs" colorScheme="green" variant="outline">Verify</Button> */}
                  </HStack>
                </Box>
                )}
                {authUser.twitch_username && (
                <Box
                  bg="white"
                  p={4}
                  borderRadius={12}
                  boxShadow="sm"
                >
                  <HStack justify="space-between">
                    <HStack spacing={3}>
                      <Icon as={SiTwitch} color="glacier.500" />
                      <Text fontSize="md" fontWeight="semibold">Twitch</Text>
                    </HStack>
                    {/* <Button size="xs" colorScheme="green" variant="outline">Verify</Button> */}
                  </HStack>
                </Box>
                )}
                {authUser.youtube_username && (
                <Box
                  bg="white"
                  p={4}
                  borderRadius={12}
                  boxShadow="sm"
                >
                  <HStack justify="space-between">
                    <HStack spacing={3}>
                      <Icon as={SiYoutube} color="glacier.500" />
                      <Text fontSize="md" fontWeight="semibold">YouTube</Text>
                    </HStack>
                    {/* <Button size="xs" colorScheme="green" variant="outline">Verify</Button> */}
                  </HStack>
                </Box>
                )}
                {authUser.kickstarter_username && (
                <Box
                  bg="white"
                  p={4}
                  borderRadius={12}
                  boxShadow="sm"
                >
                  <HStack justify="space-between">
                    <HStack spacing={3}>
                      <Icon as={SiKickstarter} color="glacier.500" />
                      <Text fontSize="md" fontWeight="semibold">Kickstarter</Text>
                    </HStack>
                    {/* <Button size="xs" colorScheme="green" variant="outline">Verify</Button> */}
                  </HStack>
                </Box>
                )}
                {authUser.soundcloud_username && (
                <Box
                  bg="white"
                  p={4}
                  borderRadius={12}
                  boxShadow="sm"
                >
                  <HStack justify="space-between">
                    <HStack spacing={3}>
                      <Icon as={SiSoundcloud} color="glacier.500" />
                      <Text fontSize="md" fontWeight="semibold">SoundCloud</Text>
                    </HStack>
                    {/* <Button size="xs" colorScheme="green" variant="outline">Verify</Button> */}
                  </HStack>
                </Box>
                )}
              </VStack>
              )}
            </Stack>
          </HStack>
        </Container>
      </Box>
      <Footer />
      <Modal
        size="sm"
        isOpen={isOpenAlertModal}
        onClose={handleClose}
        closeOnOverlayClick={true}
        isCentered
      >
        <ModalOverlay />
        <ModalContent bg="gray.900">
          <Stack direction={{ base: 'column', md: 'row' }} align="center">
            <Box width="full" color="white" textAlign="center" p={10}>
              <VStack width="full" spacing={8} justify="center">
                <VStack spacing={4}>
                  <Text fontSize="2xl" fontWeight="medium" W>Removed Successfully!</Text>
                </VStack>
                <Button
                  width="full"
                  size="lg"
                  colorScheme="chantilly"
                  onClick={handleClose}
                >
                  Close
                </Button>
              </VStack>
            </Box>
          </Stack>
        </ModalContent>
      </Modal>
      {/* <Modal
          size="2xl"
          isOpen={isUserTypeModalOpen} backdrop="static"
          closeOnOverlayClick={false}
          isCentered
        >
        <ModalOverlay />
        <ModalContent bg="gray.900">
          <Stack direction={{ base: 'column', md: 'row' }} align="center">
            <Image src="/images/promo-code-cta.jpg" height={{ base: '0px', md: '400px' }} />
            <Box width="full" color="white" textAlign="center" p={10}>
              <VStack width="full" spacing={8} justify="center">
                <VStack spacing={4}>
                  <Text fontSize="2xl" fontWeight="medium" W>Are you signing up as a creator or reviewer?</Text>
                </VStack>
                <Button
                  width="65%"
                  size="md"
                  colorScheme="glacier"
                  as={InertiaLink}
                  href={route('auth.update.usertype', 'creator')}
                >
                  I'm a Creator
                </Button>
                <Button
                  width="65%"
                  size="md"
                  colorScheme="glacier"
                  as={InertiaLink}
                  href={route('auth.update.usertype', 'reviewer')}
                >
                  I'm a Reviewer
                </Button>
              </VStack>
            </Box>
          </Stack>
        </ModalContent>
      </Modal> */}

     
    </>
  );
};

Settings.layout = (page) => <Layout children={page} />;

export default Settings;
