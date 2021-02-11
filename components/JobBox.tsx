import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { sampleData } from "../utils/types";
import { HighlightedText } from "./HighlightedText";
import moment from "moment";
import { time } from "console";

interface JobBoxProps {
  job: sampleData;
}

export const JobBox: React.FC<JobBoxProps> = ({ job }) => {
  const time_diff = moment(job.created_at).toNow();
  const time_ago = time_diff.slice(3, time_diff.length);
  return (
    <Flex
      mx="auto"
      mb={["20", "20", "20", "5"]}
      backgroundColor="white"
      shadow="md"
      p="4"
      maxW="1200px"
      cursor="pointer"
      alignItems="center"
      justifyContent="space-between"
      flexDirection={["row-reverse", "row-reverse", "row"]}
      // @ts-ignore
      borderLeft={job.featured ? "5px solid hsl(180, 29%, 50%)" : null}
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
            <Text
              color="#5BA4A4"
              fontWeight="700"
              as="a"
              href={job.company_url ? job.company_url : "/"}
              target="_blank"
            >
              {job.company}
            </Text>
            {/* {job.featured && (
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
            )} */}
          </Flex>
          <Text
            fontWeight="700"
            className="font-semibold"
            _hover={{ color: "hsl(180, 29%, 50%)" }}
          >
            {job.title}
          </Text>
          <Text color="gray.500">Job Posted {time_ago} ago.</Text>
        </Box>
        <Box>
          {HighlightedText(job.type)}
          {HighlightedText(job.location)}
        </Box>
      </Flex>
    </Flex>
  );
};
