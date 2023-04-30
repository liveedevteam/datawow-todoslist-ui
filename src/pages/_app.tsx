import React from 'react';
import LoadingOverlay from '@/components/LoadingOverlay';
import { LoadingProvider } from '@/contexts/loadingContext';
import { AppProps } from 'next/app';

import '../styles/globals.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <LoadingProvider>
      <LoadingOverlay />
      <Component {...pageProps} />
    </LoadingProvider>
  );
};

export default MyApp;
