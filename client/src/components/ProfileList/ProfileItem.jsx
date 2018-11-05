import React from 'react';
import { Link } from 'react-router-dom';
import { displayGrid, profileItemStyle } from '../../helpers/style.helper';
import Div from './../Common/Div';
import H from './../Common/H';
import Icon from './../Common/Icon';
import Image from './../Common/Image';
import Paragraph from './../Common/Paragraph';

const ProfileItem = props => {
  const { profile, userInfo } = props.profile;
  return (
    <Div style={profileItemStyle}>
      <Div style={displayGrid('0.2fr 2fr 0.2fr')}>
        <Image
          circle
          src={
            userInfo ? userInfo.avatar : 'https://via.placeholder.com/100x100'
          }
        />
        <Div margin="5px 10px">
          <H color="dark">{userInfo ? userInfo.name : 'John doe'}</H>
          <Paragraph opacity="0.6">@{profile.username}</Paragraph>
          <Paragraph color="green">
            <Icon className="fa fa-check" /> Available for work
          </Paragraph>
        </Div>
        <Paragraph color="brown">{profile.location}</Paragraph>
      </Div>
      <Div color="dark">{profile.bio}</Div>
      <Div>
        {profile.skills.map(s => (
          <Div
            background="#ccc"
            display="inline-block"
            padding="10px"
            margin="10px 10px"
            key={profile.skills.indexOf(s)}
          >
            {s}
          </Div>
        ))}
      </Div>
      <Link to={`profile/${profile.username}`}>
        <Paragraph color="danger">See full details</Paragraph>
      </Link>
    </Div>
  );
};

export default ProfileItem;
