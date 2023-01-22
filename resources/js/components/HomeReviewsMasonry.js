import {
  Text,
  Box,
  Container,
  Avatar,
  VStack,
  HStack,
} from '@chakra-ui/react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { usePage } from '@inertiajs/inertia-react';
import CanelaText from '@/components/UI/CanelaText';
import renderStars from '@/utils/renderStars';
import useLang from '@/utils/useLang';

export default function HomeReviewsMasonry({ reviews }) {
  const { locale } = usePage().props;
  const lang = useLang(locale);
  lang.setFallback("en");

  const renderReview = (review) => (
    <Box
      width={{ base: 'full', md: '350px' }}
      background="white"
      borderRadius="4px"
      boxShadow="sm"
      p={8}
      mb={2}
      key={review.id}
    >
      <VStack spacing={6} align="start">
        <Text color="gray.500" fontSize="md">
          {review.description}
        </Text>
        <HStack spacing={2}>
          {renderStars(review.rating, 'xl')}
        </HStack>
        <HStack spacing={5}>
          <Avatar src={review.avatar} background="glacier.300" />
          <Box alignItems="center"  color="black">
            <Text fontWeight="semibold" fontSize="lg">
              {review.username}
            </Text>
            <Text fontSize="sm">
              {lang.get('home.reviews_masonry.reviewed', { name: review.creator_username })}
            </Text>
          </Box>
        </HStack>
      </VStack>
    </Box>
  );

  return (
    <Box width="full" background="glacier.100">
      <Container
        maxWidth="8xl"
        px={{ base: 6, md: 0 }}
        py={16}
      >
        <VStack justify="center" mb={12}>
          <Text
            color="black"
            fontSize="1xl"
            fontWeight="bold"
            textTransform="uppercase"
            letterSpacing={2}
            mb={4}
            as="h2"
          >
            {lang.get('home.reviews_masonry.subtitle')}
          </Text>
          <CanelaText
            color="black"
            fontSize="4xl"
            fontWeight="medium"
            dangerouslySetInnerHTML={{ __html: lang.get('home.reviews_masonry.title') }}
            textAlign="center"
          />
        </VStack>
        <ResponsiveMasonry
          columnsCountBreakPoints={{
            350: 1, 750: 2, 950: 3, 1100: 4,
          }}
          gutter={2}
        >
          <Masonry>
            {reviews.map(renderReview)}
          </Masonry>
        </ResponsiveMasonry>
      </Container>
    </Box>
  );
}
