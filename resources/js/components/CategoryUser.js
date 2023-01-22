import {
  LinkBox,
  LinkOverlay,
  Flex,
  Avatar,
  Text,
  Button,
} from '@chakra-ui/react';
import { InertiaLink } from '@inertiajs/inertia-react';
import { useState } from 'react';
import useRoutes from '@/utils/useRoutes';
import truncateText from '@/utils/truncateText';

export default function CategoryUser({ user }) {
    const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const route = useRoutes();
  function handleOpenInviteModal() {
    setIsInviteModalOpen(true);
  }

  function handleCloseInviteModal() {
    setIsInviteModalOpen(false);
  }
  return (
    <LinkBox>
      <LinkOverlay as={InertiaLink} href={route('users.view', user.username)}>
        <Flex direction="column" align="center">
          <Avatar src={user.avatar} size="2xl" pointerEvents="none" background="glacier.300"/>
          <Text fontSize="sm" fontWeight="semibold" textAlign="center" color="gray.600" pt={2}>{truncateText(user.username, 20)}</Text>
        </Flex>
      </LinkOverlay>
      <Flex direction="column" align="center" paddingTop={5}>
      <Button as={InertiaLink} href={route('users.view', user.username)}  bgColor="glacier.500" color="white" size="sm" _hover={{color:"black"}}><Text fontSize="sm" fontWeight="semibold" textAlign="center">Review</Text></Button>
      </Flex>
    </LinkBox>
  );
}
