import { drawerContext } from '@/Context/drawerContext';
import { themeContext } from '@/Context/themeContext';
import React, { useContext, useEffect, useState } from 'react';
import Toast from '../toast/toast';

export default function Chatbox() {
  const { dState, setDSTate } = useContext<any>(drawerContext);
  const { themeState } = useContext(themeContext);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log(themeState);
  }, [isOpen]);

  return (
    <div
      className={`flex md:w-96 md:h-96 rounded-xl relative flex-col bg-base-100 shadow-2xl border-secondary border-2 ${
        isOpen ? '' : 'animate-chat-box-close'
      }`}
      data-theme={themeState}
    >
      {isOpen ? (
        ''
      ) : (
        <div className="flex-1" onClick={() => setIsOpen(true)}>
          <img
            className="animate-opacity-to-one opacity-0 bg-accent rounded-full"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          ></img>
        </div>
      )}
      <div
        className={`border-b border-base-300 flex items-center h-9 bg-base-200 rounded-t-xl gap-2 px-2 w-full shadow-primary ${
          isOpen ? '' : 'hidden'
        }`}
      >
        <button
          className="rounded-full bg-error h-3 w-3"
          onFocus={() => setIsOpen(false)}
        ></button>
        <button
          className="rounded-full bg-accent-focus h-3 w-3"
          onFocus={() => setIsOpen(false)}
        ></button>
        <button
          className="rounded-full bg-accent h-3 w-3"
          onFocus={() => setIsOpen(false)}
        ></button>
      </div>
      <div className={`flex-1 flex-col flex ${isOpen ? '' : 'hidden'}`}>
        <div className="overflow-y-scroll h-44 md:h-72 w-full flex flex-col ">
          <Toast content={`as;dlkfjas;ldkfj asl;kdfj as;lkdfj ;alskjf `} />
          <Toast
            content={`Test 1
          
          Test 2
          `}
          />
          <Toast content=" Nest " />
          <Toast content="asdplfkjasfd jf " />
          <Toast content="asdplfkjasfd jf " />
          <Toast content="asdplfkjasfd jf " />
          <Toast content="asdplfkjasfd jf " />
          <Toast content="asdplfkjasfd jf " />
          <Toast content="asdplfkjasfd jf " />
          <Toast content="asdplfkjasfd jf " />
          <Toast content="asdplfkjasfd jf " />
          <Toast content="asdplfkjasfd jf " />
          <Toast content="asdplfkjasfd jf " />
          <Toast content="asdplfkjasfd jf " />
          <Toast content="asdplfkjasfd jf " />
          <Toast content="asdplfkjasfd jf " />
          <Toast content="asdplfkjasfd jf " />
          <Toast content="asdplfkjasfd jf " />
          <Toast content="asdplfkjasfd jf " />
          <Toast content="asdplfkjasfd jf " />
          <Toast content="asdplfkjasfd jf " />
          <Toast content="asdplfkjasfd jf " />
          <Toast content="asdplfkjasfd jf " />
          <Toast content="asdplfkjasfd jf " />
          <Toast content="asdplfkjasfd jf " />
          <Toast content="asdplfkjasfd jf " />
          <Toast content="asdplfkjasfd jf " />
          <Toast content="asdplfkjasfd jf " />
          <Toast content="asdplfkjasfd jf " />
          <Toast content="asdplfkjasfd jf " />
          <Toast content="asdplfkjasfd jf " />
          <Toast content="asdplfkjasfd jf " />
          <Toast content="asdplfkjasfd jf " />
          <Toast content="asdplfkjasfd jf " />
          <Toast content="asdplfkjasfd jf " />
          <Toast content=" End " />
        </div>
        <div className="flex bg-base-200 rounded-b-xl items-center px-2 py-1 justify-between z-10">
          <textarea
            className="textarea textarea-accent textarea-xs"
            placeholder="Bio"
          ></textarea>
          <button className="btn btn-secondary">Send</button>
        </div>
      </div>
    </div>
  );
}
