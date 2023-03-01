import React, { useContext, useEffect, useReducer, useState } from 'react';
import Chatbox from '../chatbox/Chatbox';
import { drawerContext } from '@/Context/drawerContext';
import ChatboxController from '../ChatboxController/ChatboxController';
import { themeContext } from '@/Context/themeContext';
import Card2 from '../card/Card2';

// interface chatboxstate {
//   id: number;
//   active: boolean;
//   messages: string[];
//   newMessage: number;
//   recent: Date | null;
// }

// type chatboxActions = {
//   update: 'update';
//   close: 'close';
// };

// const reducer = (state: chatboxstate, action: any) => {
//   switch (action.type) {
//     case 'close': {
//       return { ...state, active: false };
//     }
//     case 'open': {
//       return { ...state, active: true };
//     }
//   }
// };

// const initialState: chatboxstate[] = [
//   {
//     id: 0,
//     active: false,
//     messages: [],
//     newMessage: 0,
//     recent: null,
//   },
// ];

export interface cbstate {
  menu: boolean;
  chatbox: boolean;
  friends: boolean;
}

export const CHATBOX_REDUCER_ACTIONS = {
  CHATBOXES: 'CHATBOXES',
  FRIENDS: 'FRIENDS',
  OPEN_MENU: 'OPEN_MENU',
};

const initalState = {
  menu: false,
  chatbox: false,
  friends: false,
};

const reducerFunction = (state: cbstate, action): cbstate => {
  switch (action.type) {
    case CHATBOX_REDUCER_ACTIONS.CHATBOXES: {
      state.friends = false;
      state.chatbox = action.payload;
      return { ...state };
    }
    case CHATBOX_REDUCER_ACTIONS.FRIENDS: {
      state.chatbox = false;
      state.menu = true;
      state.friends = action.payload;
      return { ...state };
    }
    case CHATBOX_REDUCER_ACTIONS.OPEN_MENU: {
      console.log(action.payload);
      state = { ...initalState };
      state.menu = action.payload;
      console.log(state);
      return { ...state };
    }
  }
};

export default function ChatBoxContainer() {
  const { dState, setDSTate } = useContext(drawerContext);
  const { themeState } = useContext(themeContext);
  const [openChat, setOpenChat] = useState<boolean>(false);
  const [state, dispatch] = useReducer(reducerFunction, initalState as cbstate);

  useEffect(() => {
    console.log(state);
    if (dState) {
      setOpenChat(false);
    }
  }, [dState, state]);

  return (
    <div
      className={`fixed flex bottom-1 right-1 bg-opacity-0 overflow-x-scroll max-w-full gap-2${
        dState ? '-z-50' : ''
      }`}
      data-theme={themeState}
    >
      {state.chatbox ? (
        <div className="flex items-end overflow-x-scroll max-w-full gap-2 flex-row-reverse">
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
      {state.friends ? (
        <div className="flex items-end overflow-x-scroll max-w-full gap-2 flex-row-reverse">
          {[...Array(10)].map((x, i) => {
            return (
              <div key={`test${i}`} className={``}>
                <Card2 />
              </div>
            );
          })}
        </div>
      ) : (
        ''
      )}
      <ChatboxController chatboxDispatch={dispatch} chatboxState={state} />
    </div>
  );
}
