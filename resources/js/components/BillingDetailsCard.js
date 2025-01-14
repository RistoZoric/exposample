import {
  Text,
  VStack,
  HStack,
  Icon,
  IconButton,
  Box,
} from '@chakra-ui/react';
import { FaAsterisk } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

export default function BillingDetailsCard({ data, handleSetPaymentMethod }) {
  const { name } = data.payment_method.billing_details;
  const { last4, exp_month, exp_year } = data.payment_method.card;

  return (
    <>
      <VStack width="full" spacing={6} align="center">
        <HStack width="full" justify="space-between">
          <Box
            backgroundImage="url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9Ijc2IiB2aWV3Qm94PSIwIDAgMTAwIDc2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjEwMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkNDODAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjZmFkN2EyIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNOTIuNzI3IDc1LjQ1NWgtODUuNDU1Yy00IDAtNy4yNzMtMy4yNzMtNy4yNzMtNy4yNzN2LTYwLjkwOWMwLTQgMy4yNzMtNy4yNzMgNy4yNzMtNy4yNzNoODUuNDU1YzQgMCA3LjI3MyAzLjI3MyA3LjI3MyA3LjI3M3Y2MC45MDljMCA0LTMuMjczIDcuMjczLTcuMjczIDcuMjczIiBmaWxsPSJ1cmwoI2EpIi8+PHBhdGggZD0iTTcyLjEyMyAyOC40ODVoMjcuODc4di0xLjgxOGgtMjkuNjQ4Yy0uOTY1IDAtMS44MzIuNjAxLTIuMTcyIDEuNTA0LTIuMjg3IDYuMDcyLTIuNDMzIDEyLjU5NC0uNDM4IDE5Ljg0Mi40NTUgMS42NTQuNDM1IDMuNC0uMSA1LjAzLTIuMDM2IDYuMTk1LTcuNzc5IDE5Ljk4OC0xOC41NTEgMTkuOTg4LTExLjAwOCAwLTE2LjA5Ni0xNS42OTktMTcuMzM0LTIxLjk1Mi0uMTU1LS43ODQtLjEyMi0xLjU5Mi4xMDctMi4zNTcgMS42OTUtNS42NDggMi4wOTQtMTAuNjQtLjAxNi0xOS41OS0uMjA1LS44Ny0uMTgyLTEuNzgzLjA0OC0yLjY0NiA0LjQ4LTE2Ljc1NSAxMi44ODItMjAuMTQ3IDEyLjk2NS0yMC4xNzkuMzU2LS4xMzIuNTkzLS40NzIuNTkzLS44NTJ2LTUuNDU1aC0xLjgxOHYzLjc3NmMwIC42NS0uMzMyIDEuMjUyLS44ODQgMS41OTYtMi44MDMgMS43NDItOC45MDQgNi45MzYtMTIuNTU3IDIwLjQ1Ni0uMTguNjY4LS43ODEgMS4xMzYtMS40NzMgMS4xMzNsLTI4LjcyMi0uMTM5djEuODE4bDI3LjQxNi4xMzNjMS40NjguMDA3IDIuNzM1IDEuMDQxIDMuMDM3IDIuNDc4IDEuNDE2IDYuNzQxIDEuMjE5IDExLjAzOS4wODIgMTUuNDU4LS4zMTYgMS4yMy0xLjQyIDIuMDk2LTIuNjkgMi4xMDlsLTI3Ljg0NC4yN3YxLjgxOWwyOC42MDUtLjI3OGMuNjkzLS4wMDcgMS4yOTYuNDczIDEuNDM1IDEuMTUyIDEuNDQyIDcuMDQxIDYuODg3IDIzLjA3IDE5LjA1IDIzLjA3IDYuMzY4IDAgMTIuMDYyLTQuMjUgMTYuNDY3LTEyLjI5IDIuNjQ0LTQuODI4IDQuMDY3LTkuNTkxIDQuNTQxLTExLjM0NmgyOS45MDF2LTEuODE4aC0yOC4wMTZjLTEuMTU4IDAtMi4xODMtLjc3Mi0yLjQ4OS0xLjg4OS0xLjY5Mi02LjE2NC0xLjc2MS0xMS43NTUtLjItMTYuOTU5LjM3MS0xLjIzNSAxLjUzOC0yLjA2MSAyLjgyNy0yLjA2MXptLTE3LjE1LTIxLjkxNGMuMDQ1LjAyMiA0LjUxOSAyLjMyMiA5LjI1MyAxMC4wNDEuMTcyLjI4LjQ3LjQzNC43NzYuNDM0LjE5OCAwIC4zOTktLjA2NC41NzEtLjIwMi4zNjUtLjI5Mi40MTYtLjgzNy4xNzItMS4yMzUtMy41Ny01LjgwNS03LjAyNC04LjcxLTguNzc1LTkuOTMxLS40My0uMjk5LS42OC0uNzkyLS42OC0xLjMxNXYtNC4zNjNoLTEuODE4djUuNzU4YzAgLjM0NS4xOTUuNjU5LjUwMi44MTN6IiBmaWxsPSIjZjViOGFjIi8+PC9zdmc+Cg==)"
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
            height="26.36364px"
            width="41.42857px"
          />
          <IconButton
            colorScheme="whiteAlpha"
            size="sm"
            icon={<Icon as={IoClose} />}
            isRound
            onClick={() => handleSetPaymentMethod(null)}
          />
        </HStack>
        <HStack spacing={4}>
          <HStack spacing={2}>
            <Icon as={FaAsterisk} color="glacier.100" fontSize="xs" />
            <Icon as={FaAsterisk} color="glacier.100" fontSize="xs" />
            <Icon as={FaAsterisk} color="glacier.100" fontSize="xs" />
            <Icon as={FaAsterisk} color="glacier.100" fontSize="xs" />
          </HStack>
          <HStack spacing={2}>
            <Icon as={FaAsterisk} color="glacier.100" fontSize="xs" />
            <Icon as={FaAsterisk} color="glacier.100" fontSize="xs" />
            <Icon as={FaAsterisk} color="glacier.100" fontSize="xs" />
            <Icon as={FaAsterisk} color="glacier.100" fontSize="xs" />
          </HStack>
          <HStack spacing={2}>
            <Icon as={FaAsterisk} color="glacier.100" fontSize="xs" />
            <Icon as={FaAsterisk} color="glacier.100" fontSize="xs" />
            <Icon as={FaAsterisk} color="glacier.100" fontSize="xs" />
            <Icon as={FaAsterisk} color="glacier.100" fontSize="xs" />
          </HStack>
          <Text
            fontSize={{ base: 'xl', lg: '2xl' }}
            fontWeight="medium"
            color="white"
          >
            {last4}
          </Text>
        </HStack>
        <HStack width="full" justify="space-between">
          <Text fontSize="md" color="glacier.100">
            {name ? name.toUpperCase() : null}
          </Text>
          <Text fontSize="md" color="glacier.100">
            {String(exp_month).padStart(2, '0')}
            /
            {exp_year}
          </Text>
        </HStack>
      </VStack>
    </>
  );
}
