import { Text } from '@chakra-ui/react';

export default function CanelaText({ children, ...props }) {
  return (
    <Text fontFamily="Canela" lineHeight="125%" {...props}>
      {children}
    </Text>
  );
}
