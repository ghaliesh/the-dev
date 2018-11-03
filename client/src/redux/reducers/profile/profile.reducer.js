import {
  GET_PROFILE,
  GET_PROFILES_BY_SKILLS,
  CREATE_PROFILE,
  CLEAR_PROFILE,
  GET_PROFILES
} from '../../types';

const initialState = {
  profile: {},
  profiles: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILES:
      return { ...state, profiles: action.payload };
    case GET_PROFILE:
      return { ...state, profile: action.payload };
    case CREATE_PROFILE:
      return { ...state, profile: action.payload };
    case CLEAR_PROFILE:
      return { ...state, profile: {}, profiles: [] };
    case GET_PROFILES_BY_SKILLS:
      return { ...state, profiles: action.payload };
    default:
      return state;
  }
};
