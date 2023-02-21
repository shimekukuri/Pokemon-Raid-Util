import React, { useContext } from 'react';
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
};

const reducer = (action, payload) => {};

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

  return (
    <div
      className={`fixed bottom-0 right-0 flex items-end bg-opacity-0 overflow-x-scroll max-w-full gap-2 ${
        dState ? '-z-50' : ''
      }`}
      data-theme={themeState}
    >
      <Chatbox />
      <Chatbox />
      <Chatbox />
      <Chatbox />
      <Chatbox />
      <Chatbox />
      <Chatbox />
      <ChatboxController />
    </div>
  );
}
