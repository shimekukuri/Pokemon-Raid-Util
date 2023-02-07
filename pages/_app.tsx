import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import DrawerProvider from '@/utils/drawerContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DrawerProvider>
      <Component {...pageProps} />
    </DrawerProvider>
  );
}
