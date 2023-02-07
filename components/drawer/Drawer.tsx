import React, { ReactNode, useEffect, useContext } from 'react';
import { drawerContext } from '@/utils/drawerContext';

interface drawerItems {
  title: string;
  href?: string;
  nextRoute?: string;
}

export default function Drawer({
  children,
  drawerItems,
}: {
  children: ReactNode;
  drawerItems?: drawerItems[];
}) {
  const { dState, setDSTate } = useContext(drawerContext);

  useEffect(() => {
    setDSTate(false);
  }, []);

  return (
    <div className="drawer drawer-end">
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
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          {/* {<!-- Sidebar content here -->} */}
          <button
            className="btn btn-primary"
            onClick={() => setDSTate((prev: boolean) => !prev)}
          >
            Close
          </button>
          {drawerItems
            ? drawerItems.map((x, i) => {
                return (
                  <li key={i}>
                    <a>{x.title}</a>
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
        </ul>
      </div>
    </div>
  );
}
