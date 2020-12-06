import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import { theme } from '@/settings';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */

  html, body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default App;
