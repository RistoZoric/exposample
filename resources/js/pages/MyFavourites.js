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
import '../../Assets/MyFavourites.css'
import creatorProfile1 from '../../img/creatorProfile1.png';
import { BiHeart } from "react-icons/bi";


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

const MyFavourites = ({ countries, categories }) => {
  const dispatch = useDispatch();
  const { authUser, config } = usePage().props;
  const { isMobileMenuOpen } = useSelector(selectGlobal);
  const route = useRoutes();
  const { locale } = usePage().props;
  const lang = useLang(locale);
  lang.setFallback("en"); 
  const planName = (authUser.plan === null ) ? 'Basic' : authUser.plan; 
 
  
 
  const handleChangeLocale = (value) => {
    
    setData('user_preferred_lang',value); 
    Inertia.post(route('auth.update_locale'), {
      locale: value,
    });
  }

  const [favorites, setFavorites] = useState(authUser.favorites);

 
  function handleRemoveFavorite(id) {
    const newFavorites = filter(favorites, (favorite) => favorite.id !== id);
    setFavorites(newFavorites);
    fetch(route('api.auth.favorites.remove', id)).then(res => {
      handleOpen();
    });
  }

  const [isOpenAlertModal, setIsOpenAlertModal] = useState(false);

  function handleOpen() {
    setIsOpenAlertModal(true);
  }

  async function handleClose() {
    // Store for one week (milliseconds).
    setIsOpenAlertModal(false);
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
        <div className='boxparts_here'>
            <Avatar
            src={authUser.avatar}
            height="180px"
            width="100%"
            fit="cover"
            borderRadius="10px"
            background="glacier.300"
            />
            
            <div className='content_boxpart'>
                <Link style={{ textDecoration: 'none' }}
                    as={InertiaLink}
                    href={route('users.view', authUser.username)}>
                    <h2>{authUser.username}</h2>
                </Link>
                <Link style={{ textDecoration: 'none' }} onClick={() => handleRemoveFavorite(authUser.id)}><h6 >Remove</h6></Link>
            </div>
        </div>
    )
  
  };

    return (
        <>
        <Head>
          <title>My Favourites </title>
        </Head>
        <VStack
            spacing={0}
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
            boxShadow="sm"
            navtype={2}
            />
            <div className='favourite_cover'>
                <div className='container'>
                    <div className='favourite_buttons'>
                        <Link as={InertiaLink} href={route('auth.favorites.list')} className="saved">My Favourites</Link>
                        <Link as={InertiaLink} href={route('auth.update_settings')} className="list">Back</Link>
                    </div>

                    <div className='favourite_boxparts'>
                        {favorites.map(renderFavorite)}
                    </div>

                </div>
            </div>
            </VStack> 
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
      </>
    )
};

MyFavourites.layout = (page) => <Layout children={page} />;

export default MyFavourites;
