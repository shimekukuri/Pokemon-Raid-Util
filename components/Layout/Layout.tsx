import React, { ReactNode, createContext, useState } from 'react';
import Head from 'next/head';
import { Oswald, Source_Serif_Pro } from '@next/font/google';
import Drawer from '../drawer/Drawer';

const oswald = Oswald({ weight: '700', subsets: ['latin'] });
const ssp = Source_Serif_Pro({ weight: '400', subsets: ['latin'] });

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Daisy UI Practice</title>
        <meta name="Next and Daisy UI" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Drawer drawerState={true}>
        <div className="min-h-screen bg-neutral-content flex justify-between flex-col">
          <header className="h-12 bg-primary flex justify-between items-center px-4">
            <div className={`${oswald.className}`}>Daisy UI Example</div>
            <div>m</div>
          </header>
          <main className="bg-blue-500">{children}</main>
          <footer className="bg-primary h-12 shadow-2xl shadow-secondary">
            f
          </footer>
        </div>
      </Drawer>
    </>
  );
}