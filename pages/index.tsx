import { FC } from "react";
import Head from "next/head";
import { sampleData } from "../utils/types";
import { useRouter } from "next/router";

interface homeProps {
  jobs: sampleData;
  req?: {
    headers: {
      host: string;
    };
  };
}

const Home: FC<homeProps> = ({ jobs }) => {
  const router = useRouter();
  console.log(router.basePath);

  return (
    <div>
      <Head>
        <title>Braket Jobs</title>
        <link
          rel="shortcut icon"
          href="/images/favicon-32x32.png"
          type="image/x-icon"
        />
      </Head>
    </div>
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
