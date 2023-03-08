import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import DrawerProvider from '@/Context/drawerContext';
import ThemeProvider from '@/Context/themeContext';
import WebSocketProvider from '@/Context/websocketContext';
import { useRouter } from 'next/router';
import { SessionProvider, useSession } from 'next-auth/react';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider>
        <DrawerProvider>
          <WebSocketProvider>
            {
              //@ts-expect-error
              Component.auth ? (
                <Auth>
                  <Component {...pageProps} />
                </Auth>
              ) : (
                <Component {...pageProps} />
              )
            }
          </WebSocketProvider>
        </DrawerProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}

function Auth({ children }) {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/');
    },
  });
  if (status === 'loading') {
    return <div>Loading ...</div>;
  }
  return children;
}
