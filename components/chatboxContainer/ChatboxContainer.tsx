import React from 'react';
import Chatbox from '../chatbox/Chatbox';

export default function ChatBoxContainer() {
  return (
    <div className="absolute bottom-0 right-0 flex justify-end items-end">
      <div className="flex-1"></div>
      <Chatbox />
      <Chatbox />
      <Chatbox />
      <Chatbox />
      <Chatbox />
      <Chatbox />
    </div>
  );
}
