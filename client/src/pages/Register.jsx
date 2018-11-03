import React, { Component } from 'react';
import Button from '../components/Common/Button';
import InputGroup from '../components/Common/InputGroup';
import { validName, validEmail, validPassword } from '../utils/validateHelper';
import registerUser from '../redux/reducers/auth/auth.action';
import Div from '../components/Common/Div';
import H from '../components/Common/H';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    redirect: false,
    error: {
      name: '',
      password: '',
      email: ''
    }
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to="/create-profile" />;
    }
    return (
      <Div padding="100px 100px">
        <H color="dark" size="20px">
          Create new account
        </H>
        <form onSubmit={this.handleSubmit}>
          <InputGroup
            icon="fa fa-user"
            label="Enter your name"
            onChange={this.handleChange}
            name="name"
            value={this.state.name}
            error={this.state.error.name}
          />
          <InputGroup
            icon="fa fa-envelope"
            label="Enter your email"
            onChange={this.handleChange}
            name="email"
            value={this.state.email}
            error={this.state.error.email}
          />
          <InputGroup
            icon="fa fa-key"
            label="Enter your password"
            onChange={this.handleChange}
            name="password"
            type="password"
            value={this.state.password}
            error={this.state.error.password}
          />
          <Button color="primary" hover="#aaa" margin="0 10px" type="submit">
            Click
          </Button>
          <Link to="/">
            <Button color="secondary" hover="#aaa" type="submit">
              Cancel
            </Button>
          </Link>
        </form>
      </Div>
    );
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    let validateForm = this.formValidate(data);
    validateForm.next();
    if (validateForm.next().done) {
      await this.props.registerUser(data);
      this.setState({ redirect: true });
    }
  };

  handleError = err => {
    this.setState({ error: err.data });
  };

  formValidate = function*(data) {
    const nameHasError = validName(data.name);
    if (nameHasError && nameHasError.error) {
      yield this.setState({ error: { name: nameHasError.message } });
    }
    const emailHasError = validEmail(data.email);
    if (emailHasError && emailHasError.error) {
      yield this.setState({ error: { email: emailHasError.message } });
    }
    const passwordHasError = validPassword(data.password);
    if (passwordHasError && passwordHasError.error) {
      yield this.setState({ error: { password: passwordHasError.message } });
    }
    yield 'done';
  };
}
const mapStatetoProps = state => ({
  user: state.auth
});
export default connect(
  mapStatetoProps,
  { registerUser }
)(Register);
