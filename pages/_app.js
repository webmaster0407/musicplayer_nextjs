import "../styles/globals.css";
import Head from "next/head";
import { Page, PageContent, Sidebar, PageWrapper } from "../containers";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <Page>
      <Head>
        <title>DEQUENCY</title>
        <meta name="description" content="DEQUENCY_test by next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageWrapper>
        <Sidebar open={sidebar} toggle={toggleSidebar} />
        <PageContent toggle={toggleSidebar}>
          <Component {...pageProps} />
        </PageContent>
      </PageWrapper>
    </Page>
  );
}

export default MyApp;
