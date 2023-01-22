import {
  Text,
  Box,
  Container,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { usePage } from '@inertiajs/inertia-react';
import useLang from '@/utils/useLang';

export default function WhyFeatures() {
  const { locale } = usePage().props;
  const lang = useLang(locale);
  lang.setFallback("en");

  return (
    <Box width="full" background="white">
      <Container
        maxWidth="8xl"
        px={{ base: 6, md: 12, lg: 24 }}
        py={{ base: 8, md: 16 }}
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 6, md: 24 }}
          justify="center"
        >
          <VStack width={{ base: 'full', md: '500px' }} spacing={4} align="start">
            <Text fontSize={{ base: '4xl', lg: '5xl' }} fontWeight="bold" lineHeight="120%">
              01.
            </Text>
            <Text fontSize={{ base: 'xl', lg: '2xl' }} fontWeight="semibold" lineHeight="120%">
              {lang.get('creators.features.1.title')}
            </Text>
            <Text fontSize={{ base: 'sm', lg: 'md' }} color="gray.500" lineHeight="120%">
              {lang.get('creators.features.1.body')}
            </Text>
          </VStack>
          <VStack width={{ base: 'full', md: '500px' }} spacing={4} align="start">
            <Text fontSize={{ base: '4xl', lg: '5xl' }} fontWeight="bold" lineHeight="120%">
              02.
            </Text>
            <Text fontSize={{ base: 'xl', lg: '2xl' }} fontWeight="semibold" lineHeight="120%">
              {lang.get('creators.features.2.title')}
            </Text>
            <Text fontSize={{ base: 'sm', lg: 'md' }} color="gray.500" lineHeight="120%">
              {lang.get('creators.features.2.body')}
            </Text>
          </VStack>
          <VStack width={{ base: 'full', md: '500px' }} spacing={4} align="start">
            <Text fontSize={{ base: '4xl', lg: '5xl' }} fontWeight="bold" lineHeight="120%">
              03.
            </Text>
            <Text fontSize={{ base: 'xl', lg: '2xl' }} fontWeight="semibold" lineHeight="120%">
              {lang.get('creators.features.3.title')}
            </Text>
            <Text fontSize={{ base: 'sm', lg: 'md' }} color="gray.500" lineHeight="120%">
              {lang.get('creators.features.3.body')}
            </Text>
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
}
