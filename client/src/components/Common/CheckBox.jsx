import styled from 'styled-components';
import Label from './Label';
import React from 'react';

const CheckBox = styled.input`
  display: none;

  &:not(:checked) + .myspan::before {
    content: '\f0c8';
    font-family: 'Font Awesome 5 Free';
    font-style: normal;
    margin-right: 5px;
    font-variant: normal;
    font-weight: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    width: 1em;
    cursor: pointer;

    display: inline-block;
  }
  &:checked + .myspan::before {
    content: '\f14a';
    color: green;
    margin-right: 5px;
    cursor: pointer;
    font-family: 'Font Awesome 5 Free';
    display: inline-block;

    width: 1em;
  }
`;
const Check = props => {
  return (
    <Label
      value={props.value}
      name={props.name}
      onChange={props.onChange}
      style={{
        display: 'block',
        fontSize: '1rem',
        marginBottom: '30px',
        margin: props.margin
      }}
    >
      <CheckBox
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        type="checkbox"
      />
      <span className="myspan">{props.content}</span>
    </Label>
  );
};

export default Check;
