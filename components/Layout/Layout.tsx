import React, { ReactNode, createContext, useState, useContext } from 'react';
import Head from 'next/head';
import { Oswald, Source_Serif_Pro } from '@next/font/google';
import Drawer from '../drawer/Drawer';
import { drawerContext } from '@/utils/drawerContext';

const oswald = Oswald({ weight: '700', subsets: ['latin'] });
const ssp = Source_Serif_Pro({ weight: '400', subsets: ['latin'] });

export default function Layout({ children }: { children: ReactNode }) {
  const { dState, setDSTate } = useContext(drawerContext);
  const drawerItems = [
    {
      title: 'test1',
    },
  ];

  return (
    <>
      <Head>
        <title>Daisy UI Practice</title>
        <meta name="Next and Daisy UI" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Drawer drawerItems={drawerItems}>
        <div className="min-h-screen bg-neutral-content flex justify-between flex-col">
          <header className="h-12 bg-base-300 flex justify-between items-center px-4">
            <div className={`${oswald.className}`}>Daisy UI Example</div>
            <button
              className={`${oswald.className} btn btn-primary`}
              onClick={() => setDSTate((prev: boolean) => !prev)}
            >
              Menu
            </button>
          </header>
          <main className="bg-blue-500">{children}</main>
          <footer className="bg-base-300 h-12 shadow-2xl shadow-secondary">
            f
          </footer>
        </div>
      </Drawer>
    </>
  );
}
