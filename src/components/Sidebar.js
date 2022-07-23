import React from "react";
import { Box, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { FaHome, FaChartBar, FaCartArrowDown } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";

const Sidebar = () => {
  return (
    <Stack w="22%" h="100vh" padding="15px" position="fixed">
      <Stack
        bg="white"
        margin="auto"
        borderRadius="15px 15px 0 0"
        w="100%"
        h="100%"
        px="40px"
      >
        <Box my="30px" align="center">
          <Image src="assets/3s-logo.png" w="100px" />
        </Box>

        <Stack spacing={30} w="100%">
          <HStack justify="space-between">
            <HStack spacing="5">
              <Box fontSize="20" color="brand.600">
                <FaHome />
              </Box>
              <Text fontWeight="bold" color="brand.700">
                Dashboard
              </Text>
            </HStack>

            {/* <Box color="brand.700" fontSize="xl">
              <MdKeyboardArrowDown />
            </Box> */}
          </HStack>

          <HStack justify="space-between">
            <HStack spacing="5">
              <Box fontSize="20" color="brand.600">
                <FaChartBar />
              </Box>
              <Text fontWeight="bold" color="blackAlpha.700">
                Chart
              </Text>
            </HStack>

            <Box color="blackAlpha.700" fontSize="xl">
              <MdKeyboardArrowDown />
            </Box>
          </HStack>

          <HStack justify="space-between">
            <HStack spacing="5">
              <Box fontSize="20" color="brand.600">
                <TbReportSearch />
              </Box>
              <Text fontWeight="bold" color="blackAlpha.700">
                Reports
              </Text>
            </HStack>

            <Box color="blackAlpha.700" fontSize="xl">
              <MdKeyboardArrowDown />
            </Box>
          </HStack>

          <HStack justify="space-between">
            <HStack spacing="5">
              <Box fontSize="20" color="brand.600">
                <FaCartArrowDown />
              </Box>
              <Text fontWeight="bold" color="blackAlpha.700">
                Orders
              </Text>
            </HStack>

            <Box color="blackAlpha.700" fontSize="xl">
              <MdKeyboardArrowDown />
            </Box>
          </HStack>

          <HStack justify="space-between">
            <HStack spacing="5">
              <Box fontSize="20" color="brand.600">
                <FaChartBar />
              </Box>
              <Text fontWeight="bold" color="blackAlpha.700">
                Chart
              </Text>
            </HStack>

            <Box color="blackAlpha.700" fontSize="xl">
              <MdKeyboardArrowDown />
            </Box>
          </HStack>

          <HStack justify="space-between">
            <HStack spacing="5">
              <Box fontSize="20" color="brand.600">
                <TbReportSearch />
              </Box>
              <Text fontWeight="bold" color="blackAlpha.700">
                Reports
              </Text>
            </HStack>

            <Box color="blackAlpha.700" fontSize="xl">
              <MdKeyboardArrowDown />
            </Box>
          </HStack>

          <HStack justify="space-between">
            <HStack spacing="5">
              <Box fontSize="20" color="brand.600">
                <FaCartArrowDown />
              </Box>
              <Text fontWeight="bold" color="blackAlpha.700">
                Orders
              </Text>
            </HStack>

            <Box color="blackAlpha.700" fontSize="xl">
              <MdKeyboardArrowDown />
            </Box>
          </HStack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Sidebar;
