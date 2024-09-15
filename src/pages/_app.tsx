import { Provider } from 'react-redux';
import { store, persistor } from '@/components/Redux/store';  // Updated to import persistor
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { GoogleAnalytics } from '@next/third-parties/google';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { PersistGate } from 'redux-persist/integration/react';  // Import PersistGate

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      {/* PersistGate delays rendering until the persisted state has been retrieved */}
      <PersistGate loading={null} persistor={persistor}>
        <GoogleAnalytics gaId="GTM-58KNP2JR" />
        <ThemeProvider defaultTheme="dark" attribute="class">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
