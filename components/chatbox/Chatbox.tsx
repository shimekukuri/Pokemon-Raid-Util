import { drawerContext } from '@/utils/drawerContext';
import { themeContext } from '@/utils/themeContext';
import React, { useContext, useEffect, useState } from 'react';
import styles from './chatbox.module.css';

export default function Chatbox() {
  const { dState, setDSTate } = useContext<any>(drawerContext);
  const { themeState } = useContext(themeContext);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <div
      className={`flex w-64 h-64 rounded-xl absolute right-5 bottom-1 flex-col bg-base-100 shadow-2xl border-primary-content ${
        isOpen ? '' : 'animate-chat-box-close'
      }`}
    >
      {isOpen ? (
        ''
      ) : (
        <div className="flex-1" onClick={() => setIsOpen(true)}>
          <img
            className="animate-opacity-to-one opacity-0"
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
        <div className="flex-1">test</div>
        <div className="flex h-12 bg-base-200 rounded-b-xl">test</div>
      </div>
    </div>
  );
}