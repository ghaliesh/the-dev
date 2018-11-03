import styled from 'styled-components';

const Div = styled.div`
  padding: ${props => props.padding};
  height: ${props => props.height};
  margin: ${props => props.margin};
  position: ${props => props.position};
  display: ${props => props.display};
  background: ${props =>
    props.theme[props.background]
      ? props.theme[props.background]
      : props.background};
  border: ${props => props.border};
  top: ${props => props.top};
  width: ${props => props.width};
  right: ${props => props.right};
  left: ${props => props.left};
  bottom: ${props => props.bottom};
  ${props => flexCenterItems(props.center)};

  @media (max-width: 760px) {
    padding-right: 0px;
    padding-left: 0px;
  }
`;

const flexCenterItems = mode => {
  if (mode === 'ver') {
    return `
      display: flex;
      align-items: center;
    `;
  } else if (mode === 'hor') {
    return `
   text-align: center;
    `;
  } else if (mode === 'center') {
    return `
      display: flex;
      justify-content: center;
      align-items: center;
    `;
  }
};
export default Div;
