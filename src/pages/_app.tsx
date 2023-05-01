import React from 'react';
import LoadingOverlay from '@/components/LoadingOverlay';
import { LoadingProvider } from '@/contexts/loadingContext';
import { AppProps } from 'next/app';

import '../styles/globals.css';
import Head from 'next/head';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <LoadingProvider>
        <LoadingOverlay />
        <Component {...pageProps} />
      </LoadingProvider>
    </>
  );
};

export default MyApp;
