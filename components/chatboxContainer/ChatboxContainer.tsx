import React, { useContext, useEffect, useState } from 'react';
import Chatbox from '../chatbox/Chatbox';
import { drawerContext } from '@/Context/drawerContext';
import ChatboxController from '../ChatboxController/ChatboxController';
import { themeContext } from '@/Context/themeContext';

interface chatboxstate {
  id: number;
  active: boolean;
  messages: string[];
  newMessage: number;
  recent: Date | null;
}

type chatboxActions = {
  update: 'update';
  close: 'close';
};

const reducer = (state: chatboxstate, action: any) => {
  switch (action.type) {
    case 'close': {
      return { ...state, active: false };
    }
    case 'open': {
      return { ...state, active: true };
    }
  }
};

const initialState: chatboxstate[] = [
  {
    id: 0,
    active: false,
    messages: [],
    newMessage: 0,
    recent: null,
  },
];

export default function ChatBoxContainer() {
  const { dState, setDSTate } = useContext(drawerContext);
  const { themeState } = useContext(themeContext);
  const [openChat, setOpenChat] = useState<boolean>(false);

  useEffect(() => {
    if (dState) {
      setOpenChat(false);
    }
  }, [dState]);

  return (
    <div
      className={`fixed flex bottom-1 right-1 bg-opacity-0 overflow-x-scroll max-w-full gap-2 items-end${
        dState ? '-z-50' : ''
      }`}
      data-theme={themeState}
    >
      {openChat ? (
        <div className="flex items-end overflow-x-scroll max-w-full gap-2">
          <Chatbox />
          <Chatbox />
          <Chatbox />
          <Chatbox />
          <Chatbox />
          <Chatbox />
          <Chatbox />
        </div>
      ) : (
        ''
      )}
      <ChatboxController openChat={openChat} setOpenChat={setOpenChat} />
    </div>
  );
}
