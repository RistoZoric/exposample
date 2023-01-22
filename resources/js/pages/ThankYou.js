import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Container,
  Text,
  Button,
  Image,
  HStack,
  VStack,
  Skeleton,
  Wrap,
  WrapItem,
  Link,
  Divider
} from '@chakra-ui/react';
import { InertiaLink, Head, usePage } from '@inertiajs/inertia-react';

import Layout from '@/shared/Layout';
import Navigation from '@/components/UI/Navigation';
import Footer from '@/components/UI/Footer';

import { toggleMobileMenu, selectGlobal } from '@/slices/globalSlice';
import CanelaText from '@/components/UI/CanelaText';
import useRoutes from '@/utils/useRoutes';
import useLang from '@/utils/useLang';
import React, { useState } from 'react';
import {Helmet} from 'react-helmet';
import '../../css/app_dev.css';
const ThankYou = () => {
  const dispatch = useDispatch();
  const { isMobileMenuOpen } = useSelector(selectGlobal);
  const route = useRoutes();
  const { locale } = usePage().props;
  const lang = useLang(locale);
  lang.setFallback("en");

  return (
    <>
      <Helmet>
        <title>ThankYou</title>
      </Helmet>
      {/*<Head>
        <title>{lang.get('trust_in_reviews.meta_title')}</title>
      </Head>*/}

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
      <VStack
        spacing={0}
      >

        <div className='pt-5'>
          <HStack
          width="full"
          spacing={0}
          wrap={{ base: 'wrap', md: 'nowrap' }}
        >

            <Box width={{ base: 'full', md: '50%' }} pr={0} p={{ base: 10, md: 20 ,lg: 40}}>
                <Box>
                <CanelaText
                fontSize={{ base: '4xl', md: '4xl', lg: '48px' }}
                dangerouslySetInnerHTML={{ __html:'Thank you for registering on Privy!'}}
              />
                </Box>
                <Box py={10}>
                <Text
                fontSize={{ base: 'sm', md: 'sm', lg: 'sm' }}
                color="gray.500"
                dangerouslySetInnerHTML={{ __html: 'We have sent an email with a confirmation link to your email address. In order to completethe sign-up process, please click the confirmation link. If you do not receive a confirmation email, please check your spam folder. Also, please  verify that you entered a valid email address in our sign-up form.' }}
              />
                </Box>

              <Box>
              <Button
            as={Link}
            href={route('auth.sign-in')}
            _hover={{ textDecoration: 'none' }}
            size="lg"
            color="white"
            bgColor="glacier.500"
            fontWeight="bold"
            fontSize="md"
            borderRadius={0}
            textTransform="uppercase"
            minWidth={{base:"100px", md:"200px", lg:"200px"}}
          >
            Sign In
          </Button>
              </Box>

            </Box>
            <Box width={{ base: 'full', md: '50%' }} p={{ base: 10, lg: 10 }}>
            <Image
              src="/images/styling-girl.png"
              height={{ base: 400, md: "full"}}
              width={{ base: 400, md: "full" }}
            />
            </Box>
        </HStack>
          </div>

        </VStack>
      <Footer />
    </>
  );
};

ThankYou.layout = (page) => <Layout children={page} />;

export default ThankYou;
