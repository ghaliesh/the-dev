import React from 'react';
import Div from './../Common/Div';
import Image from './../Common/Image';
import H from './../Common/H';
import Paragraph from './../Common/Paragraph';
import Social from './Social';
import Icon from './../Common/Icon';

const Introduction = props => {
  const { avatar, name, social, isWorking, bio } = props.intro;
  return (
    <Div center="hor" background="primary" padding="10px">
      <Image circle alt="image" src={avatar} />
      <H>{name}</H>
      <Paragraph color="light">{bio}</Paragraph>
      <Social link={social} />
      <Paragraph color="#019934">
        <Icon className="fa fa-check" />
        {isWorking ? 'Currently working' : 'Available for work'}
      </Paragraph>
    </Div>
  );
};

export default Introduction;
