import {
  useEffect,
  useReducer,
  createContext,
  Children,
  ReactNode,
} from 'react';
import Cookies from 'js-cookie';
import { user } from '@/models/User';
import { rejects } from 'assert';
import { create } from 'domain';

export const USER_ACTIONS = {
  SET_DB_STATE: 'SET_DB_STATE',
  UPDATE_FRIENDS: 'UPDATE_FRIENDS',
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
      return {
        ...state,
        friends: [...state.friends, action.payload],
      };
    }
  }
};
const userContext = createContext(null);

export default function UserStateProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [userState, userDispatch] = useReducer(
    reducerFunction,
    defaultState as user
  );

  useEffect(() => {
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
