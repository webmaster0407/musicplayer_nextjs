import "../styles/globals.css";
import Head from "next/head";
import { Page, PageContent, Sidebar, PageWrapper } from "../containers";
import { useState } from "react";
import { useHomeFetch } from "../useHomeFetch";
import { Navbar } from "../containers/Navbar";

function MyApp({ Component, pageProps }) {
  const [sidebar, setSidebar] = useState(false);
  const { searchTerm, setSearchTerm } = useHomeFetch();

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
        <Navbar toggle={toggleSidebar} setSearchTerm={setSearchTerm} />
        <PageContent searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
          <Component {...pageProps} />
        </PageContent>
      </PageWrapper>
    </Page>
  );
}

export default MyApp;
