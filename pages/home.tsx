import Layout from '@/components/Layout/Layout';
import React from 'react';
import NewsCard_1 from '@/components/card/NewsCard_1';

export default function Home() {
  return (
    <Layout>
      <div className="flex justify-center items-center">
        <div className="card card-compact w-full bg-base-100 shadow-xl">
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
        {/* <img
          src="https://wallpapers.com/images/featured/qmcgnudvclph45ia.jpg"
          alt="home"
        ></img> */}
      </div>
      <div className="col-span-2 w-full p-4">
        <NewsCard_1 />
      </div>
      <div className="p-4">
        <div className="card card-compact w-full bg-base-100 shadow-xl flex justify-center">
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
        {/* <img
          src="https://wallpapers.com/images/featured/qmcgnudvclph45ia.jpg"
          alt="home"
        ></img> */}
      </div>
      <div className="col-span-2 p-4">
        <NewsCard_1 />
      </div>
    </Layout>
  );
}

Home.auth = true;
