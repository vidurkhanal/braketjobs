import Head from "next/head";
import { background, ChakraProvider, CSSReset } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: any) {
  return (
    <ChakraProvider>
      <CSSReset />
      <Head>
        <title>Braket Jobs</title>
        <meta name="viewport" content="width=device-width ,initial-scale=1" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="robots" content="noindex" />
        <meta
          name="description"
          content="Braket Jobs is a moden and elegant job hunting site made by developers for developers. Currently, it is in developmental stage and new features are being added on a regular basis. The initial intentions for the site was to create a trivago like site for Job hunting. Currentl braket Jobs is not acccepting job posting."
        />
        <link
          rel="shortcut icon"
          href="/images/favicon-32x32.png"
          type="image/x-icon"
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
