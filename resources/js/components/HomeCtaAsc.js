import {
  Box, Container, Button, VStack, Text,
} from '@chakra-ui/react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import CanelaText from '@/components/UI/CanelaText';
import useRoutes from '@/utils/useRoutes';
import useLang from '@/utils/useLang';

export default function HomeCatAscs() {
  const route = useRoutes();
  const { locale } = usePage().props;
  const lang = useLang(locale);
  lang.setFallback("en");

  return (
    <Box
      width="full"
      background="linear-gradient(90deg, #80CAE5BD 0%, #80CAE5BD 49%, #FFB8AABD 100%), url('/images/abstract-icon-pattern.png') bottom 100% center"
      p={8}
    >
      <Container maxWidth="8xl" px={{ base: 6, md: 0 }} py={4}>
        <VStack justify="center">
          <CanelaText
            color="black"
            fontSize="4xl"
            fontWeight="bold"
            letterSpacing={2}
            as="h2"
          >
            {lang.get('home.cta_asc.title')}
          </CanelaText>
          <Text
            py={6}
            color="black"
            fontWeight="semibold"
            fontSize={{ base: 'md', md: 'lg' }}
            dangerouslySetInnerHTML={{
              __html: lang.get('home.cta_asc.body'),
            }}
            textAlign="center"
          />

          <Button
            as={InertiaLink}
            href={route('pages.creators')}
            variant="solid"
            size="lg"
            colorScheme="glacier"
            fontWeight="bold"
            fontSize="1xl"
            textTransform="uppercase"
            borderRadius={12}
            height="50px"
          >
            {lang.get('home.cta_asc.button')}
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}
