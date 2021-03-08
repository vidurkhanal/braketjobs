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
        <Box zIndex="1" position="sticky" top="0">
          <TopGraphicalBox />
        </Box>
        <Box maxW="1200px" mx="auto">
          <Text
            marginBottom={5}
            width="max-content"
            fontFamily="heading"
            fontWeight="bold"
            fontSize="2xl"
            color="linkedin.600"
            paddingLeft={["5", "5", "initial"]}
          >
            Top Jobs For Today ..
          </Text>
        </Box>
        <Box minH={"100vh"}>
          {filteredJobs.map((job) => (
            <JobBox key={v4()} job={job} />
          ))}
        </Box>
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
