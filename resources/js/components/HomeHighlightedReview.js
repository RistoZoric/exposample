import {
  Text,
  Box,
  Container,
  Stack,
  Image,
  Avatar,
  HStack,
} from '@chakra-ui/react';
import { usePage } from '@inertiajs/inertia-react';
import CanelaText from '@/components/UI/CanelaText';
import Quote from '@/assets/images/Quote';
import renderStars from '@/utils/renderStars';
import useLang from '@/utils/useLang';

export default function HomeHighlightedReview({ review }) {
  const { locale } = usePage().props;
  const lang = useLang(locale);
  lang.setFallback("en");

  return (
    <Box width="full" background="glacier.500" key={review.id}>
      <Container
        maxWidth="8xl"
        px={{ base: 6, md: 12, lg: 24 }}
      >
        <Stack
          direction={{ base: 'column-reverse', md: 'row' }}
          spacing={8}
          align="center"
          justify={{ base: 'center', lg: 'space-between' }}
        >
          <Box pt={{ base: 0, md: 8 }} pb={8}>
            <CanelaText
              color="white"
              fontSize={{ base: '4xl', lg: '5xl' }}
              fontWeight="bold"
              as="h2"
              dangerouslySetInnerHTML={{ __html: lang.get('home.highlighted_review.title') }}
            />
            <Text mt={6}>
              <Quote />
            </Text>
            <Text my={6} fontSize={{ base: 'md', md: 'lg' }} color="white">
              {review.description}
            </Text>
            <HStack spacing={2}>
              {renderStars(review.rating, '2xl')}
            </HStack>
            <Stack direction="row" mt={10} spacing={5}>
              <Avatar src={review.avatar} borderRadius="8px" background="glacier.300" />
              <Box alignItems="center" color="white">
                <Text fontWeight="semibold" fontSize="lg">
                  {review.username}
                </Text>
                <Text fontSize="sm">
                {lang.get('home.highlighted_review.reviewed', { name: review.creator_username })}
                </Text>
              </Box>
            </Stack>
            <Stack
              direction="row"
              wrap="wrap"
              spacing={5}
              S
              mt={10}
            >
              <Box height={1} width={5} background="glacier.200" borderRadius="8px" />
              <Box height={1} width={1} background="glacier.200" borderRadius="50%" />
              <Box height={1} width={1} background="glacier.200" borderRadius="50%" />
            </Stack>
          </Box>
          <Image src="/images/reviews.png" width={{ base: 'full', md: '40%' }} opacity={0.8} />
        </Stack>
      </Container>
    </Box>
  );
}
