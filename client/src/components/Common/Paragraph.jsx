import styled from 'styled-components';

const Paragraph = styled.p`
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  font-size: ${props => props.size};
  word-break: ${props => (props.break ? 'break-all' : 'initial')};
  font-weight: ${props => (props.bold ? 'bolder' : 'initial')};
  color: ${props =>
    props.theme[props.color] ? props.theme[props.color] : props.color};
  opacity: ${props => props.opacity};
`;

export default Paragraph;
