import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { useState } from 'react';
import { usePage } from '@inertiajs/inertia-react';
import useLang from '@/utils/useLang';

const stripeElementOptions = {
  style: {
    base: {
      fontFamily: 'Raleway',
      fontSize: '18px',
      fontWeight: 400,
      color: '#1a202c',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#ff7559',
    },
  },
};

export default function BillingDetailsNewCard({ data, handleSetPaymentMethod }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const { locale } = usePage().props;
  const lang = useLang(locale);
  lang.setFallback("en");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const cardNumberElement = elements.getElement(CardNumberElement);
    const cardExpiryElement = elements.getElement(CardExpiryElement);
    const cardCvcElement = elements.getElement(CardCvcElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardNumberElement,
      billing_details: {
        name: data.full_name,
        email: data.email,
        phone: data.phone_number,
        address: {
          line1: data.line1,
          city: data.city,
          postal_code: data.postal_code,
          country: data.country,
        },
      },
    });

    setIsLoading(false);

    if (error) {
      console.error('Stripe', error);
    } else {
      handleSetPaymentMethod(paymentMethod);
    }
  };

  return (
    <>
      <VStack width="full" spacing={1} align="start">
        <Text
          fontSize={{ base: 'xl', lg: '2xl' }}
          fontWeight="medium"
          color="glacier.500"
        >
          {lang.get('billing_details.credit_card_title')}
        </Text>
        <Text fontSize="md" color="gray.500">{lang.get('billing_details.credit_card_subtitle')}</Text>
      </VStack>
      <FormControl id="country" isRequired>
        <FormLabel>{lang.get('billing_details.number')}</FormLabel>
        <CardNumberElement options={stripeElementOptions} />
      </FormControl>
      <HStack width="full">
        <FormControl id="expiry-date" isRequired>
          <FormLabel>{lang.get('billing_details.expiry_date')}</FormLabel>
          <CardExpiryElement options={stripeElementOptions} />
        </FormControl>
        <FormControl id="cvv" isRequired>
          <FormLabel>{lang.get('billing_details.cvc')}</FormLabel>
          <CardCvcElement options={stripeElementOptions} />
        </FormControl>
      </HStack>
      <Button
        h="3rem"
        w="full"
        size="lg"
        colorScheme={data.payment_method ? 'green' : 'glacier'}
        borderRadius={12}
        isLoading={isLoading}
        loadingText={lang.get('billing_details.save_loading')}
        onClick={handleSubmit}
        isDisabled={data.payment_method}
      >
        {data.payment_method ? lang.get('billing_details.saved') : lang.get('billing_details.save')}
      </Button>
    </>
  );
}
