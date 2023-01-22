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
import '../../css/app_dev.css';
const ReviewerDashboard = () => {
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
    const {
      data, setData, post, processing, errors,
    } = useForm({
      id: '',
      description: '',
      response: '',
    });

    function handleOpenInviteModal() {
      setIsInviteModalOpen(true);
    }

    function handleCloseInviteModal() {
      setIsInviteModalOpen(false);
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
      post(route('reviewer_dashboard.respond_to_review'));
    }

    async function handleFilterReviews() {
      const url = await routeAsync('api.reviewer_dashboard.filter_reviews', { period });
      setIsFiltering(true);
      const response = await fetch(url);
      const reviews = await response.json();
      setFilteredReviews(reviews);
      setIsFiltering(false);
    }




 //Function to implement



  return (
    <>
      {/* <Head>
        <title>{lang.get('creator_dashboard.meta_title')}</title>
      </Head> */}
      <Helmet>
        <title>Reviewer Dashboard</title>
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
            {/* <BreadcrumbItem key={authUser.category.slug}>
              <BreadcrumbLink as={InertiaLink} href={route('categories.view', authUser.category.slug)}>{authUser.category.name}</BreadcrumbLink>
            </BreadcrumbItem> */}
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
            <HStack spacing={{ base: 8, md: 24 }}>
              <Avatar
                src={authUser.avatar}
                height={{ base: 100, md: 200 }}
                width={{ base: 100, md: 200 }}
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
                      {authUser.onlyfans_verified && (
                      <VerifiedBadge />
                      )}
                      {authUser.plan && (
                      <VipBadge />
                      )}
                    </HStack>
                  </HStack>

                </Box>
                <HStack spacing={1}>

                </HStack>
              </VStack>
            </HStack>
            
          </Stack>
        </Container>
      </VStack>
      <VStack
        background="#fafafa"
        pb={12}
      >
        <Container
          maxWidth="8xl"
          px={{ base: 6, md: 12, lg: 40 }}
        >
            <Text> Content to be added - Dashboard Added</Text>
        </Container>
      </VStack>
      <Footer />

    </>
  );
};

ReviewerDashboard.layout = (page) => <Layout children={page} />;

export default ReviewerDashboard;
