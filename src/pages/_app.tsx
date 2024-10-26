import { GoogleAnalytics } from '@next/third-parties/google';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <GoogleAnalytics gaId="GTM-58KNP2JR" />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
