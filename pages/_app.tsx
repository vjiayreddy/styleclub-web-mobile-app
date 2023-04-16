import * as React from "react";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { NextRouter, useRouter } from "next/router";
import muiTheme from "../styles/theme/muiTheme";
import createEmotionCache from "../styles/emotions";

/**
 * Components
 */

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  session: any;
}

const clientSideEmotionCache = createEmotionCache();
const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
