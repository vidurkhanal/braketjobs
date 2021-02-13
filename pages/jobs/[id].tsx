import { Box, Flex, Button, Text, Image, Link } from "@chakra-ui/react";
import { sampleData } from "../../utils/types";
import { NavBar } from "../../components/NavBar";
import { TopGraphicalBox } from "../../components/TopGraphicalBox";
import Head from "next/head";
import { anchorExtractor } from "../../utils/anchorExtractor";
import { Footer } from "../../components/Footer";
import { NextPage } from "next";

const IndividualJob: NextPage<{ id: string; job: sampleData }> = ({
  id,
  job,
}) => {
  return (
    <Box backgroundColor="hsl(180, 52%, 96%)">
      <Head>
        <title>
          {job.title} for {job.company}
        </title>
        <meta
          name="description"
          content={`${job.title} needed at ${job.company} . ${job.description}`}
        />
      </Head>
      <NavBar />
      <TopGraphicalBox />
      <Flex paddingX="20">
        <Box
          paddingX="20"
          paddingY="5"
          background="white"
          shadow="xl"
          flex="0.6"
        >
          <Text
            as="h1"
            fontSize="5xl"
            fontWeight="bold"
            color="hsl(180, 29%, 50%)"
          >
            {job.title}
          </Text>
          <Box dangerouslySetInnerHTML={{ __html: job.description }} />
        </Box>
        <Box flex="0.3" paddingX="20">
          <Flex
            background="white"
            width="100%"
            height="max-content"
            padding="8"
            shadow="lg"
            direction="column"
          >
            <Image
              src={
                job.company_logo
                  ? job.company_logo
                  : "https://user-images.githubusercontent.com/2346707/42724442-8fe29d28-87b5-11e8-86fc-189c889c3436.png"
              }
              mb="8"
            />
            <Box>
              <Button colorScheme="linkedin" marginRight="8">
                <Link
                  href={
                    job.company_url
                      ? job.company_url
                      : `/redirect/to/${job.company_url}`
                  }
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  Visit Us
                </Link>
              </Button>

              <Button colorScheme="orange">
                <Link
                  href={anchorExtractor(job.how_to_apply)}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  Apply Now
                </Link>
              </Button>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
};

IndividualJob.getInitialProps = async ({ query }) => {
  const res = await fetch(`https://jobs.github.com/positions/${query.id}.json`);

  const job: sampleData = await res.json();
  return {
    id: query.id as string,
    job: job,
  };
};

export default IndividualJob;
