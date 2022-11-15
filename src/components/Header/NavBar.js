import {
  Flex,
  Heading,
  HStack,
  IconButton,
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  VStack,
  Stack
} from "@chakra-ui/react";
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";
import NavData from "./NavData";
import NavLink from "./NavLink";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      as="header"
      w="full"
      top={0}
      bg="#ffffff"
      position={"sticky"}
      zIndex='99999'
      boxShadow= {isOpen? '' : "xl"}
    >
      <Flex>
        <HStack
          w={{ base: "90%", md: "70%" }}
          mx="auto"
          justify="space-between"
          align="center"
          p={5}
        >
          <Heading
            display={{ base: "none", lg: "block" }}
            fontWeight="bold"
            color="#2b2c34"
          >
            Julio S. Silva
          </Heading>
          <Heading display={{ base: "block", lg: "none" }}>JS</Heading>
          <Flex display={{ lg: "none" }}>
            <IconButton
              icon={isOpen? <AiOutlineClose /> : <AiOutlineAlignRight />}
              onClick={isOpen? onClose : onOpen}
              fontSize={22}
              isRound="true"
              backgroundColor="#ffffff"
              colorScheme="teal"
              variant="outline"
              _hover={{ cursor: "pointer" }}
            />
          </Flex>
          <Flex
            display={{ base: "none", lg: "flex" }}
            justify="center"
            align="center"
          >
            {NavData.map((oneLink, index) => {
              return (
                <NavLink
                  key={index}
                  link={oneLink}
                  drawerOpen={isOpen}
                  onClose={onClose}
                />
              );
            })}
          </Flex>
        </HStack>
      </Flex>
      <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
        <DrawerOverlay p={0} />
        <DrawerContent>
          <DrawerBody>
            <VStack mb={10} mt={4} pt={10} zIndex={1}>
              <Stack align="center" pt={10} spacing={10}>
                {NavData.map((oneLink, index) => {
                  return (
                    <NavLink
                      key={index}
                      link={oneLink}
                      drawerOpen={isOpen}
                      onClose={onClose}

                    />
                  );
                })}
              </Stack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default NavBar;
