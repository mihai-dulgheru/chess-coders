import Head from 'next/head';
import React from 'react';
import '../css/index.css';
import * as config from '../site.config';

const Root = (props) => {
  const { Component, pageProps } = props;
  const { title, stylesheets } = config;

  return (
    <>
      <Head>
        <title>{title}</title>
        {stylesheets.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
        {/* <script src="https://cdn.tailwindcss.com"></script> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default Root;
