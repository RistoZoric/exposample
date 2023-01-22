import {
  Stack,
  Text,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  Button,
  Box,
  VStack,
  Image,
} from '@chakra-ui/react';
import CanelaText from '@/components/UI/CanelaText';

export default function CtaAscModal(props) {
  const { isOpen, handleClose } = props;
  return (
    <Modal
      size="4xl"
      isOpen={isOpen}
      onClose={handleClose}
      closeOnOverlayClick
      isCentered
    >
      <ModalOverlay />
      <ModalContent bg="linear-gradient(131.14deg, #FFB8AA 7.44%, #80CAE5 95.99%) top 100% center">
        <Stack direction={{ base: 'column', md: 'row' }} align="center" overflow="hidden" borderRadius={5}>
          <ModalCloseButton color="white" _focus={{ outline: 'none' }} />
          <Image style={{ marginInlineStart: 0 }} src="/images/cta-modal-girl.svg" height={{ base: '0px', md: '400px' }} />
          <Box style={{ marginInlineStart: 0, height: '100%', padding: '66px 12px' }} width="full" color="white" textAlign="center" p={10} background="linear-gradient(131.14deg, #FFB8AA 7.44%, #80CAE5 95.99%) top 100% center">
            <VStack width="full" height="100%" spacing={0} justify="center">
              <VStack spacing={4}>
                <CanelaText py={2} fontSize="2xl" fontWeight="medium">Creators: Get Featured on our “Featured Creators Page”</CanelaText>
                <Text fontSize="1xl">Enjoy our Premium Plan for 6 months free!</Text>
                <Text style={{ marginTop: 0 }} fontSize="1xl">Use Promocode:</Text>
              </VStack>
              <VStack spacing={10}>
                <Box background="#FFFFFF42" py={2} px={8}>
                  <Text color="black">
                    <strong>Privy2022</strong>
                    {' '}
                    at checkout
                  </Text>
                </Box>
                <Text fontSize="xs" />
              </VStack>
              <VStack spacing={3}>
                <Button
                  overflow="hidden"
                  align="center"
                  py={4}
                  paddingRight={0}
                  size="lg"
                  colorScheme="black"
                  background="black"
                  onClick={handleClose}
                  rightIcon={(
                    <Box p={4} background="gray.700">
                      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.20605 11.399V15.362L12.8541 3.83105L4.20605 11.399Z" fill="#F9B9AD" />
                          <path d="M0.71788 7.606C0.643328 7.64346 0.580121 7.70014 0.534777 7.77018C0.489433 7.84022 0.463595 7.92108 0.459926 8.00444C0.456258 8.08779 0.474892 8.17062 0.513908 8.24437C0.552924 8.31812 0.610908 8.38013 0.68188 8.424L3.91188 10.412L15.6709 0.049L15.7079 0L0.71788 7.606Z" fill="#F9B9AD" />
                          <path d="M16.36 0.690968L7.45996 12.591L12.86 15.917C12.9247 15.9567 12.998 15.9801 13.0738 15.9852C13.1495 15.9903 13.2254 15.9769 13.2948 15.9462C13.3643 15.9155 13.4252 15.8684 13.4724 15.809C13.5197 15.7496 13.5518 15.6795 13.566 15.605L16.447 0.615967L16.36 0.690968Z" fill="#F9B9AD" />
                        </svg>
                    </Box>
)}
                >
                  GET PREMIUM NOW
                </Button>
              </VStack>
            </VStack>
          </Box>
        </Stack>
      </ModalContent>
    </Modal>
  );
}
