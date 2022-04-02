import "../styles/globals.css";
import Head from "next/head";
import { Page, PageContent, Sidebar, PageWrapper } from "../containers";

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Head>
        <title>DEQUENCY</title>
        <meta name="description" content="DEQUENCY_test by next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageWrapper>
        <Sidebar />
        <PageContent>
          <Component {...pageProps} />
        </PageContent>
      </PageWrapper>
    </Page>
  );
}

export default MyApp;
