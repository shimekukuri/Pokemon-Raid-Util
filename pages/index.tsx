import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Card1 from '@/components/card/Card1';
import Layout from '@/components/Layout/Layout';
import Hero from '@/components/hero/Hero';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout>
      <Hero background={'https://images3.alphacoders.com/128/1289473.png'} />
    </Layout>
  );
}
