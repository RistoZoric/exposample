import {
  Text,
  Box,
  Container,
  Button,
  Image,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import CanelaText from '@/components/UI/CanelaText';
import useRoutes from '@/utils/useRoutes';
import useLang from '@/utils/useLang';

export default function WhyCtaPlans() {
  const route = useRoutes();
  const { locale } = usePage().props;
  const lang = useLang(locale);
  lang.setFallback("en");

  return (
    <Box id="plans-section" width="full" background="white">
      <Container
        maxWidth="8xl"
        px={{ base: 6, md: 12, lg: 24 }}
        py={{ base: 8, md: 16 }}
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 4, md: 0 }}
          justify="center"
        >
          <Image
            src="/images/why-plans.jpg"
            borderRadius={24}
            fit="cover"
            maxHeight={{ base: '300px', md: '500px' }}
          />
          <VStack width={{ base: 'full', md: '35%' }} spacing={6} align="start">
            <CanelaText
              fontSize={{ base: '5xl', lg: '6xl' }}
              fontWeight="bold"
              ml={{ base: 0, lg: '-50px' }}
              dangerouslySetInnerHTML={{ __html: lang.get('creators.cta_plans.title') }}
            />
            <Text fontSize={{ base: 'md', md: 'lg' }}>
              {lang.get('creators.cta_plans.body')}
            </Text>
            <Button
              as={InertiaLink}
              href={route('pages.plans_and_pricing')}
              colorScheme="glacier"
              color="white"
              textDecoration="none"
              size="lg"
              width="200px"
            >
              {lang.get('creators.cta_plans.button')}
            </Button>
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
}
