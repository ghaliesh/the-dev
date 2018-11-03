import styled from 'styled-components';
import Div from './Div';
import React from 'react';

const HR = styled.hr`
  display: inline-block;
  width: 20%;

  @media (max-width: 815px) {
    display: none;
  }
`;

const Title = styled.h1`
  margin: 0 20px;
  width: 10;
  display: inline-block;
  font-size: 3.5rem;
  color: ${props =>
    props.theme[props.color] ? props.theme[props.color] : props.color};
`;

const Seperator = props => {
  return (
    <Div
      style={{
        textAlign: 'center'
      }}
    >
      <HR />
      <Title color={props.color}>{props.title}</Title>
      <HR />
    </Div>
  );
};

export default Seperator;
