import { Inter } from '@next/font/google';
import Layout from '@/components/Layout/Layout';
import Hero from '@/components/hero/Hero';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [loggedIn, setLoggedIn] = useState();

  return (
    <Layout>
      <Hero background={'https://images3.alphacoders.com/128/1289473.png'} />
    </Layout>
  );
}
