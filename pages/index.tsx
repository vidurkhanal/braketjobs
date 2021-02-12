import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";
import { GraphicalBox } from "../components/GraphicalBox";
import { JobBox } from "../components/JobBox";
import { __prod__ } from "../utils/constants";
import { sampleData } from "../utils/types";
import moment from "moment";
import { NavBar } from "../components/NavBar";
import { TopGraphicalBox } from "../components/TopGraphicalBox";
import { Footer } from "../components/Footer";

interface homeProps {
  jobs: Array<sampleData>;
}

const Home: FC<homeProps> = ({ jobs }) => {
  return (
    <Box backgroundColor="hsl(180, 52%, 96%)">
      <NavBar />
      <TopGraphicalBox />
      <Box maxW="1200px" mx="auto">
        <Text
          marginBottom={5}
          width="max-content"
          fontFamily="monospace"
          fontWeight="bold"
          fontSize="2xl"
        >
          Today's Top Jobs
        </Text>
      </Box>
      {jobs.map((job) => (
        <JobBox key={job.id} job={job} />
      ))}
      <Footer />
    </Box>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    `https://jobs.github.com/positions.json?page=1&search=code`
  );
  const jobs: Array<sampleData> = await res.json();

  if (!jobs) {
    return {
      notFound: true,
    };
  }

  return {
    props: { jobs },
  };
}

export default Home;
