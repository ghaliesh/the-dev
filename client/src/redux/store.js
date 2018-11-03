import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './index';
import thunk from 'redux-thunk';
import { loadState, saveState } from '../utils/localstorage';

const middleware = [thunk];
const persistedState = loadState().state;

const store = createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => {
  saveState({
    state: store.getState()
  });
});

export default store;
