import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";
import { JobBox } from "../components/JobBox";
import { __prod__ } from "../utils/constants";
import { sampleData } from "../utils/types";
import { NavBar } from "../components/NavBar";
import { TopGraphicalBox } from "../components/TopGraphicalBox";
import { Footer } from "../components/Footer";

interface homeProps {
  jobs: Array<sampleData>;
}

const Home: FC<homeProps> = ({ jobs }) => {
  return (
    <Box backgroundColor="hsl(180, 52%, 96%)">
      <Box>
        <NavBar />
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
            Today's Top Jobs
          </Text>
        </Box>
        {jobs.map((job) => (
          <JobBox key={job.id} job={job} />
        ))}
      </Box>
      <Footer alter={false} />
    </Box>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    `https://jobs.github.com/positions.json?description=code`
  );
  const jobs: Array<sampleData> = await res.json();

  if (!jobs) {
    return {
      notFound: true,
    };
  }

  return {
    props: { jobs: jobs },
  };
}

export default Home;
