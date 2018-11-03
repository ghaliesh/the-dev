import React, { Component } from 'react';
import Div from './../components/Common/Div';
import Button from './../components/Common/Button';
import skills from '../helpers/skilss.helpers';
import SelectInput from './../components/Common/Select';
import { connect } from 'react-redux';
import { getProfilesBySkills } from './../redux/reducers/profile/profile.action';
import Label from './../components/Common/Label';
import Icon from './../components/Common/Icon';
import Check from './../components/Common/CheckBox';
import ProfileItem from './../components/ProfileList/ProfileItem';

class Hire extends Component {
  state = {
    value: [],
    skills: [],
    disabled: false,
    and: false,
    showResults: false
  };

  componentDidMount() {
    this.setState({ showResults: false });
  }

  componentWillUnmount() {
    this.setState({ showResults: false });
  }

  handleSubmit = async e => {
    e.preventDefault();
    let mode = this.state.and ? 'and' : 'or';
    await this.props.getProfilesBySkills(this.state.value, mode);
    this.setState({ showResults: true });
  };

  clearSkills = () => {
    this.setState({
      skills: [],
      value: [],
      disabled: false,
      showResults: false
    });
  };

  deleteLastOne = () => {
    if (this.state.skills.length < 2) {
      this.clearSkills();
      return;
    }
    const newArray = [...this.state.skills];
    newArray.splice(-1, 1);
    this.setState({
      skills: newArray,
      value: [],
      disabled: false,
      showResults: false
    });
  };
  render() {
    return (
      <Div padding="200px 100px">
        <form onSubmit={this.handleSubmit}>
          <Label>Technology</Label>
          <SelectInput
            onChange={this.handleChange}
            value={this.state.value}
            disabled={this.state.disabled}
            options={skills}
          />
          <Check
            margin="10px 0px"
            content="And"
            name="and"
            onChange={this.chackBoxChange}
          />
          <Button onClick={this.handleSubmit} color="primary">
            {' '}
            <Icon className="fa fa-search" /> Search
          </Button>
          <Button
            type="button"
            onClick={this.deleteLastOne}
            margin="0px 10px"
            color="secondary"
          >
            <Icon className="fa fa-cut" /> Undo
          </Button>
          <Button type="button" onClick={this.clearSkills} color="danger">
            <Icon /> Clear
          </Button>
        </form>
        <Div display="flex" margin="50px 0px">
          {this.state.skills.map(p => (
            <Div
              key={this.state.skills.indexOf(p)}
              background="#ccc"
              padding="10px"
              margin="0px 10px"
            >
              {p}
            </Div>
          ))}
        </Div>

        {this.state.showResults &&
          this.props.profiles.map(profile => (
            <ProfileItem
              key={this.props.profiles.indexOf(profile)}
              profile={profile}
            />
          ))}

        {this.props.profiles.length < 1 &&
          this.state.showResults && <Div>We found nothing</Div>}
      </Div>
    );
  }

  chackBoxChange = e => {
    this.setState({ [e.target.name]: e.target.checked });
  };
  handleChange = e => {
    if (this.state.skills.length > 5) {
      this.setState({ disabled: true });
      return;
    }
    this.setState({
      value: [...this.state.value, e.target.value],
      skills: [...this.state.skills, e.target.value],
      showResults: false
    });
  };
}

const mapPropsToState = state => ({
  profiles: state.profile.profiles
});

export default connect(
  mapPropsToState,
  { getProfilesBySkills }
)(Hire);
