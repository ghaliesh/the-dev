import { combineReducers } from 'redux';
import authReducer from './reducers/auth/auth.reducer';
import profileReducer from './reducers/profile/profile.reducer';
import themeReducer from './reducers/theme/theme.reducer';

export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
  theme: themeReducer
});
