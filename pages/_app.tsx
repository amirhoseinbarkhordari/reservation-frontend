import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from "@mui/material";
import DefaultTheme from "../modules/_app/theme/DefaultTheme";
import "../modules/_app/assets/stylesheet/fonts.css";



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={DefaultTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}


export default MyApp
