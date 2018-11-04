import React, { Component } from 'react';
import InputGroup from '../components/Common/InputGroup';
import Button from '../components/Common/Button';
import Div from '../components/Common/Div';
import Seperator from '../components/Common/Seperator';
import { connect } from 'react-redux';
import { assignState } from '../utils/setterHelper';
import { createProfile } from '../redux/reducers/profile/profile.action';
import { Link } from 'react-router-dom';
import Redirect from 'react-router-dom/Redirect';
import Check from './../components/Common/CheckBox';

class ProfileForm extends Component {
  state = {
    redirect: false,
    username: '',
    company: '',
    website: '',
    skills: '',
    location: '',
    githubHandle: '',
    youtube: '',
    facebook: '',
    linkedIn: '',
    insta: '',
    twitter: '',
    bio: '',
    education: '',
    // Experience
    from: '',
    to: '',
    companyLocation: '',
    companyName: '',
    title: '',
    isWorking: false,
    error: {}
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/profile" />;
    }
    return (
      <Div padding="100px 100px">
        <form onSubmit={this.handleSubmit}>
          <Seperator color="primary" title="Create profile" />
          <InputGroup
            icon="fa fa-at"
            label="Enter your username"
            onChange={this.handleChange}
            type="text"
            name="username"
            value={this.state.username}
          />
          <InputGroup
            icon="fa fa-building"
            label="Enter your company"
            onChange={this.handleChange}
            type="text"
            name="company"
            value={this.state.company}
          />
          <InputGroup
            icon="fa fa-link"
            label="Enter your website"
            onChange={this.handleChange}
            type="text"
            name="website"
            value={this.state.website}
          />

          <InputGroup
            icon="fa fa-compass"
            label="Enter your location"
            onChange={this.handleChange}
            type="text"
            name="location"
            value={this.state.location}
          />
          <Seperator title="C.V" color="#1fb738" />

          <InputGroup
            icon="fa fa-file"
            label="Enter your skills"
            onChange={this.handleChange}
            type="text"
            name="skills"
            value={this.state.skills}
            placeholder="should be seperated with commas for example html, css, js ..etc"
          />

          <InputGroup
            icon="fa fa-graduation-cap"
            label="Enter your education"
            onChange={this.handleChange}
            type="text"
            name="education"
            value={this.state.education}
          />

          <Seperator color="dark" title="Experience" />
          <InputGroup
            icon="fa fa-user-tie"
            label="Title"
            onChange={this.handleChange}
            type="text"
            name="title"
            value={this.state.title}
          />
          <InputGroup
            icon="fa fa-building"
            label="Company name"
            onChange={this.handleChange}
            type="text"
            name="companyName"
            value={this.state.companyName}
          />
          <InputGroup
            icon="fa fa-clock"
            label="From"
            onChange={this.handleChange}
            type="month"
            name="from"
            value={this.state.from}
          />
          <InputGroup
            icon="fa fa-clock"
            label="To"
            onChange={this.handleChange}
            type="month"
            name="to"
            value={this.state.to}
          />
          <Seperator color="danger" title="Social links" />
          <InputGroup
            label="Github handle"
            icon="fab fa-github"
            onChange={this.handleChange}
            type="text"
            name="githubHandle"
            value={this.state.githubHandle}
          />
          <InputGroup
            label="Youtube channel"
            icon="fab fa-youtube"
            onChange={this.handleChange}
            type="text"
            name="youtube"
            value={this.state.youtube}
          />
          <InputGroup
            label="Facebook page"
            icon="fab fa-facebook"
            onChange={this.handleChange}
            type="text"
            name="facebook"
            value={this.state.facebook}
          />
          <InputGroup
            label="Twitter account"
            icon="fab fa-twitter"
            onChange={this.handleChange}
            type="text"
            name="twitter"
            value={this.state.twitter}
          />
          <InputGroup
            label="Linked in"
            icon="fab fa-linkedin"
            onChange={this.handleChange}
            type="text"
            name="linkedIn"
          />
          <InputGroup
            icon="fab fa-instagram"
            label="Instagram account"
            onChange={this.handleChange}
            type="text"
            name="insta"
            value={this.state.insta}
          />

          <Seperator color="dark" title="BIO" />

          <InputGroup
            label="Enter your bio"
            onChange={this.handleChange}
            type="textarea"
            name="bio"
            value={this.state.bio}
          />
          <Check
            onChange={this.handleChange}
            value={this.state.isWorking}
            content="Currently working?"
            name="isWorking"
          />

          <Button color="primary" type="submit">
            Submit
          </Button>
          <Link to="/">
            <Button
              color="secondary"
              margin="0 10px"
              hover="#aaa"
              type="submit"
            >
              Cancel
            </Button>
          </Link>
        </form>
      </Div>
    );
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.name === 'isWorking') {
      this.setState({ [e.target.name]: e.target.checked });
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    const data = assignState(this.state);
    await this.props.createProfile(data);
    this.setState({ redirect: true });
  };
}

const mapStatetoProps = state => ({
  profile: state.profile
});

export default connect(
  mapStatetoProps,
  { createProfile }
)(ProfileForm);
