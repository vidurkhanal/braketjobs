import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import { JobBox } from "../components/JobBox";
import { __prod__ } from "../utils/constants";
import { sampleData } from "../utils/types";
import { NavBar } from "../components/NavBar";
import { TopGraphicalBox } from "../components/TopGraphicalBox";
import { Footer } from "../components/Footer";
import { v4 } from "uuid";

interface homeProps {
  jobs: Array<sampleData>;
}

const Home: React.FC<homeProps> = ({ jobs }) => {
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  return (
    <Box backgroundColor="hsl(180, 52%, 96%)">
      <Box>
        <NavBar linkTo="/" />
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
            Top Jobs For Today ..
          </Text>
        </Box>
        {filteredJobs.map((job) => (
          <JobBox key={v4()} job={job} />
        ))}
      </Box>
      <Footer alter={false} />
    </Box>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${process.env.HomeFetchUrl}`);
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
