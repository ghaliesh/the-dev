import styled from 'styled-components';

const Input = styled.input`
  width: 60%;
  padding: 10px;
  height: 40px;
  margin-bottom: 10px;
  border: 0 solid #daad86;
  transition: opacity 0.5s ease-in;
  background: ${props =>
    props.background ? props.thme[props.background] : '#daad86'};

  &:focus {
    border: 0.5px solid #daad86;
    background: #fff;
  }
  &:invalid {
    background: red;
  }
  &::placeholder {
    color: #fff;
    font-style: italic;
    font-size: 1rem;
  }
`;

export default Input;
