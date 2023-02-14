import React, { useState } from 'react';
import { Oswald, Source_Serif_Pro } from '@next/font/google';
import Link from 'next/link';

const oswald = Oswald({ weight: '700', subsets: ['latin'] });
const ssp = Source_Serif_Pro({ weight: '400', subsets: ['latin'] });

export default function Hero({ background }: { background?: string }) {
  const [account, setAccount] = useState(true);

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
        <div className="text-center lg:text-left bg-primary rounded-lg bg-opacity-90 p-4 shadow-xl lg:p-12">
          <h1 className="text-5xl font-bold">Register!</h1>
          <p>
            This website does not use traditional forms of registration you keep
            your data and profile with you, make sure to save your hash on
            logout!
          </p>
        </div>
        {account ? (
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
                  <a onClick={() => setAccount((prev) => !prev)}>
                    Already have an account?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Create Account</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Key</span>
                </label>
                <textarea
                  className="textarea textarea-primary"
                  placeholder="Key"
                ></textarea>
                <label className="label">
                  <a onClick={() => setAccount((prev) => !prev)}>
                    Register A Profile
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
