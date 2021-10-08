import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from "styled-components";
import {theme} from "../src/settings";

function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
}
export default MyApp
