import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import { ContactMe } from "../components/ContactMe";
import { NavBar } from "../components/NavBar";

interface devProps {}

const dev: React.FC<devProps> = ({}) => {
  return (
    <Box backgroundColor="#EAF3F9" minH="100vh" w="100vw" position="relative">
      <Box>
        <NavBar linkTo="/" />
        <Flex
          alignItems="center"
          flexDirection={["column-reverse", "column-reverse", "row"]}
        >
          <Flex
            alignItems="center"
            flex="0.5"
            pl={["5", "5", "20"]}
            minH="80vh"
            mb="5vh"
          >
            <Box>
              <Text
                as="h3"
                color="gray.500"
                fontWeight="extrabold"
                fontSize="3xl"
              >
                Braket Jobs
              </Text>
              <Text
                as="h1"
                color="#2B468A"
                fontSize="5xl"
                fontWeight="extrabold"
              >
                A Job Search Tool For Developers
              </Text>
              <Text
                as="h3"
                color="gray.500"
                fontWeight="bold"
                fontSize="l"
                mr="20%"
              >
                Braket Jobs is a job searching tool that crawls through
                different job portals and displays vacancies spread across sites
                in same page.
              </Text>
              <Box mt="10">
                <a href="/jobs">
                  <Button colorScheme="teal">Start Searching</Button>
                </a>
              </Box>
            </Box>
          </Flex>
          <Box flex="0.5">
            <Image
              src="/images/home-image.png"
              alt="Braket Jobs Home Vector"
              draggable="false"
            />
          </Box>
        </Flex>
        <Box>
          <ContactMe />
          <Box color="white" background="green.500" textAlign="center">
            Special thanks to{" "}
            <a href="https://www.freepik.com/vectors/people">
              People vector created by pch.vector - www.freepik.com
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default dev;
