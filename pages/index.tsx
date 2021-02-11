import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { JobBox } from "../components/JobBox";
import { __prod__ } from "../utils/constants";
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
      <Box
        backgroundImage={{
          sm: "url('./images/bg-header-mobile.svg')",
          lg: "url('./images/bg-header-desktop.svg')",
        }}
        h="15vh"
        backgroundSize={{ sm: "cover", lg: "contain" }}
      />
      {jobs.map((job) => (
        <JobBox key={job.id} job={job} />
      ))}
    </Box>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    __prod__
      ? `https://cors-anywhere.herokuapp.com/https://braketjobs.vercel.app/api/listingdata`
      : `http://localhost:3000/api/listingdata`
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
