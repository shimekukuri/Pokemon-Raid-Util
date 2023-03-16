import React, { useContext, useEffect, useReducer, useState } from 'react';
import Chatbox from '../chatbox/Chatbox';
import { drawerContext } from '@/Context/drawerContext';
import { themeContext } from '@/Context/themeContext';
import { userContext } from '@/utilities/userState/UserReducer';
import ChatboxController from '../ChatboxController/ChatboxController';
import Card2 from '../card/Card2';
import {
  webSocketContext,
  socketStateInterface,
  chatInstance,
} from '@/Context/websocketContext';
import Card1 from '../card/Card1';

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
      state = { ...initalState };
      state.menu = action.payload;

      return { ...state };
    }
  }
};

export default function ChatBoxContainer() {
  const { dState, setDSTate } = useContext(drawerContext);
  const { themeState } = useContext(themeContext);
  const { userState, userDispatch } = useContext(userContext);
  const { socketState }: { socketState: socketStateInterface } =
    useContext(webSocketContext);
  const [openChat, setOpenChat] = useState<boolean>(false);
  const [state, dispatch] = useReducer(reducerFunction, initalState as cbstate);
  const [chatStates, setChatStates] = useState([]);

  useEffect(() => {
    if (dState) {
      setOpenChat(false);
    }
  }, [dState, state]);

  useEffect(() => {
    let temp = [];
    for (let instance in socketState.instances) {
      temp.push({
        [instance]: socketState.instances[instance].message,
      });
    }
    setChatStates(temp);
  }, [socketState]);

  return (
    <div
      className={`fixed flex bottom-1 right-1 bg-opacity-0 overflow-x-scroll max-w-full justify-end gap-2${
        dState ? '-z-50' : ''
      }`}
      data-theme={themeState}
    >
      {state.chatbox ? (
        <div
          className="flex items-end overflow-x-scroll max-w-full gap-2 flex-row-reverse"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          <Chatbox user="0" messages={['meep', 'yolo', 'swag']} />
          {chatStates.map((x) => {
            let keys = Object.keys(x)[0];
            console.log(keys);
            console.log(x);
            console.log(x[keys]);

            return (
              <Chatbox key={keys + 'user'} user={keys} messages={x[keys]} />
            );
          })}
        </div>
      ) : (
        ''
      )}

      {state.friends ? (
        <div
          className="flex items-end overflow-x-scroll gap-2 flex-row-reverse max-w-full "
          style={{ scrollSnapType: 'x mandatory' }}
        >
          <div className="snap-end h-full">
            <div className="card w-72 glass h-full">
              <div className="card-body">
                <h2 className="card-title">Search</h2>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                />
                <p>
                  <div></div>
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn now!</button>
                </div>
              </div>
            </div>
          </div>
          {userState.friends.map((x, i) => {
            console.log(x);
            return <Card2 key={x.name} name={x.name} image={x.image} />;
          })}
        </div>
      ) : (
        ''
      )}
      <ChatboxController chatboxDispatch={dispatch} chatboxState={state} />
    </div>
  );
}
