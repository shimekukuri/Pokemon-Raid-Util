import React, { createContext, ReactNode, useState } from 'react';

export default function DrawerProvider({ children }: { children: ReactNode }) {
  const [dState, setDSTate] = useState(false);
  const drawerContext = createContext({});
  const value = { dState, setDSTate };

  return (
    <drawerContext.Provider value={value}>{children}</drawerContext.Provider>
  );
}
