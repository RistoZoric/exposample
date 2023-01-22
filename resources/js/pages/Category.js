import { useState } from 'react';
import {
  Box,
  Button,
  Icon,
  HStack,
  VStack,
  Text,
  Stack,
  Wrap,
  WrapItem,
  Link,
  Container
} from '@chakra-ui/react';
import { Head, InertiaLink, usePage } from '@inertiajs/inertia-react';

import PaddedContainer from '@/components/UI/PaddedContainer';
import Layout from '@/shared/Layout';

import Navigation from '@/components/UI/Navigation';
import Footer from '@/components/UI/Footer';
import CategorySearch from '@/components/CategorySearch';
import CanelaText from '@/components/UI/CanelaText';

import useRoutes from '@/utils/useRoutes';
import useLang from '@/utils/useLang';
import renderIconToComponent from '@/utils/renderIconToComponent';
import CategoryUser from '@/components/CategoryUser';
import { IoChevronBack } from 'react-icons/io5';
import '../../css/app_dev.css' 
const PaginationButton = ({ link }) => (
  <Button
    as={InertiaLink}
    href={link.url || '#'}
    colorScheme={link.active ? 'glacier' : 'gray'}
    isDisabled={!link.url}
  >
    {link.label.replace('&laquo; ', '').replace('&raquo;', '')}
  </Button>
);

/** V2 */
const Category = ({ category, users }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const route = useRoutes();
  const { locale } = usePage().props;
  const lang = useLang(locale);
  lang.setFallback("en");
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderUser = (user) => (
    <WrapItem key={user.id}>
      <CategoryUser user={user} />
    </WrapItem>
  );

  console.log(category)

  return (
    <>
      <Head>
        <title>{category.metaTitle}</title>
        <meta name="description" content={category.description} />
        <meta property="og:type" content="category" />
        <meta property="og:title" content={category.metaTitle} />
        <meta property="og:description" content={category.description} />
        <meta
          property="og:image"
          content={`https://storage.googleapis.com/storage.privy.reviews/${category.icon}`}
        />
      </Head>
      <Navigation
        isMobileMenuOpen={isMobileMenuOpen}
        onToggle={() => toggleMobileMenu()}
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
      <Box background="#fafafa" className='pt-5'>
        <Box/>
        <PaddedContainer>
          <Stack direction="column" spacing={16} className="pt-4">
            <Stack direction="column" spacing={8}>
            <HStack justify="space-between" align="center">
                <HStack align="center" spacing={6}>
                  <Box bg="glacier.500" p={4} borderRadius="50%">
                    <Icon as={renderIconToComponent(category.icon)} h={8} w={8} color="white" />
                  </Box>
                  <VStack align="start">
                    <CanelaText fontSize={{ base: '18px', lg: '4xl',  sm: '18px'}} fontWeight="bold" lineHeight="110%">{category.name}</CanelaText>
                    <Text fontSize="md" fontWeight="medium" lineHeight="100%" color="gray.400" pt={1}>
                      {lang.get('categories.creators_number', { number: category.creatorsCount })}
                    </Text>
                  </VStack>
                </HStack>
                <Link href={route('categories.index')} direction="row" alignSelf="end">
                  <Icon bg="glacier.500" borderRadius="50%" as={IoChevronBack} color="white" fontSize="4xl" fontWeight="bold" />
                  <CanelaText fontSize="md" fontWeight="bold">Back</CanelaText>
                </Link>
              </HStack>
              {category.description && (
              <VStack
        width="full"
        background="white"
      >
                <Box
                  width="full"
                  bg="white"
                  p={6}
                  borderRadius={12}
                  color="black"
                  boxShadow="lg"

                >
                <Text color="gray.500"  fontSize="lg" whiteSpace="pre-line">{category.description}</Text>
                </Box>
      </VStack>
              )}
              <CategorySearch />
            </Stack>
            <Wrap spacing={16}>
              {users.data.map(renderUser)}
            </Wrap>
            <Wrap spacing={3}>{users.meta.links.map((link, index) => <WrapItem key={index}><PaginationButton link={link} /></WrapItem>)}</Wrap>
          </Stack>
        </PaddedContainer>
      </Box>
      <Footer />
    </>
  );
};

Category.layout = (page) => <Layout children={page} />;

export default Category;
