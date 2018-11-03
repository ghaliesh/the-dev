import React from 'react';
import H from './../Common/H';
import Icon from './../Common/Icon';

const Question = props => {
  return (
    <H
      onClick={props.onClick}
      padding="20px"
      border="secondary"
      color="primary"
    >
      <Icon className="fas fa-angle-down" clickable margin="0px 10px" />
      {props.content}
    </H>
  );
};

export default Question;
