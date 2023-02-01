/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Card1() {
  return (
    <div className="card w-96 shadow-xl bg-base-100 image-full hover:animate-scale-up">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
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
