export const setAnsStyle = f => {
  return {
    transform: f.showToggle.transform,
    transition: 'transform ease-in-out 350ms',
    transformOrigin: 'top'
  };
};
