import { keyframes } from 'styled-components';

const Spin = keyframes`
  from {
    transform: rotate(0deg);
  }
    to {
    transform: rotate(360deg);
  }
`;

const Text = keyframes`
  25% {
      content: "."
    
  }
    50% {
      content: "..";
  }
  
  75% {
    content: "...";
  }
  
  100% {
    content: "....";

  }
`;

export { Spin, Text };
