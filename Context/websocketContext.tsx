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
  filterEvent: [
    {
      date: string;
      subject: string;
      image: string;
    }
  ];
}

export interface socketStateInterface {
  instances?: chatInstance | {};
}

export default function WebSocketProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [reset, setReset] = useState<boolean>(false);
  const [connected, setConnected] = useState<boolean>();
  const [socketState, setSocketState] = useState<socketStateInterface>({
    instances: {},
  });
  const ws = useRef(null);
  const { data: session } = useSession();

  useEffect(() => {
    console.log(ws.current);
    if (!session || connected) return;
    ws.current = new WebSocket('ws://localhost:5555');
    let w = ws.current as WebSocket;
    w.onopen = (event) => {
      w.send(JSON.stringify({ event: 'register', userID: session.user._id }));
    };

    w.onclose = (event) => {};

    w.onmessage = (event) => {
      let e = JSON.parse(event.data);
      console.log(e.event);
      switch (e.event) {
        case 'register': {
          console.log('register switch');
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
          console.log(temp);
          setSocketState(temp);
          break;
        }

        case 'filterMatch': {
        }
      }
      setConnected(true);
    };
  }, [session]);

  const value = {
    socketState,
    ws,
    setConnected,
  };

  return (
    <webSocketContext.Provider value={value}>
      {children}
    </webSocketContext.Provider>
  );
}
