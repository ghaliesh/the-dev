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
    return (
      <Div style={displayGrid('1fr', '40px')} padding="100px 0px">
        <React.Fragment>
          <Introduction intro={assignProfile(this.props.profile)} />
          <Projects handle={this.props.profile.githubHandle} />
          <Experiences experience={this.props.profile.experiences} />
          <Education education={this.props.profile.education} />
        </React.Fragment>
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
