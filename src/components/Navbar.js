import {
  Box,
  FormControl,
  HStack,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { HiMenuAlt1, HiSearch } from "react-icons/hi";
import { BiFullscreen } from "react-icons/bi";
import { AiOutlineFullscreen } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import AlertDialog from "./AlertDialog";
import { IoLogOutSharp } from "react-icons/io5";
import { useScreenContext } from "../context/ScreenContext";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const { handle } = useScreenContext();

  return (
    <HStack justify="space-between" mb="10">
      <HStack spacing="5">
        <Box fontSize="25" color="white" cursor="pointer">
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
          <Input placeholder="Search.." pl="40px" bg="white" />
        </FormControl>
      </HStack>

      <HStack spacing="3">
        {!handle.active ? (
          <Box
            cursor="pointer"
            fontSize="22"
            color="white"
            onClick={handle.enter}
          >
            <BiFullscreen />
          </Box>
        ) : (
          <Box
            cursor="pointer"
            fontSize="22"
            color="white"
            onClick={handle.exit}
          >
            <AiOutlineFullscreen />
          </Box>
        )}

        <Box cursor="pointer" fontSize="22" color="white">
          <IoMdNotifications />
        </Box>

        <Box cursor="pointer" fontSize="22" color="white" onClick={onOpen}>
          <IoLogOutSharp />
        </Box>
        <AlertDialog
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          cancelRef={cancelRef}
          headerText="Log Out"
          bodyText="Are you sure you want to logout?"
        />
      </HStack>
    </HStack>
  );
};

export default Navbar;
