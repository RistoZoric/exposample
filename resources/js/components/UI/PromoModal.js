import {
  Stack,
  Text,
  Modal,
  ModalContent,
  ModalOverlay,
  Button,
  Box,
  VStack,
  Image,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getWithExpiry, setWithExpiry } from '@/utils/storageWithExpiry';
import CanelaText from '@/components/UI/CanelaText';
import { Link } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function PromoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const isClosed = getWithExpiry('promo_code_cta');

  function handleOpen() {
    setIsOpen(true);
  }

  async function handleClose() {
    // Store for one week (milliseconds).
    await setWithExpiry('promo_code_cta', 'true', 10080 * 60000);
    await setIsOpen(false);
  }

  useEffect(() => {
    if (!isClosed) {
      handleOpen();
    }
  }, [isClosed]);

  return (
    <Modal
      size="2xl"
      isOpen={isOpen}
      onClose={handleClose}
      closeOnOverlayClick={false}
      isCentered
    >
      <ModalOverlay />
      <ModalContent bg="gray.900">
        <Stack direction={{ base: 'column', md: 'row' }} align="center">
          <Image src="/images/promo-code-cta.jpg" height={{ base: '0px', md: '400px' }} />
          <Box width="full" color="white" textAlign="center" p={10}>
            <VStack width="full" spacing={8} justify="center">
              <VStack spacing={4}>
                <CanelaText fontSize="2xl">Premium</CanelaText>
                <Text fontSize="2xl" fontWeight="medium" W>6 Months FREE</Text>
              </VStack>
              <VStack spacing={3}>
                <Box bg="gray.700" borderRadius={24} py={2} px={16}>
                  <Text>PRIVY2022</Text>
                </Box>
                <Text fontSize="xs">Enter code at checkout.</Text>
              </VStack>
              <Button
                width="full"
                size="lg"
                colorScheme="glacier"
                onClick={()=>{
                  Inertia.get("/checkout/my-plan");
                  handleClose()
                }}
              >
                Get Premium
              </Button>
              <Button
                width="full"
                size="lg"
                colorScheme="chantilly"
                onClick={handleClose}
              >
                No Thanks
              </Button>
            </VStack>
          </Box>
        </Stack>
      </ModalContent>
    </Modal>
  );
}
