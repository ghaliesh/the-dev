import { REGISTER_USER, LOGOUT_USER, LOGIN_USER } from '../../types';
import { stat } from 'fs';

const intitialState = {
  isAuthenticated: false,
  user: {}
};

const authReducer = (state = intitialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, user: action.payload, isAuthenticated: true };
    case LOGIN_USER:
      return { ...stat, user: action.payload, isAuthenticated: true };
    case LOGOUT_USER:
      return { ...state, user: {}, isAuthenticated: false };
    default:
      return state;
  }
};

export default authReducer;
