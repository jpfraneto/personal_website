import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>jorge pablo franetovic stocker</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
