import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <Flex
      background="white"
      h="75px"
      minH="max-content"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex>
        <a href="/">
          <Image
            src="/images/logo.png"
            alt="Braket Jobs"
            width="90px"
            px="1"
            draggable={false}
          />
        </a>
        <Box paddingY="2">
          <Text
            color="red.500"
            border="1px solid red"
            borderRadius="20px"
            paddingX="2"
            userSelect="none"
            cursor="progress"
            _hover={{ color: "white", backgroundColor: "red" }}
          >
            Alpha
          </Text>
        </Box>
      </Flex>
      <Box px="10px">
        <Button colorScheme="teal" cursor="progress">
          <Text as="a" href="/post/new/" cursor="progress">
            Post A Job
          </Text>
        </Button>
      </Box>
    </Flex>
  );
};
