import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const login = () => {
  return (
    <>
      <Flex
        bg="brand.600"
        w="100vw"
        minH="100vh"
        justify="center"
        align="center"
      >
        <Stack w="50%" h="500px" bg="white" borderRadius="10px">
          <HStack>
            <VStack w="50%" h="100%" align="center" justify="center">
              <Image src="assets/login-img.png" w="100%" />
            </VStack>

            <VStack w="50%" p="10" spacing="5">
              <Heading>Login</Heading>

              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input placeholder="Enter your username" />
              </FormControl>

              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input placeholder="Enter your password" />
              </FormControl>

              <FormControl>
                <Checkbox>Remember me</Checkbox>
              </FormControl>

              <Button width="full" size="lg">
                Login
              </Button>
            </VStack>
          </HStack>

          <Flex fontWeight="500" align="center" d="inline" justify="center">
            <Text>Powered By</Text> &nbsp;
            <Text color="brand.600">3s Software Solution</Text>
          </Flex>
        </Stack>
      </Flex>
    </>
  );
};

export default login;
