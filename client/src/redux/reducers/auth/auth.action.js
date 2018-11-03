import { REGISTER_USER, LOGOUT_USER, LOGIN_USER } from '../../types';
import axios from 'axios';
import { CLEAR_PROFILE } from '../../types';
import { storageSetItem, storageRemoveItem } from '../../../utils/localstorage';

const registerUser = userData => async dispatch => {
  const res = await axios.post('api/users/register', userData);
  storageSetItem('x-token', res.data.token);
  dispatch({ type: REGISTER_USER, payload: res.data });
};

const loginUser = userData => async dispatch => {
  const res = await axios.post('api/users/login', userData);
  storageSetItem('x-token', res.data.token);

  dispatch({ type: LOGIN_USER, payload: res.data });
};

const logOutUser = () => dispatch => {
  storageRemoveItem('x-token');
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT_USER });
};

export default registerUser;
export { logOutUser, loginUser };
