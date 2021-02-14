import { Box, Text, Flex, Center, Input, Button } from "@chakra-ui/react";

interface ContactMeProps {}

export const ContactMe: React.FC<ContactMeProps> = ({}) => {
  return (
    <Box minH="200px" background="#2B468A" w="100%" pt="5">
      <Center>
        <Text color="white" as="h1" fontSize="2xl" fontWeight="extrabold">
          Weekly updates
        </Text>
      </Center>
      <Flex
        alignItems="center"
        height="100%"
        mt="20px"
        direction={["column", "column", "row"]}
      >
        <Box flex="0.5" px={["5", "5", "7"]}>
          <Text as="h3" fontSize="xl" color="whiteAlpha.800">
            Weekly updates in the form of email newsletter coming soon. I will
            be putting out feature updates ,feature announcements , new
            contributors using the email newsletter.
          </Text>
        </Box>
        <Box
          flex="0.5"
          px={["5", "5", "10"]}
          mt={["5", "5", "0"]}
          mb={["5", "5", "0"]}
        >
          <Input
            placeholder="Email newsletter Coming Soon"
            bgColor="white"
            disabled={true}
            mb="5"
          />
          <Button disabled={true}>Subscribe</Button>
        </Box>
      </Flex>
    </Box>
  );
};
