import React from 'react';
import Div from './../Common/Div';
import Image from './../Common/Image';
import H from './../Common/H';
import Paragraph from './../Common/Paragraph';
import Social from './Social';
import Icon from './../Common/Icon';

const Introduction = props => {
  return (
    <Div center="hor" background="primary" padding="10px">
      <Image circle alt="image" src={props.intro.avatar} />
      <H>{props.intro.name}</H>
      <Paragraph color="light">{props.intro.bio}</Paragraph>
      <Social link={props.intro.social} />
      <Paragraph color="#019934">
        <Icon className="fa fa-check" />
        {props.intro.isWorking ? 'Currently working' : 'Available for work'}
      </Paragraph>
    </Div>
  );
};

export default Introduction;
