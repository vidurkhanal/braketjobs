import { Box, Flex, Text } from "@chakra-ui/react";

interface InputFieldProps {
  jobName: string;
  jobLocation: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  jobName,
  jobLocation,
}) => {
  return (
    <form>
      <Flex
        width={["90vw", "90vw", "60vw"]}
        direction={["column", "column", "row"]}
        height="50px"
      >
        <Flex
          alignItems="center"
          border="1px solid white"
          flex="0.47"
          paddingX="3"
          background="white"
          borderRadius="xl"
          _hover={{ borderColor: "blue.600" }}
          minH="50px"
        >
          <Text fontWeight="bold" paddingRight={3}>
            What
          </Text>
          <input
            placeholder={jobName}
            style={{ backgroundColor: "white", outline: "none", flexGrow: 1 }}
          />
        </Flex>
        <Box flex="0.06" minH="10px"></Box>
        <Flex
          alignItems="center"
          border="1px solid white"
          flex="0.47"
          paddingX="3"
          background="white"
          borderRadius="xl"
          _hover={{ borderColor: "blue.600" }}
          minH="50px"
        >
          <Text fontWeight="bold" paddingRight={3}>
            Where
          </Text>
          <input
            placeholder={jobLocation}
            style={{ backgroundColor: "white", outline: "none", flexGrow: 1 }}
          />
        </Flex>
      </Flex>
      <button type="submit" style={{ display: "none" }}></button>
    </form>
  );
};
