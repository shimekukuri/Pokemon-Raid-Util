import React, {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useRef,
} from 'react';

import { useSession } from 'next-auth/react';

export const webSocketContext = createContext<any>(null);

export interface chatInstance {
  user: {
    message: string[];
  };
}

export interface socketStateInterface {
  instances?: chatInstance | {};
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
    w.onopen = (event) => {};

    w.onmessage = (event) => {
      let e = JSON.parse(event.data);
      switch (e.event) {
        case 'register': {
          w.send(JSON.stringify({ event: 'register', userID: '2341' }));
          break;
        }
        case 'message': {
          let temp = { ...socketState };
          if (!socketState.instances[e.from]) {
            socketState.instances[e.from] = { message: [] };
          }
          temp.instances[e.from].time = Date.now();

          temp.instances[e.from].message = [
            ...temp.instances[e.from].message,
            e.message,
          ];
          setSocketState(temp);
          break;
        }
      }
    };

    return () => w.close();
  }, []);

  const value = {
    socketState,
    ws,
  };

  return (
    <webSocketContext.Provider value={value}>
      {children}
    </webSocketContext.Provider>
  );
}
