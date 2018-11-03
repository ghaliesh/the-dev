import styled from 'styled-components';
const Image = styled.img`
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  border-radius: ${props => (props.circle ? '100%' : null)};
  width: ${props => (props.circle ? '100px' : null)};
`;

export default Image;
