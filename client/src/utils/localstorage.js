const storageSetItem = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.log('Cannot access localStorage in private mode');
    return undefined;
  }
};

const storageRemoveItem = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log('Cannot access localStorage in private mode');
    return undefined;
  }
};

const storageGetItem = key => {
  try {
    const item = localStorage.getItem(key);
    return item ? item : undefined;
  } catch (error) {
    console.log('Cannot access localStorage in private mode');
    return undefined;
  }
};

const loadState = () => {
  const currentState = storageGetItem('state');
  if (currentState) return JSON.parse(currentState);
  else {
    return {
      profile: { profile: {}, profiles: [], user: {} },
      auth: { user: {}, isAuthenticated: false },
      theme: { currentTheme: {} }
    };
  }
};

const saveState = state => {
  const serializedState = JSON.stringify(state);
  storageSetItem('state', serializedState);
};

export {
  storageGetItem,
  storageSetItem,
  storageRemoveItem,
  saveState,
  loadState
};
