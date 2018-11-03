import styled from 'styled-components';

const TextArea = styled.textarea`
  width: 60%;
  height: 200px;
  padding: 10px;
  margin-bottom: 10px;
  outline: none;
  background: #daad86;
  opacity: 0.9;

  &:focus {
    border: 0.5px solid #daad86;

    background: white;
  }
`;

export default TextArea;
