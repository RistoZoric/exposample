import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Radio,
  RadioGroup,
  Select,
  Stack,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react';
import { IoCard } from 'react-icons/io5';
import { Head, useForm, usePage } from '@inertiajs/inertia-react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useMemo, useState } from 'react';
import { chain } from 'mathjs';
import CanelaText from '@/components/UI/CanelaText';
import Layout from '@/shared/Layout';

import Navigation from '@/components/UI/Navigation';
import Footer from '@/components/UI/Footer';

import { selectGlobal, toggleMobileMenu } from '@/slices/globalSlice';
import useRoutes from '@/utils/useRoutes';
import useLang from '@/utils/useLang';
import BillingDetailsNewCard from '@/components/BillingDetailsNewCard';
import CurrencyConverter from '@/components/UI/CurrencyConverter';
import BillingDetailsCard from '@/components/BillingDetailsCard';
import React from 'react';
import {Helmet} from 'react-helmet';
import '../../css/app_dev.css'
const stripeElementsOptions = {
  locale: 'en',
  fonts: [
    {
      cssSrc: 'https://fonts.googleapis.com/css?family=Raleway:400',
    },
  ],
};

const BillingDetails = ({ stripePublicKey, variables, countries }) => {
  const dispatch = useDispatch();
  const { isMobileMenuOpen } = useSelector(selectGlobal);
  const { authUser: { payment_method } } = usePage().props;
  const route = useRoutes();
  const { locale } = usePage().props;
  const lang = useLang(locale);
  lang.setFallback("en");
  const [promoCodeSuccess, setPromoCodeSuccess] = useState(false);
  const [promoCodeMessage, setPromoCodeMessage] = useState(null);
  const {
    data, setData, post, processing, errors,
  } = useForm({
    payment_method,
    plan_name: variables.plan_name,
    plan_price: variables.plan_price,
    promo_code: null,

    full_name: payment_method ? payment_method.billing_details.name : null,
    email: payment_method ? payment_method.billing_details.email : null,
    phone_number: payment_method ? payment_method.billing_details.phone : null,
    line1: payment_method ? payment_method.billing_details.address.line1 : null,
    city: payment_method ? payment_method.billing_details.address.city : null,
    postal_code: payment_method ? payment_method.billing_details.address.postal_code : null,
    country: payment_method ? payment_method.billing_details.address.country : null,
  });

  const stripePromise = useMemo(() => loadStripe(stripePublicKey), [loadStripe]);

  function isValidPromoCode() {
    return (promoCodeSuccess && promoCodeMessage) || (!promoCodeSuccess && !promoCodeMessage);
  }

  function handleVerifyPromoCode() {
    fetch(route('api.checkout.verify_promo_code', { code: data.promo_code }))
      .then((response) => response.json())
      .then((json) => {
        if (json.success) {
          setPromoCodeSuccess(true);
          setPromoCodeMessage(json.promo_code.description);
        } else {
          setPromoCodeSuccess(false);
          setPromoCodeMessage(json.message);
        }
      });
  }

  function calculateVat(subTotal, vatPercentage) {
    return chain(subTotal)
      .multiply(vatPercentage / 100)
      .done();
  }

  function calculateTotal(subTotal, vatPercentage) {
    const vat = calculateVat(subTotal, vatPercentage);

    return chain(subTotal)
      .add(vat)
      .done();
  }

  function handleSetPaymentMethod(paymentMethod) {
    setData('payment_method', paymentMethod);
  }

  function handleSubmit() {
    post(route('checkout.finish'));
  }

  const currencyFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

  return (
    <>
        <Helmet>
        <title>{lang.get('billing_details.meta_title')}</title>
        </Helmet>
      {/* <Head>
        <title>{lang.get('billing_details.meta_title')}</title>
      </Head> */}
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
                  {lang.get('billing_details.title')}
                </CanelaText>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="gray.500">
                  {lang.get('billing_details.subtitle')}
                </Text>
              </VStack>
              <Stack width="full" direction={{ base: 'column', md: 'row' }} spacing={16} justify="center">
                <VStack width={{ base: 'full', md: '40%' }} spacing={8} align="start">
                  <VStack width="full" spacing={6} align="start">
                    <Text fontSize={{ base: 'xl', lg: '2xl' }} fontWeight="semibold">
                      {lang.get('billing_details.personal')}
                    </Text>
                    <FormControl id="name" isRequired isInvalid={errors.full_name}>
                      <FormLabel>{lang.get('billing_details.full_name')}</FormLabel>
                      <Input
                        type="text"
                        placeholder={lang.get('billing_details.full_name')}
                        variant="outline"
                        size="lg"
                        borderColor="gray.300"
                        errorBorderColor="chantilly.700"
                        borderRadius={12}
                        value={data.full_name}
                        onChange={(event) => setData('full_name', event.target.value)}
                      />
                      <FormErrorMessage color="chantilly.700">{errors.full_name}</FormErrorMessage>
                    </FormControl>
                    <FormControl id="email" isRequired isInvalid={errors.email}>
                      <FormLabel>{lang.get('billing_details.email')}</FormLabel>
                      <Input
                        type="email"
                        placeholder={lang.get('billing_details.email')}
                        variant="outline"
                        size="lg"
                        borderColor="gray.300"
                        errorBorderColor="chantilly.700"
                        borderRadius={12}
                        value={data.email}
                        onChange={(event) => setData('email', event.target.value)}
                      />
                      <FormHelperText>{lang.get('billing_details.email_helper_text')}</FormHelperText>
                      <FormErrorMessage color="chantilly.700">{errors.email}</FormErrorMessage>
                    </FormControl>
                    <FormControl id="phone" isRequired isInvalid={errors.phone_number}>
                      <FormLabel>{lang.get('billing_details.phone_number')}</FormLabel>
                      <Input
                        type="text"
                        placeholder={lang.get('billing_details.phone_number')}
                        variant="outline"
                        size="lg"
                        borderColor="gray.300"
                        borderRadius={12}
                        value={data.phone_number}
                        onChange={(event) => setData('phone_number', event.target.value)}
                      />
                      <FormErrorMessage color="chantilly.700">{errors.phone_number}</FormErrorMessage>
                    </FormControl>
                  </VStack>
                  <VStack width="full" spacing={6} align="start">
                    <Text fontSize={{ base: 'xl', lg: '2xl' }} fontWeight="semibold">
                      {lang.get('billing_details.billing_address')}
                    </Text>
                    <FormControl id="line1" isRequired isInvalid={errors.line1}>
                      <FormLabel>{lang.get('billing_details.line1')}</FormLabel>
                      <Input
                        type="text"
                        placeholder={lang.get('billing_details.line1')}
                        variant="outline"
                        size="lg"
                        borderColor="gray.300"
                        borderRadius={12}
                        value={data.line1}
                        onChange={(event) => setData('line1', event.target.value)}
                      />
                      <FormErrorMessage color="chantilly.700">{errors.line1}</FormErrorMessage>
                    </FormControl>
                    <Stack width="full" direction="row">
                      <FormControl id="city" isRequired isInvalid={errors.city}>
                        <FormLabel>{lang.get('billing_details.city')}</FormLabel>
                        <Input
                          type="text"
                          placeholder={lang.get('billing_details.city')}
                          size="lg"
                          variant="outline"
                          borderColor="gray.300"
                          borderRadius={12}
                          value={data.city}
                          onChange={(event) => setData('city', event.target.value)}
                        />
                        <FormErrorMessage color="chantilly.700">{errors.city}</FormErrorMessage>
                      </FormControl>
                      <FormControl id="postal_code" isRequired isInvalid={errors.postal_code}>
                        <FormLabel>{lang.get('billing_details.postal_code')}</FormLabel>
                        <Input
                          type="text"
                          placeholder={lang.get('billing_details.postal_code')}
                          variant="outline"
                          size="lg"
                          borderColor="gray.300"
                          borderRadius={12}
                          value={data.postal_code}
                          onChange={(event) => setData('postal_code', event.target.value)}
                        />
                        <FormErrorMessage color="chantilly.700">{errors.postal_code}</FormErrorMessage>
                      </FormControl>
                    </Stack>
                    <FormControl id="country" isRequired isInvalid={errors.country}>
                      <FormLabel>{lang.get('billing_details.country')}</FormLabel>
                      <Select
                        value={data.country}
                        placeholder={lang.get('billing_details.country')}
                        borderColor="gray.300"
                        errorBorderColor="chantilly.700"
                        borderRadius={12}
                        size="lg"
                        onChange={(event) => setData('country', event.target.value)}
                      >
                        {Object.entries(countries).map((country) => (
                          <option value={country[0]} key={country[0]}>
                            {country[1]}
                          </option>
                        ))}
                      </Select>
                      <FormErrorMessage color="chantilly.700">{errors.country}</FormErrorMessage>
                    </FormControl>
                  </VStack>
                </VStack>
                <VStack width={{ base: 'full', md: '40%' }} spacing={8}>
                  <VStack width="full" spacing={6} align="start">
                    <Text fontSize={{ base: 'xl', lg: '2xl' }} fontWeight="semibold">
                      {lang.get('billing_details.payment_method')}
                    </Text>
                    <FormControl id="method" isRequired>
                      <Stack width="full" direction="column">
                        <Box
                          width="100%"
                          p={5}
                          borderWidth="1px"
                          borderStyle="solid"
                          borderColor="gray.300"
                          borderRadius={12}
                        >
                          <HStack spacing={4} align="center" justify="space-between">
                            <HStack spacing={4} align="center">
                              <Icon
                                as={IoCard}
                                fontSize="2xl"
                                color="glacier.500"
                              />
                              <Text fontSize="md">{lang.get('billing_details.credit_card')}</Text>
                            </HStack>
                            <RadioGroup defaultValue="credit_card">
                              <Stack spacing={5} direction="row">
                                <Radio colorScheme="glacier" size="lg" value="credit_card" />
                              </Stack>
                            </RadioGroup>
                          </HStack>
                        </Box>
                      </Stack>
                    </FormControl>
                    <FormControl id="promo-code" isInvalid={!isValidPromoCode()}>
                      <FormLabel>{lang.get('billing_details.promo_code')}</FormLabel>
                      <InputGroup size="lg">
                        <Input
                          name="promo_code"
                          type="text"
                          placeholder={lang.get('billing_details.promo_code')}
                          variant="outline"
                          size="lg"
                          borderColor="gray.300"
                          borderRadius={12}
                          value={data.promo_code}
                          onChange={(event) => setData('promo_code', event.target.value)}
                        />
                        <InputRightElement width="6rem">
                          <Button
                            h="2rem"
                            w="5rem"
                            size="sm"
                            colorScheme="glacier"
                            borderRadius={12}
                            onClick={handleVerifyPromoCode}
                          >
                            {lang.get('billing_details.apply')}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      <FormErrorMessage>{promoCodeMessage}</FormErrorMessage>
                      {isValidPromoCode() && (
                        <FormHelperText color="green.400">{promoCodeMessage}</FormHelperText>
                      )}
                    </FormControl>
                    <Box
                      width={data.payment_method ? '70%' : 'full'}
                      background={data.payment_method ? 'linear-gradient(to right, #ffb8aa, #46b2d9 100%)' : 'white'}
                      borderRadius={24}
                      overflow="hidden"
                      boxShadow="sm"
                      py={8}
                      px={data.payment_method ? 6 : 12}
                      alignSelf="center"
                    >
                      <VStack width="full" spacing={6} align="cn">
                        {data.payment_method && (
                          <BillingDetailsCard
                            data={data}
                            handleSetPaymentMethod={handleSetPaymentMethod}
                          />
                        )}
                        {!data.payment_method && (
                          <Elements stripe={stripePromise} options={stripeElementsOptions}>
                            <BillingDetailsNewCard
                              data={data}
                              handleSetPaymentMethod={handleSetPaymentMethod}
                            />
                          </Elements>
                        )}
                      </VStack>
                    </Box>
                    <Text fontSize={{ base: 'lg', lg: 'xl' }} fontWeight="semibold">
                      {data.plan_name}
                    </Text>
                    <VStack width="full" align="start" divider={<StackDivider borderColor="gray.200" />}>
                      <HStack width="full" spacing={4} align="start" justify="space-between">
                        <Text fontSize="md">{lang.get('billing_details.subtotal')}</Text>
                        <Text fontSize="md">
                          {String(data.promo_code).toLowerCase() === 'privy2021' && currencyFormat.format(0)}
                          {String(data.promo_code).toLowerCase() !== 'privy2021' && currencyFormat.format(data.plan_price.value)}
                        </Text>
                      </HStack>
                      <HStack width="full" spacing={4} align="start" justify="space-between">
                        <Text fontSize="md">
                          VAT (
                          {String(data.promo_code).toLowerCase() === 'privy2021' && 0}
                          {String(data.promo_code).toLowerCase() !== 'privy2021' && data.plan_price.tax_rate.percentage}
                          %
                          )
                        </Text>
                        <Text fontSize="md">
                          {String(data.promo_code).toLowerCase() === 'privy2021' && currencyFormat.format(0)}
                          {String(data.promo_code).toLowerCase() !== 'privy2021' && currencyFormat.format(calculateVat(data.plan_price.value, data.plan_price.tax_rate.percentage))}
                        </Text>
                      </HStack>
                      <HStack width="full" spacing={4} align="start" justify="space-between">
                        <Text fontSize="md">{lang.get('billing_details.total')}</Text>
                        <Text fontSize="lg" fontWeight="semibold">
                            <Text fontSize="lg">
                              {String(data.promo_code).toLowerCase() === 'privy2021' && currencyFormat.format(0)}
                              {String(data.promo_code).toLowerCase() !== 'privy2021' && currencyFormat.format(calculateTotal(data.plan_price.value, data.plan_price.tax_rate.percentage))}
                            </Text>
                        </Text>
                      </HStack>
                    </VStack>
                    <Button
                      h="4rem"
                      w="full"
                      size="lg"
                      colorScheme="chantilly"
                      borderRadius={12}
                      isLoading={processing}
                      loadingText={lang.get('billing_details.submit_loading')}
                      isDisabled={!data.payment_method}
                      onClick={handleSubmit}
                    >
                      {lang.get('billing_details.submit')}
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

BillingDetails.layout = (page) => <Layout children={page} />;

export default BillingDetails;
