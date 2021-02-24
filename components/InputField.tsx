import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";
import { sampleData } from "../utils/types";

interface InputFieldProps {
  jobName: string;
  jobLocation: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  jobName,
  jobLocation,
}) => {
  const [keyword, setKeyword] = useState<string>("");
  const router = useRouter();
  const submitFunction = async (event: any) => {
    event.preventDefault();
    window.location.reload();
    window.location.replace(`/search/${keyword}`);
  };
  return (
    <form onSubmit={submitFunction}>
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
            required={true}
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
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
            disabled={true}
            value="Remote"
          />
        </Flex>
      </Flex>
      <button type="submit" style={{ display: "none" }}></button>
    </form>
  );
};
