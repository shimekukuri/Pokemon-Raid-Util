import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import DrawerProvider from '@/Context/drawerContext';
import ThemeProvider from '@/Context/themeContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <DrawerProvider>
        <Component {...pageProps} />
      </DrawerProvider>
    </ThemeProvider>
  );
}
