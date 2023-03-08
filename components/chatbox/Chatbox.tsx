import React, { useState, useContext, useEffect } from 'react';
import { themeContext } from '@/Context/themeContext';
import { webSocketContext } from '@/Context/websocketContext';
import Toast from '../toast/toast';
import { useForm } from 'react-hook-form';

export default function ChatboxController({
  user,
  messages,
}: {
  user: string;
  messages: string[];
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [firstRender, setFirstRender] = useState(false);
  const { themeState } = useContext(themeContext);
  const { ws }: { ws: React.MutableRefObject<any> } =
    useContext(webSocketContext);
  const [localMessages, setLocalMessages] = useState<string>();

  let w: WebSocket = ws.current;

  useEffect(() => {
    setFirstRender(true);
    console.log(user);
  }, []);

  const enterPress = (e: any) => {
    console.log(e.keyCode, e.shiftKey);
    if (e.keyCode === 13 && e.shiftKey === false) {
      w.send(
        JSON.stringify({
          event: 'messageUser',
          sendTo: user,
          message: localMessages,
          from: 'website',
          date: new Date().toLocaleTimeString(),
        })
      );
      setLocalMessages('');
    }
  };

  const closedComponent = () => {
    return (
      <div
        className={`w-12 h-12 bg-accent border-2 border-secondary ${
          !isOpen && firstRender && 'rounded-full'
        }`}
        onClick={() => setIsOpen(true)}
      >
        <img
          className="animate-opacity-to-one opacity-0 bg-accent rounded-full"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        ></img>
      </div>
    );
  };

  const openComponent = () => {
    return (
      <div
        className={`flex md:w-96 md:h-96 rounded-xl relative flex-col bg-base-100 shadow-2xl border-secondary border-2`}
        data-theme={themeState}
      >
        <div
          className={`border-b border-base-300 flex items-center h-9 bg-base-200 rounded-t-xl gap-2 px-2 w-full shadow-primary ${
            isOpen ? '' : 'hidden'
          }`}
        >
          <button
            className="rounded-full bg-error h-3 w-3"
            onClick={() => setIsOpen(false)}
          ></button>
          <button
            className="rounded-full bg-accent-focus h-3 w-3"
            onClick={() => setIsOpen(false)}
          ></button>
          <button
            className="rounded-full bg-accent h-3 w-3"
            onClick={() => setIsOpen(false)}
          ></button>
        </div>
        <div className={`flex-1 flex-col flex ${isOpen ? '' : 'hidden'}`}>
          <div className="overflow-y-scroll h-44 md:h-72 w-full flex flex-col ">
            {messages
              ? messages.map((text, i) => {
                  console.log(messages);
                  return (
                    <Toast content={text} key={text.substring(0, 4) + i} />
                  );
                })
              : ''}
            <Toast content=" End " />
          </div>
          <div className="flex bg-base-200 rounded-b-xl items-center px-2 py-1 gap-1 justify-between z-10">
            <textarea
              className="textarea textarea-accent textarea-xs flex-1 text-base"
              placeholder="Message"
              onKeyDown={enterPress}
              onChange={(e) => setLocalMessages(e.target.value)}
              value={localMessages}
            ></textarea>
            <button className="btn btn-secondary">Send</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      data-theme={themeState}
      className={`${isOpen ? 'rounded-xl' : 'rounded-full'} snap-end`}
    >
      {isOpen ? openComponent() : closedComponent()}
    </div>
  );
}
