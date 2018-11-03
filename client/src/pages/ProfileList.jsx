import React, { Component } from 'react';
import Div from './../components/Common/Div';
import { connect } from 'react-redux';
import { getProfiles } from '../redux/reducers/profile/profile.action';
import ProfileItem from './../components/ProfileList/ProfileItem';
import PropType from 'prop-types';

class ProfileList extends Component {
  async componentWillMount() {
    await this.props.getProfiles();
  }
  render() {
    return (
      <Div padding="100px 100px">
        {this.props.profiles.map(profile => (
          <ProfileItem
            key={this.props.profiles.indexOf(profile)}
            profile={profile}
          />
        ))}
      </Div>
    );
  }
}

ProfileList.propTypes = {
  profiles: PropType.array
};

ProfileList.defaultProps = {
  profiles: []
};

const mapStatetoProps = state => ({
  profiles: state.profile.profiles
});

export default connect(
  mapStatetoProps,
  { getProfiles }
)(ProfileList);
