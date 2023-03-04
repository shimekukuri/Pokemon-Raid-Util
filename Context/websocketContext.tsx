import React, {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useRef,
} from 'react';

import { useSession } from 'next-auth/react';

export const webSocketContext = createContext<any>(null);

export interface socketStateInterface {
  instances: {};
}

export default function WebSocketProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [socketState, setSocketState] = useState<socketStateInterface>({
    instances: {},
  });
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:5555');
    let w = ws.current as WebSocket;
    w.onopen = (event) => {
      console.log(event);
    };

    w.onmessage = (event) => {
      let e = JSON.parse(event.data);
      switch (e.event) {
        case 'register': {
          w.send(JSON.stringify({ event: 'register', userID: '2341' }));
          break;
        }
        case 'message': {
          console.log(e);
          console.log(e.message);
          setSocketState({
            ...socketState,
            instances: { ...socketState.instances },
          });
          break;
        }
      }
    };

    return () => w.close();
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
