// src/pages/_app.tsx
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics gaId="GTM-58KNP2JR" />
      <ClerkProvider>
        <ThemeProvider defaultTheme="dark" attribute="class">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </ClerkProvider>
    </>
  );
}

export default MyApp;
