import Head from "next/head";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <CSSReset />
      <Head>
        <title>Braket Jobs</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="google-site-verification"
          content="m8QG7IOkcY9xWXwH1Un9rUvlTL4XWDNvEVweC-dQcYg"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="robots" content="noindex" />
        <meta
          name="description"
          content="Braket Jobs is a job hunting site made by developers for developers. Currently, it is in developmental stage and new features are being added on a regular basis. The initial intentions for the site was to create a trivago like site for Job hunting. Currently braket Jobs is not acccepting job posting."
        />
        <meta
          property="og:image"
          content="https://braketjobs.vercel.app/images/logo.png"
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
