import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { JobBox } from "../components/JobBox";
import { sampleData } from "../utils/types";

interface homeProps {
  jobs: Array<sampleData>;
  req?: {
    headers: {
      host: string;
    };
  };
}

const Home: FC<homeProps> = ({ jobs }) => {
  return (
    <Box backgroundColor="hsl(180, 52%, 96%)">
      {jobs.map((job) => (
        <JobBox key={job.id} job={job} />
      ))}
    </Box>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/listingdata`);
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
