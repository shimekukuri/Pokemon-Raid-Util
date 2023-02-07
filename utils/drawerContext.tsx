import React, { createContext, ReactNode, useState } from 'react';

interface context {
  dState: boolean;
  setDState: Function;
}

export const drawerContext = createContext(undefined);

export default function DrawerProvider({ children }: { children: ReactNode }) {
  const [dState, setDSTate] = useState(false);
  const value = { dState, setDSTate };

  return (
    <drawerContext.Provider value={value}>{children}</drawerContext.Provider>
  );
}
