import React from 'react';
import Div from './../Common/Div';
import H from './../Common/H';
import Image from './../Common/Image';
import Paragraph from './../Common/Paragraph';
import { Link } from 'react-router-dom';
import Icon from './../Common/Icon';
import { profileItemStyle, displayGrid } from '../../helpers/style.helper';

const ProfileItem = props => {
  return (
    <Div style={profileItemStyle}>
      <Div style={displayGrid('0.2fr 2fr 0.2fr')}>
        <Image
          circle
          src={
            props.profile.userInfo
              ? props.profile.userInfo.avatar
              : 'https://via.placeholder.com/100x100'
          }
        />
        <Div margin="5px 10px">
          <H color="dark">
            {props.profile.userInfo ? props.profile.userInfo.name : 'John doe'}
          </H>
          <Paragraph opacity="0.6">@{props.profile.profile.username}</Paragraph>
          <Paragraph color="green">
            <Icon className="fa fa-check" /> Available for work
          </Paragraph>
        </Div>
        <Paragraph color="brown">{props.profile.profile.location}</Paragraph>
      </Div>
      <Div color="dark">{props.profile.profile.bio}</Div>
      <Div>
        {props.profile.profile.skills.map(s => (
          <Div
            background="#ccc"
            display="inline-block"
            padding="10px"
            margin="10px 10px"
            key={props.profile.profile.skills.indexOf(s)}
          >
            {s}
          </Div>
        ))}
      </Div>
      <Link to={`profile/${props.profile.profile.username}`}>
        <Paragraph color="danger">See full details</Paragraph>
      </Link>
    </Div>
  );
};

export default ProfileItem;
