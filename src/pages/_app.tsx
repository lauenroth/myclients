import type { AppProps } from 'next/app';
import '../styles/vars.css';
import '../styles/globals.css';
import { MainLayout } from '../components/layout/MainLayout/MainLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout className="relative grid gap-6 px-3 py-6 sm:gap-5 sm:p-5">
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
