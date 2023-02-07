import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Card1 from '@/components/card/Card1';
import { DropDownMenu } from '@/components/dropDown/DropDown';
import Layout from '@/components/Layout/Layout';
import { useContext } from 'react';
import { drawerContext } from '@/utils/drawerContext';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { dState, setDSTate } = useContext(drawerContext);

  const handdleToggleState = () => {
    setDSTate((prev: boolean) => !prev);
  };

  return (
    <Layout>
      <button onClick={handdleToggleState}>Click</button>
      <div>asdfasdkfja</div>
    </Layout>
  );
}
