import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import DrawerProvider from '@/utils/drawerContext';
import ThemeProvider from '@/utils/themeContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <DrawerProvider>
        <Component {...pageProps} />
      </DrawerProvider>
    </ThemeProvider>
  );
}
