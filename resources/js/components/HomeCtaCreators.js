import {
  Text,
  Box,
  Container,
  Button,
  Image,
  Stack,
} from '@chakra-ui/react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import CanelaText from '@/components/UI/CanelaText';
import useRoutes from '@/utils/useRoutes';
import useLang from '@/utils/useLang';

export default function HomeCtaCreators() {
  const { locale } = usePage().props;
  const lang = useLang(locale);
  lang.setFallback("en");
  const route = useRoutes();

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
          align="center"
          justify={{ base: 'center', md: 'space-between' }}
        >
          <Image
            src="/images/creators-cta.jpg"
            height={{ base: '150px', md: '250px' }}
            width={{ base: 'full', md: '50%' }}
            objectFit="cover"
            borderRadius={24}
            boxShadow="sm"
          />
          <Box width={{ base: 'full', md: '50%' }}>
            <Stack direction="column" spacing={6}>
              <CanelaText
                color="black"
                fontSize={{ base: '4xl', lg: '5xl' }}
                fontWeight="medium"
                as="h2"
                dangerouslySetInnerHTML={{ __html: lang.get('home.cta_creators.title') }}
              />
              <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.500" wordBreak="break-word">
                {lang.get('home.cta_creators.body')}
              </Text>
              <Button
                as={InertiaLink}
                href={route('pages.featured_creators')}
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
                {lang.get('home.cta_creators.button')}
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
