import { Container } from '@chakra-ui/react';

export default function PaddedContainer({ children, ...props }) {
  return (
    <Container
      maxWidth="8xl"
      px={{ base: 6, md: 12 }}
      py={{ base: 6, md: 12 }}
    >
      {children}
    </Container>
  );
}
