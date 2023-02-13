import React, { CSSProperties } from 'react';
import { Oswald, Source_Serif_Pro } from '@next/font/google';

const oswald = Oswald({ weight: '700', subsets: ['latin'] });
const ssp = Source_Serif_Pro({ weight: '400', subsets: ['latin'] });

export default function Hero({ background }: { background?: string }) {
  return (
    <div
      className="hero min-h-screen bg-base-200 col-span-4 rounded-2xl"
      style={
        background
          ? { backgroundImage: `url(${background})` }
          : { backgroundImage: '' }
      }
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left bg-accent rounded-lg bg-opacity-95 p-4">
          <h1 className="text-5xl font-bold">Register!</h1>
          <p className={`py-6`}>
            This website does not use traditional forms of registration, and
            also does not save any of your data to a database! You can keep your
            data and profile with you, but you are also responsible for not
            losing it :) Upon logout you will be provided with a hash, I
            recomend saving it to your computer or phone, so log in simply copy
            and paste it into the login form and you are ready to go!
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Screen Name</span>
              </label>
              <input
                type="text"
                placeholder="Screen Name"
                className="input input-primary"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Bio</span>
              </label>
              <textarea
                className="textarea textarea-primary"
                placeholder="Bio"
              ></textarea>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Already have an Account?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
