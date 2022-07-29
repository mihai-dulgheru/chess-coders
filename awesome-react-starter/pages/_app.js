import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from '../components';
import '../css/index.css';

const Root = (props) => {
  const { Component, pageProps } = props;
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <script src="https://kit.fontawesome.com/660b10a72b.js" crossOrigin="anonymous"></script>
      </Head>
      <Component {...pageProps} />
      <Toaster />
    </QueryClientProvider>
  );
};

export default Root;
