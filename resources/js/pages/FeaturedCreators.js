import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Container,
  Text,
  Button,
  HStack,
  VStack,
  Stack,
  Link,
  InputGroup,
  Input,
  InputRightElement,
  Avatar,
} from '@chakra-ui/react';

import {
  Head, InertiaLink, useForm, usePage,
} from '@inertiajs/inertia-react';
import { SearchIcon } from '@chakra-ui/icons';
import Layout from '@/shared/Layout';

import Navigation from '@/components/UI/Navigation';
import Footer from '@/components/UI/Footer';

import { toggleMobileMenu, selectGlobal } from '@/slices/globalSlice';
import useRoutes from '@/utils/useRoutes';
import useLang from '@/utils/useLang';
import CanelaText from '@/components/UI/CanelaText';
import React from 'react';
import {Helmet} from 'react-helmet';
import '../../css/app_dev.css'

const FeaturedCreators = ({ creators }) => {
  const dispatch = useDispatch();
  const { isMobileMenuOpen } = useSelector(selectGlobal);
  const route = useRoutes();
  const { locale } = usePage().props;
  const lang = useLang(locale);
  lang.setFallback("en");
  const {
    data, setData, get, processing, errors,
  } = useForm({
    q: '',
  });

  function handleSearch(event) {
    event.preventDefault();
    get(route('categories.search'));
  }

  const renderCreator = (user) => (
    <HStack spacing={0} maxWidth="75%">
      <Avatar src={user.avatar} height="400px" width="400px" borderRadius={12} />
      <Box
        bg="gray.100"
        borderTopRightRadius={12}
        borderBottomRightRadius={12}
        p={8}
      >
        <VStack align="start">
          <VStack align="start" spacing={1}>
            <Text color="glacier.700" fontSize="xl" fontWeight="bold">{user.username}</Text>
            <Text color="black" fontSize="md" fontWeight="medium">{lang.get('featured_creators.creator')}</Text>
          </VStack>
          <Text color="black" fontSize="md">
            {user.description}
          </Text>
        </VStack>
      </Box>
    </HStack>
  );

  return (
    <>
      {/*<Head>
        <title>{lang.get('featured_creators.meta_title')}</title>
      </Head>*/}
      <Helmet>
        <title>{lang.get('featured_creators.meta_title')}</title>
      </Helmet>
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
      <VStack
        spacing={0}
        backgroundImage={{
          base: 'url(/images/bg-shapes-2.png)',
        }}
        backgroundSize={{
          base: 'cover',
        }}
      >
        <div
          maxWidth="8xl"
          px={{ base: 6, md: 12, lg: 24 }}
          py={12}
          className="container mt-5 pt-5 pb-5"
        >
          <Box width={{ base: 'full', lg: '40%' }} pb={12} className="mt-5 pt-5 mb-5 pb-5">
            <Stack direction="column" spacing={8}>
              <CanelaText
                color="glacier.700"
                fontSize={{ base: '4xl', lg: '5xl' }}
                fontWeight="bold"
                as="h1"
                dangerouslySetInnerHTML={{ __html: lang.get('featured_creators.hero_title') }}
              />
              <Text
                color="black"
                fontSize="lg"
                dangerouslySetInnerHTML={{ __html: lang.get('featured_creators.hero_body') }}
              />
              <form onSubmit={handleSearch}>
                <InputGroup size="lg">
                  <Input
                    type="type"
                    variant="filled"
                    color="gray.500"
                    background="white"
                    _hover={{ background: 'gray.100' }}
                    _focus={{ background: 'gray.100' }}
                    placeholder={lang.get('home.search_placeholder')}
                    height={20}
                    borderRadius={12}
                    boxShadow="sm"
                    value={data.q}
                    onChange={(event) => setData('q', event.target.value)}
                  />
                  <InputRightElement height={20}>
                    <SearchIcon color="gray.400" />
                  </InputRightElement>
                </InputGroup>
              </form>
            </Stack>
          </Box>
        </div>
      </VStack>
      <Container
        maxWidth="8xl"
        px={{ base: 6, md: 12, lg: 24 }}
        py={12}
      >
        <VStack spacing={8} justify="center" align="center">
          {(creators) && creators.map(renderCreator)}
        </VStack>
      </Container>
      <VStack
        spacing={6}
        background="gray.50"
        textAlign="center"
        py={24}
      >
        <VStack spacing={3}>
          <Text fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }} fontWeight="bold">
            {lang.get('trust_in_reviews.contact_us.subtitle')}
          </Text>
          <CanelaText fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} fontWeight="bold">
            {lang.get('trust_in_reviews.contact_us.title')}
          </CanelaText>
          <Text
            fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
            color="gray.500"
            dangerouslySetInnerHTML={{ __html: lang.get('trust_in_reviews.contact_us.body') }}
          />
        </VStack>
        <Button
          as={Link}
          href="https://support.privy.reviews/hc/en-us"
          target="_blank"
          _hover={{ textDecoration: 'none' }}
          variant="outline"
          size="lg"
          color="chantilly.500"
          fontWeight="bold"
          fontSize="md"
          textTransform="uppercase"
          borderColor="chantilly.500"
          borderWidth={2}
          borderRadius={0}
          minWidth="150px"
          mt={6}
        >
          {lang.get('trust_in_reviews.contact_us.button')}
        </Button>
      </VStack>
      <Footer />
    </>
  );
};

FeaturedCreators.layout = (page) => <Layout children={page} />;

export default FeaturedCreators;
