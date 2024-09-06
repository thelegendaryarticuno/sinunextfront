// src/pages/_app.tsx
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import "../styles/globals.css";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics gaId="GTM-58KNP2JR" />
        <ThemeProvider defaultTheme="dark" attribute="class">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
    </>
  );
}

export default MyApp;
