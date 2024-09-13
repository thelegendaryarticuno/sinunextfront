import { Provider } from 'react-redux';
import { store } from '@/components/Redux/store';  // Keep store import here
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { GoogleAnalytics } from '@next/third-parties/google';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GoogleAnalytics gaId="GTM-58KNP2JR" />
      <ThemeProvider defaultTheme="dark" attribute="class">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
