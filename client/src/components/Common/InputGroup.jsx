import React from 'react';
import styled from 'styled-components';
import Label from './Label';
import Input from './Input';
import PropType from 'prop-types';
import ErrorMessage from './ErrorMessage';
import TextArea from './TextArea';
import Icon from './Icon';

const InputContainer = styled.div`
  display: grid;
  margin: 50px;
`;

const InputGroup = props => {
  return (
    <InputContainer
      onChange={props.onChange}
      name={props.name}
      value={props.value}
      background={props.background}
      error={props.error}
      type={props.type}
      placeholder={props.placeholder}
    >
      <Label htmlFor={props.name}>{props.label}</Label>
      {props.type === 'textarea' ? (
        <TextArea
          onChange={props.onChange}
          type={props.type}
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
        />
      ) : (
        <div style={{ display: 'flex' }}>
          <Icon
            margin="0px 0px"
            className={props.icon}
            style={{ padding: '10px', background: '#ccc', height: '40px' }}
          />
          <Input
            style={{ flex: '1', padding: '10px' }}
            onChange={props.onChange}
            type={props.type}
            background={props.background}
            name={props.name}
            value={props.value}
            placeholder={props.placeholder}
          />
        </div>
      )}
      {props.error && <ErrorMessage>{props.error}</ErrorMessage>}
    </InputContainer>
  );
};

InputGroup.prototype = {
  onChange: PropType.func.isRequired,
  name: PropType.string.isRequired,
  value: PropType.string.isRequired,
  error: PropType.string.isRequired,
  type: PropType.string.isRequired,
  placeholder: PropType.string
};

export default InputGroup;
