import React, {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useRef,
} from 'react';

import { useSession } from 'next-auth/react';
import { Session } from 'next-auth';

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

//fix this later
export interface customSession extends Session {
  user?: any;
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
  const { data }: { data: customSession } = useSession();
  console.log('data from websocketContext', data);

  useEffect(() => {
    console.log(ws.current);
    if (!data || connected) return;
    console.log(data);
    ws.current = new WebSocket('ws://localhost:5555');
    let w = ws.current as WebSocket;

    w.onopen = (event) => {
      w.send(
        JSON.stringify({
          event: 'register',
          userID: data.user._id,
          userName: data.user.name,
        })
      );
    };

    w.onclose = (event) => {
      console.log(event);
      w.send(
        JSON.stringify({
          event: 'disconnect',
          userID: data.user._id,
          userName: data.user.name,
        })
      );
      setConnected(false);
    };

    w.onmessage = (event) => {
      let e = JSON.parse(event.data);
      console.log(e.event);

      switch (e.event) {
        case 'register': {
          console.log('register switch');
          break;
        }

        //chat message cases
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

        //find users
        case 'filterMatch': {
        }

        case 'findUser': {
        }
      }
      setConnected(true);
    };
  }, [data, connected]);

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
