import {
  Text,
  Box,
  Container,
  Button,
  Stack,
  Image,
} from '@chakra-ui/react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import CanelaText from '@/components/UI/CanelaText';
import useRoutes from '@/utils/useRoutes';
import useLang from '@/utils/useLang';

export default function HomeCtaReviews() {
  const route = useRoutes();
  const { locale } = usePage().props;
  const lang = useLang(locale);
  lang.setFallback("en");

  return (
    <Box width="full" background="chantilly.50">
      <Container
        maxWidth="8xl"
        px={{ base: 6, md: 12, lg: 24 }}
        py={8}
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 6, md: 24 }}
          align="center"
          justify={{ base: 'center', md: 'space-between' }}
        >
          <Box width={{ base: 'full', md: '50%' }}>
            <Stack direction="column" spacing={6}>
              <CanelaText
                color="black"
                fontSize={{ base: '4xl', lg: '5xl' }}
                fontWeight="medium"
                as="h2"
                dangerouslySetInnerHTML={{ __html: lang.get('home.cta_reviews.title') }}
              />
              <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.500" wordBreak="break-word">
                {lang.get('home.cta_reviews.body')}
              </Text>
              <Button
                as={InertiaLink}
                href={route('categories.search')}
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
                width="60%"
              >
                {lang.get('home.cta_reviews.button')}
              </Button>
            </Stack>
          </Box>
          <Box width={{ base: 'full', md: '50%' }}>
            <Image
              src="/images/home-review-cat-n2.svg"
              fit="cover"
              maxHeight={{ base: '300px', md: '500px' }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
