import React, { createContext, ReactNode, useEffect, useState } from 'react';

export const webSocketContext = createContext<any>(null);

export default function WebSocketProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [socketState, setSocketState] = useState();

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:5555');
    ws.onopen = (event) => {
      console.log(event);
    };
  }, []);

  const value = {
    socketState,
    setSocketState,
  };

  return (
    <webSocketContext.Provider value={value}>
      {children}
    </webSocketContext.Provider>
  );
}
