import { Box, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { v4 } from "uuid";
import { Footer } from "../../components/Footer";
import { JobBox } from "../../components/JobBox";
import { NavBar } from "../../components/NavBar";
import { TopGraphicalBox } from "../../components/TopGraphicalBox";
import { sampleData } from "../../utils/types";

const Search: NextPage<{ jobs: sampleData[] }> = ({ jobs }) => {
  return (
    <Box backgroundColor="hsl(180, 52%, 96%)">
      <Box>
        <NavBar linkTo="/jobs" />
        <TopGraphicalBox />
        <Box maxW="1200px" mx="auto">
          <Text
            marginBottom={5}
            width="max-content"
            fontFamily="monospace"
            fontWeight="bold"
            fontSize="2xl"
            paddingLeft={["5", "5", "initial"]}
          >
            We Found These..
          </Text>
        </Box>
        {jobs.map((job) => (
          <JobBox key={v4()} job={job} />
        ))}
      </Box>
      <Footer alter={false} />
    </Box>
  );
};

Search.getInitialProps = async ({ query }) => {
  const res = await fetch(`${process.env.JobSearchUrl}${query.keyword}`);

  const job: sampleData[] = await res.json();

  return {
    jobs: job,
  };
};

export default Search;
