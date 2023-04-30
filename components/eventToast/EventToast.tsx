import React, { useContext } from 'react';
import { webSocketContext } from '@/Context/websocketContext';
import { socketStateInterface } from '@/Context/websocketContext';

const TToast = (text, key: number) => {
  return (
    <div
      className="z-50 w-48 bg-primary-content p-2 rounded-full shadow-2xl text-accent-content flex flex-row animate-opacity-to-one opacity-0"
      key={'toast' + key}
    >
      <div className="avatar">
        <div className="w-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 bg-secondary">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" />
        </div>
      </div>
      <div className="flex-1 text-primary-focus ml-2 text-center">{}</div>
    </div>
  );
};

export default function EventToast() {
  const { socketState }: { socketState: socketStateInterface } =
    useContext(webSocketContext);

  console.log(socketState.events);

  return (
    <div className="fixed right-2 md:right-5 top-20 z-50">
      <div className="flex flex-col gap-2">
        {socketState.events.map((x, i) => {
          console.log(x.text);
          return <TToast key={i} text={x.text} />;
        })}
      </div>
    </div>
  );
}
