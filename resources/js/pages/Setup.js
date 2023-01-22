import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  VStack,
  Box,
  Text,
  Button,
  Icon,
  Stack,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel, HStack, Select,
} from '@chakra-ui/react';
import { Head, useForm, usePage } from '@inertiajs/inertia-react';
import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import CanelaText from '@/components/UI/CanelaText';
import Layout from '@/shared/Layout';

import Navigation from '@/components/UI/Navigation';
import Footer from '@/components/UI/Footer';

import { toggleMobileMenu, selectGlobal } from '@/slices/globalSlice';
import useRoutes from '@/utils/useRoutes';
import useLang from '@/utils/useLang';

import {Helmet} from 'react-helmet';
import '../../css/app_dev.css';
const renderCategory = (category) => (
  <option value={category.id}>
    {category.name}
  </option>
);

const Setup = ({ categories }) => {
  const dispatch = useDispatch();
  const { isMobileMenuOpen } = useSelector(selectGlobal);
  const route = useRoutes();
  const { authUser, locale } = usePage().props;
  const lang = useLang(locale);
  lang.setFallback("en");
  const {
    data, setData, post, processing, errors,
  } = useForm({
    full_name: authUser.full_name || '',
    category_id: authUser.category_id || '',
    onlyfans_username: authUser.onlyfans_username || '',
    fansly_username: authUser.fansly_username || '',
    patreon_username: authUser.patreon_username || '',
    twitch_username: authUser.twitch_username || '',
    youtube_username: authUser.youtube_username || '',
    kickstarter_username: authUser.kickstarter_username || '',
    soundcloud_username: authUser.soundcloud_username || '',
  });

  function handleSubmit() {
    console.log(route('auth.submit_setup'));
    post(route('auth.submit_setup'));
  }

  return (
    <>
      <Helmet>
        <title>{lang.get('setup.meta_title')}</title>
      </Helmet>
      {/*<Head>
        <title>{lang.get('setup.meta_title')}</title>
      </Head>*/}
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
        <Box width="full" background="#fafafa">
          <Container
            maxWidth="8xl"
            px={{ base: 6, md: 12 }}
            py={{ base: 6, md: 12 }}
            className={"pt-5 mt-5"}
          >
            <Stack
              width="full"
              direction="column"
              spacing={6}
              align="center"
              justify="center"
            >
              <VStack spacing={1}>
                <CanelaText fontSize={{ base: '4xl', lg: '5xl' }} fontWeight="bold">
                  {lang.get('setup.title')}
                </CanelaText>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="gray.500">
                  {lang.get('setup.subtitle')}
                </Text>
              </VStack>
              <Box w={{ base: 'full', lg: '70%', xl: '60%' }}>
                <VStack w="full" spacing={4}>
                  <VStack w="full" spacing={4} px={8}>
                    <FormControl isRequired isInvalid={errors.full_name}>
                      <FormLabel>{lang.get('setup.full_name')}</FormLabel>
                      <Input
                        type="text"
                        borderColor="gray.300"
                        errorBorderColor="chantilly.700"
                        borderRadius={12}
                        value={data.full_name}
                        onChange={(event) => setData('full_name', event.target.value)}
                      />
                      <FormHelperText>Your full name will not be made public.</FormHelperText>
                      <FormErrorMessage color="chantilly.700">{errors.full_name}</FormErrorMessage>
                    </FormControl>
                    <FormControl isRequired isInvalid={errors.category_id}>
                      <FormLabel flex={1}>{lang.get('setup.category')}</FormLabel>
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
                    </FormControl>
                  </VStack>
                  <Tabs
                    w="full"
                    variant="soft-rounded"
                    colorScheme="chantilly"
                    bg="glacier.100"
                    p={4}
                    boxShadow="sm"
                    borderRadius={12}
                  >
                    <TabList>
                      <Tab>OnlyFans</Tab>
                      <Tab>Fansly</Tab>
                      <Tab>Patreon</Tab>
                      <Tab>Twitch</Tab>
                      <Tab>YouTube</Tab>
                      <Tab>Kickstarter</Tab>
                      <Tab>SoundCloud</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        <VStack spacing={2}>
                          <FormControl>
                            <Input
                              type="text"
                              borderColor="gray.300"
                              errorBorderColor="chantilly.700"
                              borderRadius={12}
                              value={data.onlyfans_username}
                              placeholder={lang.get('setup.onlyfans_username')}
                              onChange={(event) => setData('onlyfans_username', event.target.value)}
                            />
                          </FormControl>
                        </VStack>
                      </TabPanel>
                      <TabPanel>
                        <VStack spacing={2}>
                          <FormControl>
                            <Input
                              type="text"
                              borderColor="gray.300"
                              errorBorderColor="chantilly.700"
                              borderRadius={12}
                              value={data.fansly_username}
                              placeholder={lang.get('setup.fansly_username')}
                              onChange={(event) => setData('fansly_username', event.target.value)}
                            />
                          </FormControl>
                        </VStack>
                      </TabPanel>
                      <TabPanel>
                        <VStack spacing={2}>
                          <FormControl>
                            <Input
                              type="text"
                              borderColor="gray.300"
                              errorBorderColor="chantilly.700"
                              borderRadius={12}
                              value={data.patreon_username}
                              placeholder={lang.get('setup.patreon_username')}
                              onChange={(event) => setData('patreon_username', event.target.value)}
                            />
                          </FormControl>
                        </VStack>
                      </TabPanel>
                      <TabPanel>
                        <VStack spacing={2}>
                          <FormControl>
                            <Input
                              type="text"
                              borderColor="gray.300"
                              errorBorderColor="chantilly.700"
                              borderRadius={12}
                              value={data.twitch_username}
                              placeholder={lang.get('setup.twitch_username')}
                              onChange={(event) => setData('twitch_username', event.target.value)}
                            />
                          </FormControl>
                        </VStack>
                      </TabPanel>
                      <TabPanel>
                        <VStack spacing={2}>
                          <FormControl>
                            <Input
                              type="text"
                              borderColor="gray.300"
                              errorBorderColor="chantilly.700"
                              borderRadius={12}
                              value={data.youtube_username}
                              placeholder={lang.get('setup.youtube_username')}
                              onChange={(event) => setData('youtube_username', event.target.value)}
                            />
                          </FormControl>
                        </VStack>
                      </TabPanel>
                      <TabPanel>
                        <VStack spacing={2}>
                          <FormControl>
                            <Input
                              type="text"
                              borderColor="gray.300"
                              errorBorderColor="chantilly.700"
                              borderRadius={12}
                              value={data.kickstarter_username}
                              placeholder={lang.get('setup.kickstarter_username')}
                              onChange={(event) => setData('kickstarter_username', event.target.value)}
                            />
                          </FormControl>
                        </VStack>
                      </TabPanel>
                      <TabPanel>
                        <VStack spacing={2}>
                          <FormControl>
                            <Input
                              type="text"
                              borderColor="gray.300"
                              errorBorderColor="chantilly.700"
                              borderRadius={12}
                              value={data.soundcloud_username}
                              placeholder={lang.get('setup.soundcloud_username')}
                              onChange={(event) => setData('soundcloud_username', event.target.value)}
                            />
                          </FormControl>
                        </VStack>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                  <Button
                    w={200}
                    size="lg"
                    colorScheme="glacier"
                    isLoading={processing}
                    loadingText={lang.get('setup.continue_loading')}
                    onClick={handleSubmit}
                    borderRadius={12}
                    alignSelf="flex-start"
                  >
                    {lang.get('setup.continue')}
                  </Button>
                </VStack>
              </Box>
            </Stack>
          </Container>
        </Box>
      </VStack>
      <Footer />
    </>
  );
};

Setup.layout = (page) => <Layout children={page} />;

export default Setup;
