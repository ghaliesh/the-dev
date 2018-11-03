import React, { Component } from 'react';
import axios from 'axios';
import Div from './../Common/Div';

export default class GithubRepos extends Component {
  state = {
    repos: []
  };

  async componentDidMount() {
    const res = await axios.get(
      `https://api.github.com/users/${this.props.handler}/repos`
    );
    this.setState({ repos: res.data });
  }
  render() {
    return (
      <Div>
        <h1>Github profile</h1>
      </Div>
    );
  }
}
