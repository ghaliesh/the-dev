import styled from 'styled-components';

const Span = styled.span`
  font-size: ${props => props.size};
  color: ${props =>
    props.theme[props.color] ? props.theme[props.color] : props.color};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  font-weight: ${props => (props.bold ? 'bold' : '600')};
  cursor: ${props => (props.clickable ? 'pointer' : 'initial')};
  user-select: ${props => (props.clickable ? 'none' : 'initial')};
`;

export default Span;
