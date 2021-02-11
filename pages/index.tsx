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

export async function getServerSideProps({ req }) {
  let protocol = "https:";
  let host = req ? req.headers.host : window.location.hostname;
  if (host.indexOf("localhost") > -1) {
    protocol = "http:";
  }

  const res = await fetch(`${protocol}//${host}/api/listingdata`);
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
