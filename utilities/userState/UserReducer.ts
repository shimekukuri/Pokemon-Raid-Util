import { useReducer } from 'react';
import Cookies from 'js-cookie';

const ACTIONS = {
  SET_DB_STATE: 'SET_DB_STATE',
  UPDATE_FRIENDS: 'UPDATE_FRIENDS',
};

const defaultState = Cookies.get('userState')
  ? { loggedIn: true, userState: JSON.parse(Cookies.get('userState')) }
  : {
      loggedIn: false,
      userState: {
        name: '',
        rating: 0,
        image: 1,
        banned: false,
        confirmedPokemon: [],
        friends: [],
      },
    };

const reducerFunction = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_DB_STATE: {
      return { loggedIn: true, userState: action.payload };
    }
    case ACTIONS.UPDATE_FRIENDS: {
      return {
        ...state,
        userState: {
          ...state.userState,
          friends: [...state.userState.friends, action.payload],
        },
      };
    }
  }
};
