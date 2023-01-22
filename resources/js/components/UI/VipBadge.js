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
import { RiVipCrownLine } from 'react-icons/ri';

export default function VipBadge() {
  return (
    <Popover
      placement="bottom"
      trigger="hover"
      arrowShadowColor="gray.600"
    >
      <PopoverTrigger>
        <Box>
          <Icon as={RiVipCrownLine} fontSize="3xl" color="#ffe0b2" />
        </Box>
      </PopoverTrigger>
      <PopoverContent background="gray.600" borderColor="gray.600" color="white">
        <PopoverHeader fontWeight="semibold" borderColor="gray.500">{lang.get('badges.vip.title')}</PopoverHeader>
        <PopoverArrow bg="gray.600" />
        <PopoverCloseButton />
        <PopoverBody>
          {lang.get('badges.vip.body')}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
