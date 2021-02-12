import { Box, Text } from "@chakra-ui/react";
import Head from "next/head";
import { Image } from "@chakra-ui/react";

interface NewProps {}

const New: React.FC<NewProps> = ({}) => {
  return (
    <Box h="100vh" w="100vw" display="grid" placeItems="center">
      <Head>
        <title>Job Posting Available Soon!!</title>
      </Head>
      <a href="/">
        <Image
          src="/images/comingsoon.png"
          height="100%"
          width="300px"
          objectFit="contain"
          draggable={false}
        />
      </a>
    </Box>
  );
};

export default New;
