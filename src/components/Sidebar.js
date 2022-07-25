import React from "react";
import { Accordion, Box, Image, Stack } from "@chakra-ui/react";
import { sidebarData } from "../data";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <Stack
      w="20%"
      h="100vh"
      padding="15px"
      position="fixed"
      bg="white"
      borderRadius="20px 20px 0 0"
      margin="15px"
    >
      <Box my="30px" align="center">
        <Image src="assets/3s-logo.png" w="100px" />
      </Box>

      <Stack w="100%">
        <Accordion>
          {sidebarData.map((item) => (
            <SidebarItem key={item.id} item={item} />
          ))}
        </Accordion>
      </Stack>
    </Stack>
  );
};

export default Sidebar;
