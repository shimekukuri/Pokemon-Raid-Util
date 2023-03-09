import { drawerContext } from '@/Context/drawerContext';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { signOut, useSession } from 'next-auth/react';

export default function Navbar({ title }: { title: string }) {
  const { dState, setDSTate } = useContext(drawerContext);
  const router = useRouter();
  const session = useSession();

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a
          className="btn btn-ghost normal-case text-xl"
          onClick={() => router.push('/home')}
        >
          {title}
        </a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full bg-accent">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a
                className="justify-between"
                onClick={() =>
                  router.push(`/profile/${session.data.user.name}`)
                }
              >
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li onClick={() => signOut()}>
              <a>Logout</a>
            </li>
          </ul>
        </div>
        <button
          className="btn btn-square btn-ghost"
          onClick={() => setDSTate((prev: boolean) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

{
  /* <div className="flex-none">
        <button
          className="btn btn-square btn-ghost"
          onClick={() => setDSTate((prev: boolean) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div> */
}
