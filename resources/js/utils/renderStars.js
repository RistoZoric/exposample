import { Icon } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';

export default function renderStars(rating, fontSize) {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<Icon
      as={FaStar}
      fontSize={fontSize}
      color="#ffcc80"
      key={`yellowStar-${i}`}
    />);
  }
  for (let i = 0; i < (5 - rating); i++) {
    stars.push(<Icon
      as={FaStar}
      fontSize={fontSize}
      color="gray.300"
      key={`grayStar-${i}`}
    />);
  }
  return stars;
}
