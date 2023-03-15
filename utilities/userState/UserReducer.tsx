import { useEffect, useReducer, createContext, ReactNode } from 'react';
import { useSession } from 'next-auth/react';
import Cookies from 'js-cookie';
import { user } from '@/models/User';

export const USER_ACTIONS = {
  SET_DB_STATE: 'SET_DB_STATE',
  UPDATE_FRIENDS: 'UPDATE_FRIENDS',
  SET_DEFAULT_STATE: 'SET_DEFAULT_STATE',
};

const checkedLoggedIn = (user: user): boolean => {
  if (
    user.name === '' ||
    user.password === '' ||
    user.email === '' ||
    user.rating === 0 ||
    user.banned === true
  ) {
    return false;
  }

  return true;
};

const defaultState: user = Cookies.get('userState')
  ? JSON.parse(Cookies.get('userState'))
  : {
      name: '',
      password: '',
      email: '',
      image: 1,
      rating: 0,
      banned: false,
      confirmedPokemon: [],
      bio: '',
      friends: [],
      posts: [],
    };

const reducerFunction = (state: user, action): user => {
  switch (action.type) {
    case USER_ACTIONS.UPDATE_FRIENDS: {
      if (state.friends.includes(action.payload)) {
        return state;
      }

      fetch('/api/user/updateUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'UPDATE_FRIENDS',
          payload: {
            sender: state.email,
            add: action.payload.name,
          },
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.error(err));

      return {
        ...state,
        friends: [...state.friends, action.payload],
      };
    }
    case USER_ACTIONS.SET_DB_STATE: {
      return {
        name: action.payload.name,
        password: '',
        email: action.payload.email,
        image: action.payload.image,
        rating: action.payload.rating,
        banned: action.payload.banned,
        confirmedPokemon: action.payload.confirmedPokemon,
        bio: action.payload.bio,
        friends: action.payload.friends,
        posts: action.payload.posts,
      };
    }
    case USER_ACTIONS.SET_DEFAULT_STATE: {
      return {
        name: '',
        password: '',
        email: '',
        image: 1,
        rating: 0,
        banned: false,
        confirmedPokemon: [],
        bio: '',
        friends: [],
        posts: [],
      };
    }
  }
};
export const userContext = createContext(null);

export default function UserStateProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { data: session, status } = useSession();
  const [userState, userDispatch] = useReducer(
    reducerFunction,
    defaultState as user
  );

  useEffect(() => {
    console.log(session);
    if (status === 'authenticated') {
      fetch('/api/user/get', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: session.user.email }),
      })
        .then((response) => response.json())
        .then((r) => {
          const data = r.user;
          userDispatch({
            type: USER_ACTIONS.SET_DB_STATE,
            payload: {
              name: data.name,
              password: '',
              email: data.email,
              image: data.image,
              rating: data.rating,
              banned: data.banned,
              confirmedPokemon: data.confirmedPokemon,
              bio: data.bio,
              friends: data.friends,
              posts: data.posts,
            },
          });
        });
    }
    if (status === 'unauthenticated') {
      userDispatch({ type: USER_ACTIONS.SET_DEFAULT_STATE, payload: {} });
    }
  }, [status, session]);

  useEffect(() => {
    console.log(userState);
    console.log(!checkedLoggedIn(userState));
    if (!checkedLoggedIn(userState)) {
      return;
    }
    fetch('/api/user/updateUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userState),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Server error status code: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((err) => console.error(err));

    return () => {
      null;
    };
  }, [userState]);

  const value = {
    userState,
    userDispatch,
  };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
}
