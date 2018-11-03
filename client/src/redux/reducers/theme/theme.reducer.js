import { SET_THEME, GET_THEME } from '../../types';
const initialState = {
  primary: '#312c32',
  secondary: '#daad86',
  danger: '#EB3E4A',
  info: '#98dafc',
  dark: '#222222',
  light: '#ffffff',
  none: 'none'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, currentTheme: action.payload };
    case GET_THEME:
      return { ...state, currentTheme: action.payload };
    default:
      return state;
  }
};
