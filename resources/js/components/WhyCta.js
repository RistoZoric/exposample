import {
  Text,
  Box,
  Container,
  Button,
  Stack,
  VStack,
  Image,
} from '@chakra-ui/react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import CanelaText from '@/components/UI/CanelaText';
import useRoutes from '@/utils/useRoutes';
import useLang from '@/utils/useLang';

export default function WhyCta() {
  const route = useRoutes();
  const { locale } = usePage().props;
  const lang = useLang(locale);
  lang.setFallback("en");

  return (
    <Box width="full" background="chantilly.100">
      <Container
        maxWidth="8xl"
        px={{ base: 6, md: 12, lg: 24 }}
        py={8}
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 6, lg: 24, md: 24 }}
          align="center"
          justify={{ base: 'center', md: 'space-between' }}
        >
          <Box width={{ base: 'full', lg: '46%', md:'66%' }}>
            <Stack direction="column" spacing={12}>
              <VStack spacing={6} align="start">
                <CanelaText
                  color="black"
                  fontSize={{ base: '4xl', lg: '5xl' }}
                  fontWeight="medium"
                  as="h2"
                >
                  {lang.get('creators.cta.title')}
                </CanelaText>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.500" wordBreak="break-word">
                  {lang.get('creators.cta.body')}
                </Text>
              </VStack>
              <Button
                as={InertiaLink}
                href={route('pages.trust_in_reviews')}
                variant="outline"
                size="lg"
                color="chantilly.500"
                fontWeight="bold"
                fontSize="2xl"
                textTransform="uppercase"
                borderColor="chantilly.500"
                borderWidth={2}
                borderRadius={0}
                height="60px"
                width={{ base: 'full', lg: '46%', md:'66%' }}
              >

                {lang.get('creators.cta.button')}
              </Button>
            </Stack>
          </Box>
          <Box width={{ base: 'full', md: '35%' }}>
            <Image
              src="/images/why-cta.png"
              fit="cover"
              maxHeight={{ base: '300px', md: '500px' }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
