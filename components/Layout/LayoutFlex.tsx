import React, { ReactNode, useContext } from 'react';
import Head from 'next/head';

import Drawer from '../drawer/Drawer';

import Select from '../select/Select';
import { themeContext } from '@/Context/themeContext';
import { drawerItems } from '@/Context/drawerUtilitys/drawerItems';
import Navbar from '../navbar/Navbar';
import ChatBoxContainer from '../chatboxContainer/ChatboxContainer';
import { useSession } from 'next-auth/react';
import EventToast from '../eventToast/EventToast';

export default function LayoutFlex({ children }: { children: ReactNode }) {
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
        <EventToast />
        <div className="h-screen bg-secondary flex justify-between flex-col min-w-full overflow-x-hidden">
          <Navbar title="POKEMON RAID UTILITY" />
          <main className="flex flex-1 overflow-y-scroll justify-center items-center p-6 flex-col">
            {children}
          </main>
          <footer className="bg-base-300 min-h-16 shadow-2xl shadow-secondary flex justify-center items-center">
            Copyright James Hutchinson 2023
          </footer>
        </div>
      </Drawer>
      <ChatBoxContainer />
    </>
  );
}
