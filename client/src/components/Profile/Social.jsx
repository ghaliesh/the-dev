import React from 'react';
import Icon from './../Common/Icon';
import Anchor from './../Common/Anchor';
import Div from './../Common/Div';
import PropType from 'prop-types';

const Social = props => {
  const { youtube, facebook, github, twitter, insta } = props.link;
  return (
    <Div>
      <Anchor link={youtube} color="light">
        <Icon clickable size="1.3rem" color="red" className="fab fa-youtube" />
      </Anchor>
      <Anchor link={facebook} color="light">
        <Icon
          clickable
          margin="0px 10px"
          size="1.3rem"
          color="light"
          className="fab fa-facebook"
        />
      </Anchor>
      <Anchor link={insta} color="light">
        <Icon
          clickable
          margin="0px 10px"
          size="1.3rem"
          color="info"
          className="fab fa-instagram"
        />
      </Anchor>

      <Anchor link={github} color="light">
        <Icon clickable size="1.3rem" color="light" className="fab fa-github" />
      </Anchor>
      <Anchor link={twitter} color="light">
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

Social.prototype = {
  link: PropType.object
};

Social.defaultProps = {
  link: {
    youtube: '',
    insta: '',
    twitter: '',
    facebook: '',
    github: ''
  }
};
export default Social;
