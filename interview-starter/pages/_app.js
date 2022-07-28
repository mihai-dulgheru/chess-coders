import Head from 'next/head';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../css/index.css';
import * as config from '../site.config';

const queryClient = new QueryClient();

const Root = (props) => {
  const { Component, pageProps } = props;
  const { title, stylesheets } = config;

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>{title}</title>
        {stylesheets.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </Head>
      <Component {...pageProps} />
      <Toaster position="top-right" reverseOrder={false} />
    </QueryClientProvider>
  );
};

export default Root;
