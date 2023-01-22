import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import {
  Container,
  Avatar,
  Box,
  Text,
  Icon,
  Button,
  VStack,
  HStack,
  Stack,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalContent,
  Textarea,
  StackDivider,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  ButtonGroup,
  Progress, TabPanels, TabPanel, Tabs, Alert, AlertIcon, Link,
  Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider,
    Popover,
    PopoverTrigger,
    PopoverHeader,
    PopoverContent,
    PopoverArrow,
    PopoverCloseButton,
    PopoverBody,
} from '@chakra-ui/react';

import { IoChevronForward, IoChevronDown } from 'react-icons/io5';
import CanelaText from '@/components/UI/CanelaText';
import {
  Head, InertiaLink, useForm, usePage,
} from '@inertiajs/inertia-react';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import Layout from '@/shared/Layout';

import Navigation from '@/components/UI/Navigation';
import Footer from '@/components/UI/Footer';

import { toggleMobileMenu, selectGlobal } from '@/slices/globalSlice';
import VerifiedBadge from '@/components/UI/VerifiedBadge';
import VipBadge from '@/components/UI/VipBadge';

import renderStars from '@/utils/renderStars';
import useRoutes from '@/utils/useRoutes';
import useRoutesAsync from '@/utils/useRoutesAsync';
import useLang from '@/utils/useLang';
import {Helmet} from 'react-helmet';
import one from '../assets/img/one.png'
import two from '../assets/img/two.png'
import three from '../assets/img/three.png'
import four from '../assets/img/four.png'
import five from '../assets/img/five.png'
import six from '../assets/img/six.png'
import seven from '../assets/img/seven.png'
import { FaPaperPlane } from 'react-icons/fa';  
import $ from 'jquery'
import '../assets/popup.css';
import '../../css/app_dev.css'; 
import ReactStars from 'react-stars';
const CreatorDashboard = ({ lineChartCount }) => {
  const dispatch = useDispatch();
  const { isMobileMenuOpen } = useSelector(selectGlobal);
  const { authUser, flash } = usePage().props;
  const route = useRoutes();
  const routeAsync = useRoutesAsync();
  const { locale } = usePage().props;
  const lang = useLang(locale);
  lang.setFallback("en");
  const [period, setPeriod] = useState('today');
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [isRespondModalOpen, setIsRespondModalOpen] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const [isFiltering, setIsFiltering] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const {
    data, setData, post, processing, errors,
  } = useForm({
    id: '',
    description: '',
    response: '',
  });

  const handleUserProfile = (username) => {
    window.location.href = '/@'+ username ; 
  }

  function handleOpenInviteModal() {
    setIsInviteModalOpen(true);
  }

  function handleCloseInviteModal() {
    setIsInviteModalOpen(false);
  }
  function closeAlertVerify(){
    setOpen(true); 
  }

  function openAlertVerify(){
    setOpen(false); 
  }

  function handleOpenRespondModal(id, description) {
    setData({
      id,
      description,
    });
    setIsRespondModalOpen(true);
  }

  function handleCloseRespondModal() {
    setIsRespondModalOpen(false);
  }

  function handleRespond() {
    post(route('creator_dashboard.respond_to_review'));
  }

  function handleInviteSubmit(){
    var valid = true;
    $('#exampleInputEmail').css('border-color', '#ced4da');
    if($('#exampleInputEmail').val() == null || $('#exampleInputEmail').val() == ''){
      valid = false;
      $('#exampleInputEmail').css('border-color', '#ff7559');
    }
    if(valid){
      $('Button#inviteSubmitBtn').text('Sending...').attr('disabled');
      $('form#reviewInvite').submit();

    }
  }

  async function handleFilterReviews() {
    const url = await routeAsync('api.creator_dashboard.filter_reviews', { period });
    setIsFiltering(true);
    const response = await fetch(url);
    const reviews = await response.json();
    setFilteredReviews(reviews);
    setIsFiltering(false);
  }

  const lineChartCountData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Reviews',
        data: lineChartCount,
        fill: false,
        backgroundColor: '#90c8e3',
        borderColor: 'rgba(144, 200, 227, 0.2)',
      },
    ],
  };

  const lineChartCountOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  useEffect(() => {
    console.log(authUser);
    if(!authUser.is_verified){
      $(function(){
        var overlay = $('<div id="overlay"></div>');
        overlay.show();
        overlay.appendTo(document.body);
        setOpen(false);
        $('.close').click(function(){
          setOpen(true);
          overlay.appendTo(document.body).remove();
          return false;
        });
        $('.x').click(function(){
          setOpen(true);
          overlay.appendTo(document.body).remove();
          return false;
        });
        $(document).on('click', '.platform_image',  function(){
          $('.platform_image').removeClass('active_link');
          $(this).addClass('active_link');
        });
        $(document).on('click', '.verify_btn',  function(){
          if($('.active_link').length){
            var platfromtype = $('.active_link').data('type');
            if(platfromtype != ''){
              window.location.href = window.location.protocol + "//" + window.location.host + "/verify/"+platfromtype;
            }
          }else{
            alert('Please select the platform.')
          }
        });
      });
    }     
  }, []);

 //Function to implement

  const renderInvitation = (invite) => {

    return (
        <Box>
        <HStack width="full" justify="space-between" align="center">
        <Stack direction="row" width="full" pt={2} pb={{ base: '10', lg:'10' }}>
        <Stack direction="row" width={{ base: '70%', lg:'75%' }}>
        <Link
          as={InertiaLink}
          href=""
        >
          <Avatar
            src=""
            height={{ base: 50, md: 55 }}
            width={{ base: 50, md: 55 }}
            borderRadius={{ base: 25, md: 25 }}
            background="glacier.300"
          />

        </Link>
        <Stack direction="column">
        <VStack align="start" pl={2}>
            <Link
              as={InertiaLink}
              href=""
              _hover={{ color: 'glacier.500', textDecoration: 'underline' }}
            >
              <Text fontSize={{ base: 'sm', lg:'lg' }} fontWeight="semibold">{invite.email}</Text>
            </Link>
          </VStack>
        </Stack>
        </Stack>

        <VStack align="center" p={{ base: '5', lg:'5' }} width={{ base: '30%', lg:'25%' }}>
          {invite.status == 0 && 
            <Button
              size={{ base: 'sm', lg:'lg' }}
              background="glacier.400"
              color="ghostwhite"
              _hover={{ background: 'glacier.400'}}
              borderRadius={15}
              px={5}
              py={1}
            >
              <Text fontSize={{ base: 'xs', lg:'lg' }} fontWeight='thin'>Waiting</Text>
            </Button>
          }
          {invite.status == 1 && 
            <Button
              size={{ base: 'sm', lg:'lg' }}
              background="green"
              color="ghostwhite"
              _hover={{ background: 'green'}}
              borderRadius={15}
              px={4}
              py={1}
            >
              <Text fontSize={{ base: 'xs', lg:'lg' }} fontWeight='thin'>Accepted</Text>
            </Button>
          }
        </VStack>
        </Stack>


      </HStack>
      </Box>
    );
  };

  const renderReview = (review) => (
    <HStack width="full" justify="space-between" align="start" key={review.id}>
    <Stack pb={{ base: '10', lg:'20' }}>
    <Text fontSize={{ base: 'xx-small', md:'md' }} fontWeight="semibold">{review.date}</Text>
    </Stack>
    <Stack pb={{ base: '10', lg:'20' }}>
    <Text fontSize={{ base: 'xx-small', md:'md' }}>{review.title}</Text>
    </Stack>
    <Stack pb={{ base: '10', lg:'20' }}>
    <HStack spacing={1}>
        {renderStars(review.rating, { base: 'xx-small', md: 'xs' })}
      </HStack>
    </Stack>
    <Stack pb={{ base: '10', lg:'20' }}>
    <Text color="glacier.500" fontSize={{ base: 'xx-small', md:'md' }} fontWeight="semibold">{review.status}</Text>
    </Stack>
    <Stack pb={{ base: '10', lg:'20' }}>
    <Button
        size={{ base: 'xx-small', md:'md' }}
        colorScheme="glacier"
        //borderRadius={{ base: '20', md:'20' }}
        borderRadius={15}
        onClick={() => handleOpenRespondModal(review.id, review.description)}
        isDisabled={review.response}
        px={3}
      >
        <Text fontSize={{ base: 'xx-small', md:'md' }} fontWeight='thin'>Respond</Text>
      </Button>
    </Stack>
    <Stack pb={{ base: '10', lg:'20' }}>
    <Menu>
  <MenuButton as={Button}
  size={{ base: 'xx-small', sm:'sm' }}
  //colorScheme="glacier"
  //borderRadius={{ base: '20', md:'20' }}
  borderRadius={15}
  backgroundColor="transparent"
  color="black"
  //onClick={() => handleOpenRespondModal(review.id, review.description)}
  //isDisabled={review.response}
  >
    <Text fontSize={{ base: 'xx-small', sm:'sm' }}><IoChevronDown/></Text>
  </MenuButton>
  <MenuList backgroundColor="transparent" borderColor="transparent">
   <MenuItem as={Button} href="#" size={{ base: 'xx-small', sm:'sm' }} _hover={{ textDecoration: 'none', backgroundColor:'gray.200'}} width={{ base: '35%'}} marginLeft={{ base: '50%', sm: '0%'}}>
        <Text fontSize={{ base: 'xx-small', sm:'sm' }}>View</Text>
   </MenuItem>
   <MenuItem as={Button} size={{ base: 'xx-small', sm:'sm' }} _hover={{ textDecoration: 'none', backgroundColor:'gray.200'}} width={{ base: '35%'}} marginLeft={{ base: '50%', sm: '0%'}}
   onClick={() => handleOpenRespondModal(review.id, review.description)} isDisabled={review.response}><Text fontSize={{ base: 'xx-small', sm:'sm' }}>Respond</Text></MenuItem>
   <MenuItem as={Button} href="#" size={{ base: 'xx-small', sm:'sm' }} _hover={{ textDecoration: 'none', backgroundColor:'gray.200'}} width={{ base: '35%'}} marginLeft={{ base: '50%', sm: '0%'}}><Text fontSize={{ base: 'xx-small', sm:'sm' }}>Flag</Text></MenuItem>
  </MenuList>
</Menu>
    </Stack>

    </HStack>

  );

  useEffect(() => {
    handleFilterReviews();
  }, []);

  return (
    <>
      {/* <Head>
        <title>{lang.get('creator_dashboard.meta_title')}</title>
      </Head> */}
      <Helmet>
        <title>{lang.get('creator_dashboard.meta_title')}</title>
      </Helmet>
      <VStack
        spacing={0}
        background="glacier.900"
      >
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
          maxWidth="8xl"
          px={{ base: 6, md: 12, lg: 24 }}
          pt={8}
          pb={16}
          className="mt-5"
        >
          <Breadcrumb
            spacing="16px"
            separator={<Icon as={IoChevronForward} fontSize="xs" />}
            color="white"
            mb={6}
          >
            <BreadcrumbItem key={authUser.category.slug}>
              <BreadcrumbLink as={InertiaLink} href={route('categories.view', authUser.category.slug)}>{authUser.category.name}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">{authUser.full_name}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={8}
            align="center"
            justify={{ base: 'center', md: 'space-between' }}
            color="white"
          >
            <HStack spacing={{ base: 8, md: 12, lg: 24 }}>
              <Avatar
                src={authUser.avatar}
                height={{ base: 100, md: 120, lg: 200 }}
                width={{ base: 100, md: 120, lg: 200 }}
                background="glacier.300"
              />
              <VStack
                spacing={6}
                align={{ base: 'center', md: 'start' }}
                textAlign={{ base: 'center', md: 'left' }}
              >
                <Box>
                  <HStack spacing={6} align="center">
                    <Text fontSize={{ base: '3xl', md: '5xl' }} fontWeight="bold">
                      {authUser.full_name}
                    </Text>
                    <HStack spacing={3} align="center">
                      {(authUser.is_verified && authUser.is_email_verified) && (
                      <VerifiedBadge />
                      )}
                      {authUser.plan && (
                      <VipBadge />
                      )}
                    </HStack>
                  </HStack>
                  <Text fontSize={{ base: 'md', md: 'xl' }}>
                    Reviews
                    {' '}
                    {authUser.received_reviews_count}
                    {' '}
                    -
                    {' '}
                    {authUser.rating_text}
                  </Text>
                </Box>
                <HStack spacing={1}>
                  <div style={{pointerEvents:'none'}}>
                    <ReactStars count={5} value={authUser.rating} size={24} color2={'#ffd700'} />
                  </div>
                  <Text
                    fontSize="md"
                    fontWeight="bold"
                    pl={{ base: 4, md: 8 }}
                  >
                    {authUser.rating}
                  </Text>
                </HStack>
              </VStack>
            </HStack>
            <Menu>
              <MenuButton
                as={Button}
                onClick={ ()=> handleUserProfile(authUser.username) }
                borderRadius="50px"
                borderWidth="2px"
                background="transparent"
                textAlign="left"
                _hover={{ background: 'transparent' }}
                _focus={{ background: 'transparent' }}
                _active={{ background: 'transparent' }}
                rightIcon={<Icon as={IoChevronForward} fontSize="lg"/>}
                width={{ base: 'full', md: '400px' }}
                justifyContent="space-between"
                p={{ base: 8, md: 10 }}

                fontWeight="semibold"
              >
                <Stack direction="column" spacing={2}>
                  <Text fontSize={{ base: 'lg', md: 'xl' }}>View Live Profile</Text>
                </Stack>
              </MenuButton>
              {/* <MenuList color="black">
                {authUser.onlyfans_username && (
                  <MenuItem
                    as={Link}
                    href={`https://onlyfans.com/${authUser.onlyfans_username}`}
                    _hover={{ textDecoration: 'none' }}
                    isExternal
                  >
                    OnlyFans
                  </MenuItem>
                )}
                {authUser.fansly_username && (
                  <MenuItem
                    as={Link}
                    href={`https://fansly.com/${authUser.fansly_username}`}
                    _hover={{ textDecoration: 'none' }}
                    isExternal
                  >
                    Fansly
                  </MenuItem>
                )}
                {authUser.patreon_username && (
                  <MenuItem
                    as={Link}
                    href={`https://patreon.com/${authUser.patreon_username}`}
                    _hover={{ textDecoration: 'none' }}
                    isExternal
                  >
                    Patreon
                  </MenuItem>
                )}
                {authUser.twitch_username && (
                  <MenuItem
                    as={Link}
                    href={`https://twitch.com/${authUser.twitch_username}`}
                    _hover={{ textDecoration: 'none' }}
                    isExternal
                  >
                    Twitch
                  </MenuItem>
                )}
                {authUser.youtube_username && (
                  <MenuItem
                    as={Link}
                    href={`https://youtube.com/channel/${authUser.youtube_username}`}
                    _hover={{ textDecoration: 'none' }}
                    isExternal
                  >
                    YouTube
                  </MenuItem>
                )}
                {authUser.kickstarter_username && (
                  <MenuItem
                    as={Link}
                    href={`https://kickstarter.com/profile/${authUser.kickstarter_username}`}
                    _hover={{ textDecoration: 'none' }}
                    isExternal
                  >
                    Kickstarter
                  </MenuItem>
                )}
                {authUser.soundcloud_username && (
                <MenuItem
                  as={Link}
                  href={`https://kickstarter.com/${authUser.soundcloud_username}`}
                  _hover={{ textDecoration: 'none' }}
                  isExternal
                >
                  <HStack spacing={1}>
                    <Text>SoundCloud</Text>
                  </HStack>
                </MenuItem>
                )}
              </MenuList> */}
            </Menu>
          </Stack>
        </Container>
      </VStack>
      <VStack
        background="#fafafa"
        pb={12}
      >
        <Container
          maxWidth="8xl"
          px={{ base: 6, md: 12, lg: 24 }}
        >
          <Stack
            direction={{ base: 'column', md: 'row' }}
            align="start"
            justify="start"
            wrap={{ base: 'wrap', md: 'nowrap' }}
            spacing={12}
            pt={10}
          >
            <Box
              width={{ base: 'full', md: '25%' }}
              bg="glacier.500"
              p={4}
              borderRadius={12}
              color="white"
            >
              <VStack width="full" spacing={4} align="start">
                <Button
                  as={InertiaLink}
                  href={route('users.view', authUser.username)}
                  width="full"
                  color="white"
                  borderColor="white"
                  variant="outline"
                  borderRadius={12}
                  _hover={{ backgroundColor: 'whiteAlpha.300' }}

                >
                  {lang.get('creator_dashboard.home')}
                </Button>
                <Popover
        placement="bottom"
        trigger="hover"
        arrowShadowColor="gray.600"
      >
        <PopoverTrigger>

            <Button
                  width="full"
                  color="white"
                  borderColor="white"
                  variant="outline"
                  borderRadius={12}
                  _hover={{ backgroundColor: 'whiteAlpha.300' }}
                  //isDisabled={!authUser.plan}
                  onClick={handleOpenInviteModal}
                >
                  {lang.get('creator_dashboard.get_reviews')}
                </Button>

        </PopoverTrigger>
        <PopoverContent background="white" borderColor="gray.600" color="black">
          {/*<PopoverHeader fontWeight="semibold" borderColor="gray.500">{lang.get('badges.verified.title')}</PopoverHeader> */}
          <PopoverArrow bg="gray.600" />
          <PopoverBody>
            <center>{lang.get('creator_dashboard.get_reviewspopbody')}</center>
          </PopoverBody>
        </PopoverContent>
      </Popover>

                <Popover
        placement="bottom"
        trigger="hover"
        arrowShadowColor="gray.600"
      >
        <PopoverTrigger trigger="click">

            {/*<Icon as={IoCheckmarkCircleOutline} fontSize="3xl" color="green.200" />*/}
            <Button
                  width="full"
                  color="white"
                  borderColor="white"
                  variant="outline"
                  borderRadius={12}
                  _hover={{ backgroundColor: 'whiteAlpha.300' }}
                  //onClick={() => setTabIndex(1)}
                >
                  {lang.get('creator_dashboard.analytics')}
            </Button>

        </PopoverTrigger>
        <PopoverContent background="white" borderColor="gray.600" color="black">
          {/*<PopoverHeader fontWeight="semibold" borderColor="gray.500">{lang.get('badges.verified.title')}</PopoverHeader> */}
          <PopoverArrow bg="white" />
          <PopoverBody>
            <center>coming soon...</center>
          </PopoverBody>
        </PopoverContent>
      </Popover>
                <Button
                  as={InertiaLink}
                  href={route('auth.settings')}
                  width="full"
                  color="white"
                  borderColor="white"
                  variant="outline"
                  borderRadius={12}
                  _hover={{ backgroundColor: 'whiteAlpha.300' }}
                >
                  {lang.get('creator_dashboard.settings')}
                </Button>
                {!authUser.is_verified &&
                  <Button
                    //as={InertiaLink}
                    //href={route('auth.setup')}
                    width="full"
                    color="white"
                    borderColor="white"
                    variant="outline"
                    borderRadius={12}
                    onClick={openAlertVerify}
                    _hover={{ backgroundColor: 'whiteAlpha.300' }}
                  >
                    {lang.get('creator_dashboard.verify_profile')}
                  </Button>
                }
                {authUser.is_verified &&
                  <Button
                    as={InertiaLink}
                    href={route('auth.setup')}
                    width="full"
                    color="white"
                    borderColor="white"
                    variant="outline"
                    borderRadius={12}
                    _hover={{ backgroundColor: 'whiteAlpha.300' }}
                  >
                   Verified Platforms
                  </Button>
                }
              </VStack>
            </Box>
            <Box
              width={{ base: 'full', md: '75%' }}
            >

            <Box
              bg="white"

              borderRadius={12}
              color="black"
              boxShadow="sm"
            >

              <Tabs index={tabIndex}>
                <TabPanels>
                  <TabPanel>
                    <HStack justify="space-between" align="center" mb={8}>
                      <Text fontSize={{ base: 'xs', lg:'lg' }} fontWeight="bold">{lang.get('creator_dashboard.reviews')}</Text>
                      <ButtonGroup variant="outline" size="xs" isAttached>
                        <Button
                          colorScheme={period === 'today' ? 'glacier' : 'gray'}
                          onClick={() => setPeriod('today')}
                        >
                          <Text fontSize={{ base: 'xx-small', sm:'sm' }}>{lang.get('creator_dashboard.today')}</Text>
                        </Button>
                        <Button
                          colorScheme={period === 'this_week' ? 'glacier' : 'gray'}
                          onClick={() => setPeriod('this_week')}
                        >
                          <Text fontSize={{ base: 'xx-small', sm:'sm' }}>{lang.get('creator_dashboard.this_week')}</Text>
                        </Button>
                        <Button
                          colorScheme={period === 'this_month' ? 'glacier' : 'gray'}
                          onClick={() => setPeriod('this_month')}
                        >
                          <Text fontSize={{ base: 'xx-small', sm:'sm' }}>{lang.get('creator_dashboard.this_month')}</Text>
                        </Button>
                        <Button
                          colorScheme={period === 'all' ? 'glacier' : 'gray'}
                          onClick={() => setPeriod('all')}
                        >
                          <Text fontSize={{ base: 'xx-small', sm:'sm' }}>{lang.get('creator_dashboard.all')}</Text>
                        </Button>
                        <Button
                          variant="solid"
                          colorScheme="glacier"
                          onClick={handleFilterReviews}
                          isLoading={isFiltering}
                          loadingText={<Text fontSize={{ base: 'xx-small', sm:'sm' }}>{lang.get('creator_dashboard.filter_loading')}</Text>}
                        >
                          <Text fontSize={{ base: 'xx-small', sm:'sm' }}>{lang.get('creator_dashboard.filter')}</Text>
                        </Button>
                      </ButtonGroup>
                    </HStack>
                    <VStack width="full" spacing={4} align="start" divider={<StackDivider borderColor="gray.200" />}>
                      {filteredReviews.map(renderReview)}
                      {!filteredReviews.length && (
                        <Box
                          width="full"
                          align="center"
                        >
                          <Text fontSize="md" textAlign="center">
                            {lang.get('creator_dashboard.no_results')}
                          </Text>
                        </Box>
                      )}
                    </VStack>


                  </TabPanel>
                  <TabPanel>
                    <HStack justify="space-between" align="center" mb={8}>
                      <Text fontSize="lg" fontWeight="bold">{lang.get('creator_dashboard.reviews_by_day')}</Text>
                    </HStack>
                    <Line data={lineChartCountData} options={lineChartCountOptions} />
                  </TabPanel>
                  <TabPanel>
                    <HStack justify="space-between" align="center" mb={8}>
                      <Text fontSize={{ base: 'xs', lg:'lg' }} fontWeight="bold">{lang.get('creator_dashboard.reviews')}</Text>
                      <ButtonGroup variant="outline" size="xs" isAttached>
                      <Button
                          colorScheme={period === 'all' ? 'glacier' : 'gray'}
                          onClick={() => setPeriod('all')}
                        >
                          <Text fontSize={{ base: 'xx-small', sm:'sm' }}>{lang.get('creator_dashboard.all')}</Text>
                        </Button>
                        <Button
                          colorScheme={period === 'today' ? 'glacier' : 'gray'}
                          onClick={() => setPeriod('today')}
                        >
                          <Text fontSize={{ base: 'xx-small', sm:'sm' }}>{lang.get('creator_dashboard.today')}</Text>
                        </Button>
                        <Button
                          colorScheme={period === 'this_week' ? 'glacier' : 'gray'}
                          onClick={() => setPeriod('this_week')}
                        >
                          <Text fontSize={{ base: 'xx-small', sm:'sm' }}>{lang.get('creator_dashboard.this_week')}</Text>
                        </Button>
                        <Button
                          colorScheme={period === 'this_month' ? 'glacier' : 'gray'}
                          onClick={() => setPeriod('this_month')}
                        >
                          <Text fontSize={{ base: 'xx-small', sm:'sm' }}>{lang.get('creator_dashboard.this_month')}</Text>
                        </Button>
                        <Button
                          variant="solid"
                          colorScheme="glacier"
                          onClick={handleFilterReviews}
                          isLoading={isFiltering}
                          loadingText={<Text fontSize={{ base: 'xx-small', sm:'sm' }}>{lang.get('creator_dashboard.filter_loading')}</Text>}
                        >
                          <Text fontSize={{ base: 'xx-small', sm:'sm' }}>{lang.get('creator_dashboard.filter')}</Text>
                        </Button>
                      </ButtonGroup>
                    </HStack>
                    <VStack width="full" spacing={4} align="start" divider={<StackDivider borderColor="gray.200" />}>
                      {filteredReviews.map(renderReview)}
                      {!filteredReviews.length && (
                        <Box
                          width="full"
                          align="center"
                        >
                          <Text fontSize="md" textAlign="center">
                            {lang.get('creator_dashboard.no_results')}
                          </Text>
                        </Box>
                      )}
                    </VStack>


                  </TabPanel>

                </TabPanels>
              </Tabs>



            </Box>

            <Box p={5}>

            </Box>
            {authUser.review_invites.length > 0 && 
              <Box
                bg="white"
                pt={5}
                pl={5}
                borderRadius={12}
                color="black"
                boxShadow="sm"
              >
              <Text fontSize={{ base: 'xs', lg:'lg' }} fontWeight="bold">{lang.get('creator_dashboard.invitation_status')}</Text>
              {/* {renderInvitation()}   Render Invitation Design */}
              {authUser.review_invites.map(renderInvitation)}
              </Box>
            }
            </Box>

          </Stack>
        </Container>
      </VStack>
      <Footer />
      <Modal isOpen={isInviteModalOpen} onClose={handleCloseInviteModal} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{lang.get('creator_dashboard.get_reviews_modal.title')}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack w="full" spacing={4}>
              <Text
                fontWeight="medium"
                fontSize="sm"
                dangerouslySetInnerHTML={{ __html: lang.get('creator_dashboard.get_reviews_modal.instructions') }}
              />
              {authUser.can_invite && 
              <form action={route('pages.creator.reviewinvite')} method='GET' id="reviewInvite" style={{width: '100%'}}>
                <div class="form-group">
                  <label><b>Enter emails (single or comma separated)</b></label>
                  <textarea name='email'  required class="form-control" id="exampleInputEmail" placeholder="Enter emails (single or comma separated)"/>
                </div>
              </form>}
              
              <Box w="full">
                <Progress colorScheme="glacier" value={authUser.invite_quota_percentage} />
              </Box>
              <Text fontWeight="medium" fontSize="sm">
                {lang.get('creator_dashboard.get_reviews_modal.quota', { count: authUser.monthly_review_invites_count, max_count: authUser.invite_quota })}
              </Text>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleCloseInviteModal}>
              {lang.get('creator_dashboard.get_reviews_modal.button')}
            </Button>
            {authUser.can_invite && 
            <Button
              colorScheme="glacier"
              onClick={handleInviteSubmit}
              id="inviteSubmitBtn"
              ml={3}
            >
              Send Invitation
            </Button>}
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={isRespondModalOpen} onClose={handleCloseRespondModal} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{lang.get('creator_dashboard.respond_modal.title')}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack w="full" spacing={4} align="start">
              {flash.message && (
                <Alert
                  status="success"
                  variant="left-accent"
                >
                  <HStack align="center">
                    <AlertIcon />
                    <Text fontSize="sm">{flash.message}</Text>
                  </HStack>
                </Alert>
              )}
              <Text fontWeight="medium" fontSize="sm">
                {data.description}
              </Text>
              <Textarea
                fontSize="sm"
                onChange={(event) => setData('response', event.target.value)}
              >
                {data.response}
              </Textarea>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleCloseRespondModal}>
              {lang.get('creator_dashboard.respond_modal.button_1')}
            </Button>
            <Button
              colorScheme="glacier"
              isLoading={processing}
              loadingText={lang.get('creator_dashboard.respond_modal.button_2_loading')}
              onClick={handleRespond}
              isDisabled={data.response && data.response.length < 1}
              ml={3}
            >
              {lang.get('creator_dashboard.respond_modal.button_2')}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {!authUser.is_verified && !isOpen && (
        <div className='popup'>
        <div className='cnt223 row'>
        <div className="one_side col-lg-6"></div>
        <div className="two_side col-lg-6">
        <button  className='closeBtn btn btn-light  btn-sm' onClick={closeAlertVerify}>
          <i class="fa fa-times" aria-hidden="true"></i>
        </button>
            <h2>Sign in to your favourite content platform to verify your profile.</h2> 
                <div className="platform">
                    <Link className="platform_link" to='/'><img className="platform_image" data-type="fansly" title="Fansly" src={two}/></Link>
                    <Link className="platform_link" to='/'><img className="platform_image" data-type="youtube" title="YouTube" src={three}/></Link>
                    <Link className="platform_link" to='/'><img className="platform_image" data-type="youtube" title="YouTube Gaming" src={three}/></Link>
                    <Link className="platform_link" to='/'><img className="platform_image" data-type="patreon" title="Patreon" src={four}/></Link>
                    <Link className="platform_link" to='/'><img className="platform_image" data-type="twitch" title="Twitch" src={five}/></Link>
                  </div>
                  <div className='verify_btn'>
                    <button type='/'>VERIFY NOW</button><Link className="platform_link" to='/'><FaPaperPlane/></Link>
              </div>
          </div>
          </div>
      </div>
      )}
    </>
  );
};

CreatorDashboard.layout = (page) => <Layout children={page} />;

export default CreatorDashboard;
