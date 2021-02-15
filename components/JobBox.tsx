import { Box, Flex, Text, Image, Link } from "@chakra-ui/react";
import { sampleData } from "../utils/types";
import { HighlightedText } from "./HighlightedText";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

interface JobBoxProps {
  job: sampleData;
}

export const JobBox: React.FC<JobBoxProps> = ({ job }) => {
  dayjs.extend(relativeTime);
  const time_diff = dayjs(job.created_at).fromNow();

  return (
    <Link href={`/jobs/${job.id}`} style={{ textDecoration: "none" }}>
      <Flex
        mx="auto"
        mb={["10", "10", "10", "5"]}
        backgroundColor="white"
        shadow="md"
        p="4"
        maxW="1200px"
        cursor="pointer"
        alignItems="center"
        justifyContent="space-between"
        flexDirection={["row-reverse", "row-reverse", "row"]}
        // @ts-ignore
        style={{ transition: "1ms ease" }}
      >
        <Image
          src={
            job.company_logo
              ? job.company_logo
              : "https://user-images.githubusercontent.com/2346707/42724442-8fe29d28-87b5-11e8-86fc-189c889c3436.png"
          }
          alt={job.company}
          draggable="false"
          height="20"
          width="20"
          objectFit="contain"
          marginTop={["-50px", "-50px", "-50px", "initial"]}
        />

        <Flex
          width="85%"
          pl="4"
          mr="2"
          alignItems={{ sm: "initial", md: "initial", lg: "center" }}
          justifyContent={{ lg: "space-between" }}
          display={{ lg: "flex", sm: "block", md: "block" }}
        >
          <Box>
            <Flex flexDirection="row">
              <Text color="#5BA4A4" fontWeight="700">
                {job.company}
              </Text>
              {time_diff.includes("a day") || time_diff.includes("hour") ? (
                <Text
                  ml={2}
                  px={2}
                  fontWeight="bold"
                  borderRadius="xl"
                  color="white"
                  backgroundColor="gold"
                  style={{ display: "inline" }}
                  userSelect="none"
                  display="inline"
                >
                  New!
                </Text>
              ) : null}
              {time_diff.includes("minutes") ? (
                <Text
                  ml={2}
                  px={2}
                  fontWeight="bold"
                  borderRadius="xl"
                  color="white"
                  backgroundColor="Black"
                  style={{ display: "inline" }}
                  userSelect="none"
                  display="inline"
                >
                  Hot!
                </Text>
              ) : null}
            </Flex>
            <Text
              fontWeight="700"
              className="font-semibold"
              _hover={{ color: "hsl(180, 29%, 50%)" }}
            >
              {job.title}
            </Text>
            <Text color="gray.500">Job Posted {time_diff} .</Text>
          </Box>
          <Box>
            {HighlightedText(job.type)}
            {HighlightedText(job.location)}
          </Box>
        </Flex>
      </Flex>
    </Link>
  );
};
