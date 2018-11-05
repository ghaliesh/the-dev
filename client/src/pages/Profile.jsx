import React, { Component } from 'react';
import Div from './../components/Common/Div';
import Education from './../components/Profile/Education';
import Projects from './../components/Profile/Projects';
import Experiences from './../components/Profile/Experiences';
import { displayGrid } from '../helpers/style.helper';
import { assignProfile } from '../utils/setterHelper';
import { userProfile } from './../redux/reducers/profile/profile.action';
import { connect } from 'react-redux';
import Introduction from '../components/Profile/Introduction';

class Profile extends Component {
  async componentWillMount() {
    await this.props.userProfile(this.props.match.params.handle);
  }
  render() {
    const { githubHandle, experiences, education } = this.props.profile;
    return (
      <Div style={displayGrid('1fr', '40px')} padding="50px 0px">
        <Introduction intro={assignProfile(this.props.profile)} />
        <Div padding="0px 100px" style={displayGrid('1fr', '50px')}>
          <Projects handle={githubHandle} />
          <Experiences experience={experiences} />
          <Education education={education} />
        </Div>
      </Div>
    );
  }
}
const mapStateToProps = state => ({
  profile: state.profile.profile
});

export default connect(
  mapStateToProps,
  { userProfile }
)(Profile);
