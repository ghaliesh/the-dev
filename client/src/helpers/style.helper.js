const profileItemStyle = {
  gridGap: '30px',
  background: '#fff',
  boxShadow: '2px 6px 5px -1px rgba(0,0,0,0.3)',
  margin: '100px 0',
  border: '1px solid brwon',
  padding: '20px',
  display: 'grid'
};

function displayGrid(columns, gap) {
  return {
    display: 'grid',
    gridTemplateColumns: columns,
    gridGap: gap
  };
}

function toggleList(shown) {
  if (shown) {
    return {
      transform: 'scale(1, 0)',
      transition: '0.2s ease-out',
      transformOrigin: 'top'
    };
  } else {
    return {
      transform: 'scale(1, 1)',
      transition: '0.2s ease-out',
      transformOrigin: 'top'
    };
  }
}
export { profileItemStyle, displayGrid, toggleList };
