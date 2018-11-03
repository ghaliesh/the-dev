import themes from '../../../helpers/themes';
import store from '../../store';

import { SET_THEME, GET_THEME } from '../../types';
const setTheme = id => dispatch => {
  const theme = themes[id];
  dispatch({ type: SET_THEME, payload: theme });
};

const getTheme = () => dispatch => {
  const theme = store.getState().theme.currentTheme;
  dispatch({ type: GET_THEME, payload: theme });
};

export { setTheme, getTheme };
