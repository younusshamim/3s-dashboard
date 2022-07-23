import { Box, FormControl, HStack, Input } from "@chakra-ui/react";
import React from "react";
import { HiMenuAlt1, HiSearch } from "react-icons/hi";
import { BiFullscreen } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { IoLogOutSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <HStack justify="space-between" mb="6">
      <HStack spacing="5">
        <Box fontSize="25" color="white">
          <HiMenuAlt1 />
        </Box>

        <FormControl w="200px" position="relative">
          <Box
            color="brand.700"
            fontSize="20"
            position="absolute"
            left="10px"
            top="11px"
            zIndex="5"
          >
            <HiSearch />
          </Box>
          <Input placeholder="Search.." pl="40px" color="white" bg="white" />
        </FormControl>
      </HStack>

      <HStack spacing="3">
        <Box fontSize="20" color="white">
          <BiFullscreen />
        </Box>
        <Box fontSize="20" color="white">
          <IoMdNotifications />
        </Box>
        <Box fontSize="20" color="white">
          <IoLogOutSharp />
        </Box>
      </HStack>
    </HStack>
  );
};

export default Navbar;
