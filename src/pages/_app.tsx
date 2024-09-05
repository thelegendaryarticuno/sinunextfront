// src/pages/_app.tsx
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import Head from "next/head";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics gaId="GTM-58KNP2JR" />
      <ThemeProvider defaultTheme="dark" attribute="class">
        <Head>
          <meta httpEquiv="Content-Language" content="en" />
        </Head>
        <Header/>
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
