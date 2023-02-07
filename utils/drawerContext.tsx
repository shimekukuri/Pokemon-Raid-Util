import React, { createContext, ReactNode, useState } from 'react';

interface context {
  dState: boolean;
  setDState?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
}

const inital: context = {
  dState: false,
  setDState: undefined,
};

export const drawerContext = createContext(inital);

export default function DrawerProvider({ children }: { children: ReactNode }) {
  const [dState, setDSTate] = useState(false);
  const value = { dState, setDSTate };

  return (
    <drawerContext.Provider value={value}>{children}</drawerContext.Provider>
  );
}
