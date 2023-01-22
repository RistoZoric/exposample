import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  VStack,
  Box,
  Text,
  Button,
  Icon,
  Stack,
  HStack,
  Radio,
  Badge,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import {
  IoCheckmarkCircle,
} from 'react-icons/io5';
import { Head, usePage } from '@inertiajs/inertia-react';
import { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import CanelaText from '@/components/UI/CanelaText';
import Layout from '@/shared/Layout';

import Navigation from '@/components/UI/Navigation';
import Footer from '@/components/UI/Footer';

import { toggleMobileMenu, selectGlobal } from '@/slices/globalSlice';
import useRoutes from '@/utils/useRoutes';
import useLang from '@/utils/useLang';

import MyPlanYearlySwitch from '@/components/MyPlanYearlySwitch';
import '../../css/app_dev.css';
const MyPlan = ({ plans }) => {
  const dispatch = useDispatch();
  const { isMobileMenuOpen } = useSelector(selectGlobal);
  const { authUser } = usePage().props;
  const route = useRoutes();
  const { locale } = usePage().props;
  const lang = useLang(locale);
  lang.setFallback("en");
  const [isYearly, setIsYearly] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [planName, setPlanName] = useState(authUser.plan ? authUser.plan.name : 'Basic');
 
  function toggleIsYearly() {
    setIsYearly(!isYearly);
  }

  function getBillingCycle() {
    return isYearly ? 'yearly' : 'monthly';
  }

  function getPlan(name = null) {
    /**
       * Use provided plan or default to currently selected.
       */
    return plans[name || planName];
  }

  function getPlanPrice(name = null) {
    return getPlan(name)[getBillingCycle()];
  }

  function isPlanSelected(name) {
    return planName === name;
  }

  function isPlanPopular(name) {
    return name === 'Standard';
  }

  function handleSubmit() {
    const data = {
      plan_name: planName,
      plan_price: getPlanPrice(),
    };
    Inertia.post(route('checkout.billing_details'), data, {
      onStart: () => setIsSubmitting(true),
      onFinish: () => setIsSubmitting(false),
    });
  }

  /**
     * Format currency
     * @type {Intl.NumberFormat}
     */
  const currencyFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

  function renderPlan(plan) {
    const { name } = getPlan(plan[0]);
    const price = getPlanPrice(plan[0]).value;

    return (
      <Box
        width="full"
        color={isPlanSelected(name) ? 'white' : 'black'}
        background={isPlanSelected(name) ? 'glacier.500' : 'white'}
        borderWidth="1px"
        borderStyle="solid"
        borderColor="glacier.500"
        borderRadius={12}
        boxShadow="sm"
        transition="all .5s"
        cursor="pointer"
        p={5}
        onClick={() => setPlanName(name)}
        key={name}
      >
        <HStack width="full" align="center" justify="space-between">
          <HStack spacing={6}>
            <Stack spacing={5} direction="row">
              <Radio
                colorScheme={isPlanSelected(name) ? 'whiteAlpha' : 'glacier'}
                size="md"
                isChecked={isPlanSelected(name)}
              />
            </Stack>
            <Text fontSize={{lg:"2xl", base:"md"}} fontWeight="extrabold">{name}</Text>
          </HStack>
          <HStack spacing={3}>
            {isPlanPopular(name) && (
              <Badge
                colorScheme="green"
                p={{lg:2, base:1}}
                borderRadius={12}
                fontSize={{lg:"sm", base:"x-small"}}
              >
                {lang.get('my_plan.popular')}
              </Badge>
            )}
            <Text fontSize={{lg:"2xl", base:"sm"}} fontWeight="extrabold">
              {currencyFormat.format(price)}
            </Text>
            <Text fontSize={{lg:"sm", base:"xs"}}>{`/${getBillingCycle()}`}</Text>
          </HStack>
        </HStack>
      </Box>
    );
  }

  return (
    <>
      <Head>
        <title>{lang.get('my_plan.meta_title')}</title>
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
        <Box width="full" background="#fafafa">
          <Container
            maxWidth="8xl"
            px={{ base: 6, md: 12 }}
            py={{ base: 6, md: 12 }}
            className={"mt-5"}
          >
            <Stack width="full" direction="column" spacing={12} align="center" justify="center">
              <VStack spacing={1}>
                <CanelaText fontSize={{ base: '4xl', lg: '5xl' }} fontWeight="bold">
                  {lang.get('my_plan.title')}
                </CanelaText>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="gray.500">
                  {lang.get('my_plan.subtitle')}
                </Text>
              </VStack>
              <Stack width="full" direction={{ base: 'column', md: 'row' }} spacing={16} justify="center">
                <VStack width={{ base: 'full', md: '60%', lg: '40%' }} spacing={4} align="start">
                  {authUser.billing_cycle_end && !authUser.has_canceled && (
                    <Alert colorScheme="glacier" variant="left-accent">
                      <HStack align="center">
                        <AlertIcon />
                        <Text fontSize="sm">
                          Next billing cycle starts on
                          {' '}
                          <strong>
                            {authUser.billing_cycle_end}
                          </strong>
                          .
                        </Text>
                      </HStack>
                    </Alert>
                  )}
                  {authUser.is_trialing && (
                    <Alert status="warning" variant="left-accent">
                      <HStack align="center">
                        <AlertIcon />
                        <Text fontSize="sm">
                          Your trial expires on
                          {' '}
                          <strong>
                            {authUser.billing_cycle_end}
                          </strong>
                          .
                        </Text>
                      </HStack>
                    </Alert>
                  )}
                  {authUser.has_canceled && (
                    <Alert colorScheme="glacier" variant="left-accent">
                      <HStack align="center">
                        <AlertIcon />
                        <Text fontSize="sm">
                          {authUser.plan.name}
                          {' '}
                          subscription has been canceled.
                          <br />
                          You will be downgraded to the Basic plan on
                          {' '}
                          <strong>
                            {authUser.billing_cycle_end}
                          </strong>
                          .
                        </Text>
                      </HStack>
                    </Alert>
                  )}
                  <MyPlanYearlySwitch isYearly={isYearly} handleChange={toggleIsYearly} />
                  {Object.entries(plans).map(renderPlan)}
                </VStack>
                <VStack width={{ base: 'full', md:'40%', lg: '40%' }} spacing={8} align="start">
                  <VStack width="full" spacing={6} align="start">
                    <Box
                      width="full"
                      background="white"
                      borderWidth="1px"
                      borderStyle="solid"
                      borderColor="glacier.500"
                      borderRadius={12}
                      boxShadow="sm"
                      overflow="hidden"
                    >
                      <VStack width="full" spacing={0} align="start">
                        <Box
                          width="full"
                          background="glacier.500"
                          color="white"
                          py={6}
                          px={12}
                        >
                          <HStack width="full" align="center" justify="space-between">
                            <Text fontSize="sm" fontWeight="semibold" textTransform="capitalize">{lang.get('my_plan.details')}</Text>
                            <Text fontSize="2xl" fontWeight="extrabold">{getPlan().name}</Text>
                          </HStack>
                        </Box>
                        <Box
                          width="full"
                          py={6}
                          px={12}
                        >
                          <VStack width="full" spacing={4} align="start">
                            <HStack width="full" justify="space-between">
                              <Text fontSize="md" fontWeight="normal">{lang.get('plans_and_pricing.features.claim_profile')}</Text>
                              <Icon as={IoCheckmarkCircle} color="glacier.500" fontSize="2xl" />
                            </HStack>
                            <HStack width="full" justify="space-between">
                              <Text fontSize="md" fontWeight="normal">
                                {lang.get('plans_and_pricing.features.description', { number: getPlan().description_length })}
                              </Text>
                              <Icon as={IoCheckmarkCircle} color="glacier.500" fontSize="2xl" />
                            </HStack>
                            <HStack width="full" justify="space-between">
                              <Text fontSize="md" fontWeight="normal">
                                {lang.get('plans_and_pricing.features.searchable_tags', { number: getPlan().searchable_tags })}
                              </Text>
                              <Icon as={IoCheckmarkCircle} color="glacier.500" fontSize="2xl" />
                            </HStack>
                            <HStack width="full" justify="space-between">
                              <Text fontSize="md" fontWeight="normal">{lang.get('plans_and_pricing.features.respond_to_reviews')}</Text>
                              <Icon as={IoCheckmarkCircle} color="glacier.500" fontSize="2xl" />
                            </HStack>
                            <HStack width="full" justify="space-between">
                              <Text fontSize="md" fontWeight="normal">{lang.get('plans_and_pricing.features.link_onlyfans_profile')}</Text>
                              <Icon as={IoCheckmarkCircle} color="glacier.500" fontSize="2xl" />
                            </HStack>
                            <HStack width="full" justify="space-between">
                              <Text fontSize="md" fontWeight="normal">
                                {lang.get('plans_and_pricing.features.invite_customers', { number: getPlan().invitable_customers })}
                              </Text>
                              <Icon as={IoCheckmarkCircle} color="glacier.500" fontSize="2xl" />
                            </HStack>
                            {planName !== 'Basic' && (
                            <>
                              <HStack width="full" justify="space-between">
                                <Text fontSize="md" fontWeight="normal">{lang.get('plans_and_pricing.features.receive_priority_support')}</Text>
                                <Icon as={IoCheckmarkCircle} color="glacier.500" fontSize="2xl" />
                              </HStack>
                              <HStack width="full" justify="space-between">
                                <Text fontSize="md" fontWeight="normal">{lang.get('plans_and_pricing.features.view_analytics')}</Text>
                                <Icon as={IoCheckmarkCircle} color="glacier.500" fontSize="2xl" />
                              </HStack>
                            </>
                            )}
                            {planName === 'Basic' && (
                            <>
                              <HStack width="full" justify="space-between">
                                <Text fontSize="md" fontWeight="normal">{lang.get('plans_and_pricing.features.receive_support')}</Text>
                                <Icon as={IoCheckmarkCircle} color="glacier.500" fontSize="2xl" />
                              </HStack>
                            </>
                            )}
                            {planName === 'Premium' && (
                            <>
                              <HStack width="full" justify="space-between">
                                <Text fontSize="md" fontWeight="normal">{lang.get('plans_and_pricing.features.get_featured')}</Text>
                                <Icon as={IoCheckmarkCircle} color="glacier.500" fontSize="2xl" />
                              </HStack>
                            </>
                            )}
                          </VStack>
                        </Box>
                      </VStack>
                    </Box>
                    <Button
                      h="4rem"
                      w="full"
                      size="lg"
                      colorScheme="chantilly"
                      borderRadius={12}
                      isLoading={isSubmitting}
                      loadingText={lang.get('my_plan.continue_loading')}
                      isDisabled={getPlan() === 'Basic' && authUser.plan === 'Basic'}
                      onClick={handleSubmit}
                    >
                      {lang.get('my_plan.continue')}
                    </Button>
                  </VStack>
                </VStack>
              </Stack>
            </Stack>
          </Container>
        </Box>
      </VStack>
      <Footer />
    </>
  );
};

MyPlan.layout = (page) => <Layout children={page} />;

export default MyPlan;
