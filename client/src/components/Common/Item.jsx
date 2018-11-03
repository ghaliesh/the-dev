import styled from 'styled-components';

const Item = styled.li`
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  font-size: ${props => props.size};
  color: ${props =>
    props.theme[props.color] ? props.theme[props.color] : props.color};
`;

export default Item;
