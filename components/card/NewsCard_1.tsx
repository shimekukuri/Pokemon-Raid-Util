import React from 'react';

export default function NewsCard_1() {
  return (
    <div className="card card-compact flex-1 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://wallpapers.com/images/featured/qmcgnudvclph45ia.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
