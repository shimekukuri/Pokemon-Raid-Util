import React from 'react';

export default function Card2({
  name,
  image,
}: {
  name: string;
  image: number;
}) {
  return (
    <div className="card w-72 glass pt-4">
      <figure>
        <div className="rounded-full bg-accent bg-opacity-50">
          <img
            className="w-56"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${image}.png`}
            alt="car!"
          />
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>How to park your car at your garage?</p>
        <div className="card-actions justify-between">
          <button className="btn btn-primary">Options</button>
          <button className="btn btn-primary">Message</button>
        </div>
      </div>
    </div>
  );
}
