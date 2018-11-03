import React from 'react';
import Icon from './../Common/Icon';
import H from './../Common/H';
import Div from './../Common/Div';

const Education = props => {
  return (
    <Div>
      <H color="dark" size="1.8rem" margin="10px 0px">
        <Icon className="fa fa-graduation-cap" />
        Education
      </H>
      <p>{props.education} </p>
    </Div>
  );
};

export default Education;
