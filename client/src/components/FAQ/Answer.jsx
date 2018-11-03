import React from 'react';
import Paragraph from './../Common/Paragraph';

const Answer = props => {
  return (
    <div>
      <Paragraph
        style={{
          transition: 'opacity ease-in-out 600ms',
          display: props.display
        }}
      >
        {props.answer}
      </Paragraph>
    </div>
  );
};

export default Answer;
