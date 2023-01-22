import {
  Icon,
  Popover,
  PopoverTrigger,
  PopoverHeader,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Box,
} from '@chakra-ui/react';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { usePage } from '@inertiajs/inertia-react';
import useLang from '@/utils/useLang';

export default function VerifiedBadge() {
  const { locale } = usePage().props;
  const lang = useLang(locale);
  lang.setFallback("en");

  return (
    <Popover
      placement="bottom"
      trigger="hover"
      arrowShadowColor="gray.600"
    >
      <PopoverTrigger>
        <Box>
          <Icon as={IoCheckmarkCircleOutline} fontSize="3xl" color="green.200" />
        </Box>
      </PopoverTrigger>
      <PopoverContent background="gray.600" borderColor="gray.600" color="white">
        <PopoverHeader fontWeight="semibold" borderColor="gray.500">{lang.get('badges.verified.title')}</PopoverHeader>
        <PopoverArrow bg="gray.600" />
        <PopoverCloseButton />
        <PopoverBody>
          {lang.get('badges.verified.body')}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
