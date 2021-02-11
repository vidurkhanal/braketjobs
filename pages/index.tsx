import { Box } from "@chakra-ui/react";
import { FC, useState } from "react";
import { JobBox } from "../components/JobBox";
import { __prod__ } from "../utils/constants";
import { sampleData } from "../utils/types";

interface homeProps {
  jobs: Array<sampleData>;
}

const Home: FC<homeProps> = ({ jobs }) => {
  const [filteredJobs, setFilteredJobs] = useState<sampleData[]>(jobs);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  return (
    <Box backgroundColor="hsl(180, 52%, 96%)">
      <Box
        backgroundImage={[
          "url('./images/bg-header-mobile.svg')",
          "url('./images/bg-header-mobile.svg')",
          "url('./images/bg-header-desktop.svg')",
        ]}
        h="130px"
        backgroundColor="hsl(180, 29%, 50%)"
        mb={20}
        backgroundPosition="center"
        backgroundSize={{ sm: "cover", md: "cover", lg: "contain" }}
      ></Box>
      {filteredJobs.map((job) => (
        <JobBox key={job.id} job={job} />
      ))}
    </Box>
  );
};

export async function getServerSideProps({ req }: any) {
  let protocol = "https:";
  let host = req ? req.headers.host : window.location.hostname;
  if (host.indexOf("localhost") > -1) {
    protocol = "http:";
  }

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
    props: { jobs }, // will be passed to the page component as props
  };
}

export default Home;
