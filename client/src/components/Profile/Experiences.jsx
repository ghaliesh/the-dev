import React from 'react';
import { formatDate } from '../../utils/formater';
import Div from './../Common/Div';
import H from './../Common/H';
import Icon from './../Common/Icon';
import Item from './../Common/Item';
import List from './../Common/List';
import Span from './../Common/Span';
const Experiences = props => {
  return (
    <Div>
      <H color="dark" size="1.8rem" margin="10px 0px">
        <Icon className="fa fa-briefcase" />
        Experiences
      </H>
      <List>
        {props.experience.map(e => (
          <Item key={e._id}>
            Worked for <Span color="brown">{e.company}</Span> from{' '}
            <Span color="brown">{formatDate(e.from)}</Span> to{' '}
            <Span color="brown">{formatDate(e.to)}</Span>{' '}
          </Item>
        ))}
      </List>
    </Div>
  );
};

export default Experiences;
