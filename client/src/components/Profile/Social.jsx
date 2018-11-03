import React from 'react';
import Icon from './../Common/Icon';
import Anchor from './../Common/Anchor';
import Div from './../Common/Div';

const Social = props => {
  return (
    <Div>
      <Anchor link={props.link.youtube} color="light">
        <Icon clickable size="1.3rem" color="red" className="fab fa-youtube" />
      </Anchor>
      <Anchor link={props.link.facebook} color="light">
        <Icon
          clickable
          margin="0px 10px"
          size="1.3rem"
          color="light"
          className="fab fa-facebook"
        />
      </Anchor>
      <Anchor link={props.link.insta} color="light">
        <Icon
          clickable
          margin="0px 10px"
          size="1.3rem"
          color="info"
          className="fab fa-instagram"
        />
      </Anchor>

      <Anchor link={props.link.github} color="light">
        <Icon clickable size="1.3rem" color="light" className="fab fa-github" />
      </Anchor>
      <Anchor link={props.link.twitter} color="light">
        <Icon
          clickable
          margin="0px 10px"
          size="1.3rem"
          color="#639df9"
          className="fab fa-twitter"
        />
      </Anchor>
    </Div>
  );
};
export default Social;
