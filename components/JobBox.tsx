import { Box, Flex, Text } from "@chakra-ui/react";
import { sampleData } from "../utils/types";
import Image from "next/image";
import { MotionFlex } from "./MotionElems";

interface JobBoxProps {
  job: sampleData;
}

const dotRemover = (word: string) => word.slice(1, word.length);

export const JobBox: React.FC<JobBoxProps> = ({ job }) => {
  return (
    <MotionFlex
      mx="auto"
      my="5"
      backgroundColor="white"
      shadow="md"
      p="4"
      maxW={{ sm: "85%", lg: "1200px" }}
      cursor="pointer"
      alignItems="center"
      whileTap={{ scale: 0.9 }}
    >
      <Box>
        <Image
          src={dotRemover(job.logo)}
          alt={job.company}
          width={100}
          height={100}
          draggable="false"
        />
      </Box>
      <Flex
        ml="4"
        w="100%"
        alignItems={{ sm: "initial", md: "initial", lg: "center" }}
        justifyContent={{ lg: "space-between" }}
        direction={{ sm: "column", md: "column", lg: "row" }}
      >
        <Box>
          <Flex alignItems="center">
            <Text color="#5BA4A4">{job.company}</Text>
            {job.new && (
              <Text
                ml={2}
                px={2}
                fontWeight="bold"
                borderRadius="xl"
                color="white"
                backgroundColor="hsl(180, 29%, 50%)"
                style={{ display: "inline" }}
                userSelect="none"
                display="inline"
              >
                New!
              </Text>
            )}
            {job.featured && (
              <Text
                ml={2}
                px={2}
                fontWeight="bold"
                borderRadius="xl"
                color="white"
                backgroundColor="black"
                style={{ display: "inline" }}
                userSelect="none"
                display="inline"
              >
                Featured
              </Text>
            )}
          </Flex>
          <Text fontWeight="700" className="font-semibold">
            {job.position}
          </Text>
          <Text color="gray.500">
            {job.postedAt} &middot; {job.contract} &middot; {job.location}
          </Text>
        </Box>
        <Box>
          {job.tools.map((tool) => {
            return (
              <Text
                key={tool.length}
                mr={4}
                p={1}
                fontWeight="bold"
                borderRadius="1xl"
                color="hsl(180, 29%, 50%)"
                backgroundColor="hsl(180, 31%, 95%)"
                style={{ display: "inline" }}
                userSelect="none"
              >
                {tool}
              </Text>
            );
          })}
        </Box>
      </Flex>
    </MotionFlex>
  );
};
