import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TbPoint } from "react-icons/tb";
import { Link } from "react-router-dom";

const SidebarItem = ({ item }) => {
  return (
    <AccordionItem py="1">
      <Link to={item.link}>
        <AccordionButton>
          <HStack justify="space-between" w="100%">
            <HStack spacing="5">
              <Box fontSize="20" color="brand.600">
                {<item.icon />}
              </Box>
              <Text fontWeight="bold" color="blackAlpha.700">
                {item.itemName}
              </Text>
            </HStack>

            <Box color="blackAlpha.700" fontSize="xl">
              {item.subItems.length > 0 && <MdKeyboardArrowDown />}
            </Box>
          </HStack>
        </AccordionButton>
      </Link>

      {item.subItems.length > 0 && (
        <AccordionPanel>
          {item.subItems.map((item) => (
            <Link to={item.link}>
              <HStack
                pl="9"
                fontWeight="bold"
                color="blackAlpha.700"
                mb="3"
                cursor="pointer"
                _hover={{
                  color: "brand.700",
                }}
                transition=".4s ease"
              >
                <Box color="brand.700">
                  <TbPoint />
                </Box>
                <Box>{item.subName}</Box>
              </HStack>
            </Link>
          ))}
        </AccordionPanel>
      )}
    </AccordionItem>
  );
};

export default SidebarItem;
