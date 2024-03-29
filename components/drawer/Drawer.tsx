import React, { ReactNode, useEffect, useContext } from 'react';
import { drawerContext } from '@/Context/drawerContext';
import { themeContext } from '@/Context/themeContext';
import { useRouter } from 'next/router';
import Link from 'next/link';

export interface drawerItemsInterface {
  title: string;
  route: string;
}

export default function Drawer({
  children,
  drawerItems,
  footer,
}: {
  children: ReactNode;
  drawerItems?: drawerItemsInterface[];
  footer: ReactNode;
}) {
  const { dState, setDSTate } = useContext<any>(drawerContext);
  const { themeState } = useContext(themeContext);
  const router = useRouter();

  useEffect(() => {
    setDSTate(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="drawer drawer-end" data-theme={themeState}>
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={dState}
        readOnly
      />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content z-50">
          {/* {<!-- Sidebar content here -->} */}
          <button
            className="btn btn-primary"
            onClick={() => setDSTate((prev: boolean) => !prev)}
          >
            Close
          </button>
          <li>
            <Link href="/home">Home</Link>
          </li>
          {drawerItems
            ? drawerItems.map(({ title, route }, i) => {
                return (
                  <li key={i}>
                    <Link href={`/${route}`}>{title}</Link>
                  </li>
                );
              })
            : ''}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
          <div className="flex-1 flex justify-end items-center flex-col pb-4">
            {footer}
          </div>
        </ul>
      </div>
    </div>
  );
}
