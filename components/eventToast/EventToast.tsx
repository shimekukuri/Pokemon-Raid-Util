import React, { useContext } from 'react';
import { webSocketContext } from '@/Context/websocketContext';

const TToast = () => {
  return (
    <div className="fixed right-2 md:right-6 top-16 z-50 w-48 bg-primary-content p-2 rounded-full shadow-2xl text-accent-content flex flex-row">
      <div className="avatar">
        <div className="w-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 bg-secondary">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" />
        </div>
      </div>
      <div className="flex-1 text-primary-focus ml-2 text-center">
        Lobby Found
      </div>
    </div>
  );
};

export default function EventToast() {
  return <div className="fixed right-2 md:right-5 top 16 z-50"></div>;
}
