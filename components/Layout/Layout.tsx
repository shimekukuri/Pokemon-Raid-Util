import React, { ReactNode, createContext, useState, useContext } from 'react';
import Head from 'next/head';
import { Oswald, Source_Serif_Pro } from '@next/font/google';
import Drawer from '../drawer/Drawer';
import { drawerContext } from '@/Context/drawerContext';
import Select from '../select/Select';
import { themeContext } from '@/Context/themeContext';
import { drawerItems } from '@/Context/drawerUtilitys/drawerItems';
import Navbar from '../navbar/Navbar';
import Chatbox from '../chatbox/Chatbox';
import ChatBoxContainer from '../chatboxContainer/ChatboxContainer';
import { useSession } from 'next-auth/react';

const oswald = Oswald({ weight: '700', subsets: ['latin'] });
const ssp = Source_Serif_Pro({ weight: '400', subsets: ['latin'] });

export default function Layout({ children }: { children: ReactNode }) {
  const { dState, setDSTate } = useContext(drawerContext);
  const { themes, themeState, setThemeState } = useContext(themeContext);
  const session = useSession();

  const themeStrings = (): string[] => {
    const arr = [];
    for (let theme in themes) {
      arr.push(themes[theme]);
    }
    return arr;
  };
  console.log(session.data?.user.name);

  const drawerFooter = (
    <Select
      title="Themes"
      options={themeStrings()}
      valState={themeState}
      setValState={setThemeState}
    ></Select>
  );

  return (
    <>
      <Head>
        <title>Pokemon Raid Utility</title>
        <meta name="Next and Daisy UI" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Drawer drawerItems={drawerItems} footer={drawerFooter}>
        <div className="min-h-screen bg-secondary flex justify-between flex-col">
          <Navbar title="POKEMON RAID UTILITY" />
          <main className="flex-1 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 2xl:grid-cols-4 mt-4 relative">
            {children}
          </main>
          <footer className="bg-base-300 h-16 shadow-2xl shadow-secondary flex justify-center items-center mt-4">
            Copyright James Hutchinson 2023
          </footer>
        </div>
      </Drawer>
      <ChatBoxContainer />
    </>
  );
}
