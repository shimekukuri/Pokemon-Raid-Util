/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Card1({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <div className="card max-h-72 shadow-xl bg-base-100 image-full hover:animate-scale-up">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>Wooo like look at these shoes dude</p>
        <div className="card-actions justify-between items-center">
          <div className="flex flex-row gap-2">
            <div className="badge badge-outline ">Fasion</div>
            <div className="badge badge-outline">Products</div>
          </div>
          <button className="btn btn-primary">Shop Now</button>
        </div>
      </div>
    </div>
  );
}
