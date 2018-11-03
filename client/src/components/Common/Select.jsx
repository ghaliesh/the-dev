import styled from 'styled-components';
import React from 'react';

const SelectContainer = styled.div`
  position: relative;
  display: block;
  width: 20em;
  height: 3rem;
  line-height: 3;
  background: #2c3e50;
  overflow: hidden;
  border-radius: 0.25em;

  &::after {
    content: '\f0a7';
    justify-content: center;
    font-family: 'Font Awesome 5 Free';
    display: flex;
    align-items: center;
    line-height: 1;

    -webkit-font-smoothing: antialiased;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 0 1em;
    background: #34495e;
    pointer-events: none;
    -webkit-transition: 0.25s all ease;
    -o-transition: 0.25s all ease;
    transition: 0.25s all ease;
  }

  &:hover::after {
    color: #f39c12;
  }
`;

const Select = styled.select`
  width: 100%;
  height: 50px;
  margin: 0;
  padding: 0 0 0 0.5em;
  color: #fff;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background: #2c3e50;
  background-image: none;

  &:disabled {
    opacity: 0.5;
    background: #ccc;
  }
`;

const Option = styled.option`
  background: #222;
  font-size: 20px;
  color: #fff;
`;

const SelectInput = props => {
  return (
    <SelectContainer>
      <Select
        disabled={props.disabled}
        onChange={props.onChange}
        value={props.value}
      >
        {props.options.map(e => (
          <Option key={Math.random()}>{e}</Option>
        ))}
      </Select>
    </SelectContainer>
  );
};

export default SelectInput;
