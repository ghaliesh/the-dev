import styled from 'styled-components';
import PropType from 'prop-types';
import React from 'react';

const ATAG = styled.a`
  text-decoration: none;
  font-size: 1.1rem;
  color: ${props =>
    props.theme[props.color] ? props.theme[props.color] : props.color};
`;

ATAG.propTypes = {
  color: PropType.string
};

ATAG.defaultProps = {
  color: '#222'
};

const Anchor = props => {
  return (
    <ATAG target="_blank" color={props.color} href={'https://' + props.link}>
      {props.children}
    </ATAG>
  );
};

export default Anchor;
