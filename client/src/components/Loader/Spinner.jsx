import styled from 'styled-components';
import { Spin, Text } from '../Animation/Spinner';
import React from 'react';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.info};
`;

const Spinner = styled.div`
  border: 16px solid #5c258c;
  border-top: 16px solid #42f4cb;
  width: 100px;
  animation: ${Spin} 1s linear reverse infinite;
  height: 100px;
  background: #42f4cb;
  border-radius: 100%;
`;

const Loading = styled.h1`
  color: #fff;

  &::after {
    content: '';
    animation: ${Text} 1s linear infinite;
  }
`;

export default () => {
  return (
    <Container>
      <Spinner />
      <Loading>Loading</Loading>
    </Container>
  );
};
