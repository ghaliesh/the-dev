import {
  GET_PROFILE,
  CREATE_PROFILE,
  GET_PROFILES,
  GET_PROFILES_BY_SKILLS
} from '../../types';
import axios from 'axios';
import { storageGetItem } from '../../../utils/localstorage';

const getCurrentProfile = () => async dispatch => {
  const header = { 'x-token': storageGetItem('x-token') };
  const res = await axios.get('/api/profiles/getProfile', { headers: header });
  dispatch({ type: GET_PROFILE, payload: res.data });
};

const userProfile = handle => async dispatch => {
  if (handle) {
    const res = await axios.get('/api/profiles/getByhandle/q?handle=' + handle);
    dispatch({
      type: GET_PROFILE,
      payload: { ...res.data.profile, ...res.data.user }
    });
  } else {
    await getCurrentProfile();
  }
};

const getProfiles = () => async dispatch => {
  const res = await axios.get('/api/profiles');
  dispatch({
    type: GET_PROFILES,
    payload: res.data
  });
};

const getProfilesBySkills = (data, mode) => async dispatch => {
  const skillsParams = data.join(',').toLowerCase();
  const res = await axios.get(
    `/api/profiles/getBySkill/q?skill=${skillsParams}&mode=${mode}`
  );
  dispatch({ type: GET_PROFILES_BY_SKILLS, payload: res.data });
};

const createProfile = profile => async dispatch => {
  const header = { 'x-token': storageGetItem('x-token') };
  const res = await axios.post('/api/profiles/add', profile, {
    headers: header
  });
  dispatch({
    type: CREATE_PROFILE,
    payload: { ...res.data.profile, ...res.data.user }
  });
};

export default getCurrentProfile;
export { createProfile, getProfiles, userProfile, getProfilesBySkills };
