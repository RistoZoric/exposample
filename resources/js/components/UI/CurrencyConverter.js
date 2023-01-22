import {
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { IoHelpCircle } from 'react-icons/io5';
import { usePage } from '@inertiajs/inertia-react';

const currencyFormat = (currency) => new Intl.NumberFormat('en-US', { style: 'currency', currency });

export default function CurrencyConverter({ amount, children }) {
  const { config } = usePage().props;
  const currencies = ['EUR', 'GBP', 'CAD', 'MXN'];

  function convert(value, currency) {
    value *= Number(config.exchangeRates[currency]);
    return currencyFormat(currency).format(value);
  }

  return (
    <HStack spacing={3} align="center">
      <Popover
        placement="bottom-end"
        trigger="hover"
        arrowShadowColor="gray.600"
      >
        <PopoverTrigger>
          <HStack spacing={1}>
            {children}
            <Icon as={IoHelpCircle} fontSize="lg" color="gray.600" />
          </HStack>
        </PopoverTrigger>
        <PopoverContent background="gray.600" borderColor="gray.600" color="white" w="150px">
          <PopoverArrow bg="gray.600" />
          <PopoverBody fontSize="sm">
            <VStack justify="center">
              {currencies.map((currency) => (
                <Text key={currency}>{convert(amount, currency)}</Text>
              ))}
            </VStack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </HStack>
  );
}
