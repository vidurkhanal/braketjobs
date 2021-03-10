import { Box, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { v4 } from "uuid";
import { Footer } from "../../components/Footer";
import { JobBox } from "../../components/JobBox";
import { NavBar } from "../../components/NavBar";
import { TopGraphicalBox } from "../../components/TopGraphicalBox";
import { sampleData } from "../../utils/types";
import { useRouter } from "next/router";
import { StickyBox } from "../../components/StickyBox";

const Search: NextPage<{ jobs: sampleData[] }> = ({ jobs }) => {
  const router = useRouter();
  return (
    <Box backgroundColor="hsl(180, 52%, 96%)">
      <Box>
        <NavBar linkTo="/jobs" />
        <StickyBox>
          <TopGraphicalBox />
        </StickyBox>
        <Box maxW="1200px" mx="auto">
          <Text
            marginBottom={5}
            width="max-content"
            fontFamily="mono"
            fontWeight="bold"
            fontSize="2xl"
            paddingLeft={["5", "5", "initial"]}
            color="linkedin.600"
          >
            Jobs for{" "}
            <Text display="inline" fontStyle="italic">
              {" "}
              {router.query.title}
            </Text>
          </Text>
        </Box>
        <Box minH="50vh">
          {jobs.map((job) => (
            <JobBox key={v4()} job={job} />
          ))}
        </Box>
      </Box>
      <Footer alter={false} />
    </Box>
  );
};

Search.getInitialProps = async ({ query }) => {
  const [keyword, location] = [query.title, query.location];
  const res = await fetch(`${process.env.JobSearchUrl}${keyword}`);

  const job: sampleData[] = await res.json();

  return {
    jobs: job,
  };
};

export default Search;
