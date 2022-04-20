import { Global } from '@emotion/react';
import { globalStyle } from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
