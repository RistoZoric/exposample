import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  VStack,
  Box,
  Center,
  Text,
  Button,
  Icon,
  Stack,
  Link,
  IconButton,
} from '@chakra-ui/react';
import { IoSend } from 'react-icons/io5';
import { Head, usePage } from '@inertiajs/inertia-react';
import Layout from '@/shared/Layout';

import Navigation from '@/components/UI/Navigation';
import Footer from '@/components/UI/Footer';

import { toggleMobileMenu, selectGlobal } from '@/slices/globalSlice';
import useRoutes from '@/utils/useRoutes';
import useLang from '@/utils/useLang';
import React from 'react';
import {Helmet} from 'react-helmet';
import '../../css/app_dev.css';

const Success = ({ downloadInvoiceUrl }) => {
  const dispatch = useDispatch();
  const { isMobileMenuOpen } = useSelector(selectGlobal);
  const route = useRoutes();
  const { locale } = usePage().props;
  const lang = useLang(locale);
  lang.setFallback("en");

  return (
    <>
      {/*<Head>
        <title>{lang.get('success.meta_title')}</title>
      </Head>*/}
      <Head>
        <title>{lang.get('success.meta_title')}</title>
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
        />
        <Box width="full" background="#fafafa">
          <Container
            maxWidth="8xl"
            px={{ base: 6, md: 12 }}
            py={{ base: 6, md: 12 }}
          >
            <Stack width="full" direction="column" spacing={12} align="center" justify="center">
              <Box w={{ base: 'full', md: '50%' }} bg="white" boxShadow="sm" borderRadius={12}>
                <Box
                  bg="chantilly.500"
                  w="full"
                  h="80px"
                  borderTopLeftRadius={12}
                  borderTopRightRadius={12}
                  position="relative"
                >
                  <Center>
                    <IconButton
                      bg="white"
                      h={16}
                      w={16}
                      icon={<Icon as={IoSend} fontSize="2xl" color="chantilly.500" />}
                      _hover={{
                        bg: 'white',
                      }}
                      _active={{
                        bg: 'white',
                      }}
                      position="absolute"
                      bottom={0}
                      marginBottom="-20px"
                      boxShadow="md"
                      isRound
                    />
                  </Center>
                </Box>
                <Box p={10} textAlign="center">
                  <VStack spacing={4}>
                    <Text fontSize="xl" fontWeight="bold">
                      {lang.get('success.title')}
                    </Text>
                    <Text fontSize="md" color="gray.600">
                      {lang.get('success.description')}
                    </Text>
                    <Box w="full">
                      <Button
                        w="full"
                        as={Link}
                        href={downloadInvoiceUrl}
                        variant="solid"
                        colorScheme="chantilly"
                        size="lg"
                        _hover={{
                          textDecoration: 'none',
                        }}
                        borderRadius={12}
                        mt={4}
                      >
                        {lang.get('success.button')}
                      </Button>
                    </Box>
                  </VStack>
                </Box>
              </Box>
            </Stack>
          </Container>
        </Box>
      </VStack>
      <Footer />
    </>
  );
};

Success.layout = (page) => <Layout children={page} />;

export default Success;
