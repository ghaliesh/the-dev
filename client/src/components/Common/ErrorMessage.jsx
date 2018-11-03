import styled from 'styled-components';

const ErrorMessage = styled.p`
  font-size: 0.8rem;
  font-weight: 900;
  color: ${props => props.theme.danger};
  padding: 5px;
`

export default ErrorMessage;