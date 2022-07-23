import { Stack } from "@chakra-ui/react";
import React from "react";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";

const MainContent = () => {
  return (
    <Stack w="78%" minH="100vh" ml="22%" padding="30px" zIndex="1">
      <Navbar />
      <Dashboard />
    </Stack>
  );
};

export default MainContent;
