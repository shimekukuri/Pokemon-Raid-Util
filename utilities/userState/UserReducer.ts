import { useReducer } from 'react';
import Cookies from 'js-cookie';
import { user } from '@/models/User';

export const USER_ACTIONS = {
  SET_DB_STATE: 'SET_DB_STATE',
  UPDATE_FRIENDS: 'UPDATE_FRIENDS',
};

const defaultState: user = Cookies.get('userState')
  ? { loggedIn: true, userState: JSON.parse(Cookies.get('userState')) }
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

export default function UserState() {
  const [userState, userDispatch] = useReducer(
    reducerFunction,
    defaultState as user
  );
}
