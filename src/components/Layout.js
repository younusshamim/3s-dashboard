import { Flex, Stack } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import TopBg from "./TopBg";

const Layout = ({ children }) => {
  return (
    <Flex bg="blackAlpha.50" position="relative">
      <TopBg />
      <Sidebar />

      <Stack w="80%" minH="100vh" ml="20%" padding="30px 35px" zIndex="1">
        <Navbar />
        {children}
      </Stack>
    </Flex>
  );
};

export default Layout;
