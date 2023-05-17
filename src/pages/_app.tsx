import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles/index.css';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="TODO DESCRIPTION HERE" />
        <title>TODO TITLE HERE</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout >
    </>
  )
};

export default MyApp;