import Div from './../Common/Div';
import React, { Component } from 'react';
import H from './../Common/H';
import axios from 'axios';
import Icon from './../Common/Icon';
import Table from './../Common/Table';

export default class Projects extends Component {
  state = { repos: [] };
  async componentWillMount() {
    const res = await axios.get(
      `https://api.github.com/users/${this.props.handle}/repos`
    );
    this.setState({ repos: res.data });
  }
  render() {
    return (
      <Div>
        <H color="dark" size="1.8rem" margin="10px 0px">
          <Icon className="fas fa-project-diagram" />
          Projects
        </H>
        {this.state.repos.length > 0 ? (
          <Table experience={this.state.repos} />
        ) : (
          <H color="dark">Didn't found any repos</H>
        )}
      </Div>
    );
  }
}
