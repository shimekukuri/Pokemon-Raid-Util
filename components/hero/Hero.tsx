import React, { useEffect, useState, useContext } from 'react';
import { Oswald, Source_Serif_Pro } from '@next/font/google';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { userContext } from '@/utilities/userState/UserReducer';

const oswald = Oswald({ weight: '700', subsets: ['latin'] });
const ssp = Source_Serif_Pro({ weight: '400', subsets: ['latin'] });

export default function Hero({ background }: { background?: string }) {
  const [account, setAccount] = useState(true);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/home');
    }
  }, [session]);

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ name, email, password }) => {
    try {
      const meep = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      })
        .then((m) => m.json())
        .then((r) => console.log(r));

      console.log(meep);

      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        console.log(result.error);
        return;
      }
    } catch (err) {
      console.error(err);
    }
  };

  const signInSubmit = async ({ emailLogin, passwordLogin }) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: emailLogin,
        password: passwordLogin,
      });
      if (result.error) {
        console.error(result.error);
      }
    } catch (err) {
      console.error(err);
    }

    if (session) {
      try {
        const preState = await fetch('/api/user/get', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: emailLogin }),
        })
          .then((response) => response.json())
          .then((data) => console.log(data));
      } catch (err) {
        console.error(err);
      }
    }
  };

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
            Welcome, this tool is for Poke Masters one stop shop for everything
            raid related in Pokemon Scarlet and Violet. Get around that pesky
            bad board system and post your own raids in real time with Instant
            Chatting. Create rules for your rooms and boot people when needed.
            Stay safe and make good friends!
          </p>
        </div>
        {account ? (
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-primary"
                  {...register('name', {
                    required: 'Please enter name',
                  })}
                />
                {errors.email && (
                  <div className="text-red-500">{`${errors.email.message}`}</div>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-primary"
                  {...register('email', {
                    required: 'Please enter email',
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                      message: 'Enter valid email address',
                    },
                  })}
                />
                {errors.email && (
                  <div className="text-red-500">{`${errors.email.message}`}</div>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-primary"
                  {...register('password', {
                    required: 'Please enter password',
                    minLength: {
                      value: 6,
                      message: 'password is more than 5 chars',
                    },
                  })}
                />
                {errors.password && (
                  <div className="text-red-500">{`${errors.password.message}`}</div>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="input input-primary"
                  {...register('confirmPassword', {
                    required: 'Please confirm password',
                    validate: (value) => value === getValues('password'),
                    minLength: {
                      value: 6,
                      message: 'password is more than 5 chars',
                    },
                  })}
                />
                {errors.confirmPassword && (
                  <div className="text-red-500">{`${errors.confirmPassword.message}`}</div>
                )}
                {errors.confirmPassword &&
                  errors.confirmPassword.type === 'validate' && (
                    <div className="text-red-500">Passwords do not match</div>
                  )}
                <label className="label">
                  <a onClick={() => setAccount((prev) => !prev)}>
                    Already have an account?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn btn-primary"
                  onClick={handleSubmit(submitHandler)}
                >
                  Create Account
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-primary"
                  {...register('emailLogin', {
                    required: 'Please enter email',
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                      message: 'Enter valid email address',
                    },
                  })}
                />
                {errors.email && (
                  <div className="text-red-500">{`${errors.email.message}`}</div>
                )}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-primary"
                    {...register('passwordLogin', {
                      required: 'Please enter password',
                      minLength: {
                        value: 6,
                        message: 'password is more than 5 chars',
                      },
                    })}
                  />
                  {errors.password && (
                    <div className="text-red-500">{`${errors.password.message}`}</div>
                  )}
                  <label className="label">
                    <a onClick={() => setAccount((prev) => !prev)}>
                      Register A Profile
                    </a>
                  </label>
                </div>
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn btn-primary"
                  onClick={handleSubmit(signInSubmit)}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
