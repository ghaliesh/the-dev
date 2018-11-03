import React from 'react';
import Div from './../Common/Div';
import Image from './../Common/Image';
import H from './../Common/H';
import Paragraph from './../Common/Paragraph';
import Span from './../Common/Span';
import Social from './Social';
import Icon from './../Common/Icon';

const Introduction = props => {
  return (
    <Div center="hor" background="#0d2e63" padding="10px">
      <Image circle alt="image" src="https://via.placeholder.com/100x100" />
      <H>
        name -{' '}
        <Span color="danger" size="1rem">
          {props.intro.location}
        </Span>
      </H>
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
