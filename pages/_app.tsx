import '../styles/globals.css';
import '../styles/globalStyles.scss';
import type { AppProps } from "next/app";

import React, { useEffect, useState } from 'react';
import { Layout } from '../components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
