import React, { Component } from 'react';
import InputGroup from '../components/Common/InputGroup';
import Button from '../components/Common/Button';
import { Redirect } from 'react-router-dom';
import H from '../components/Common/H';
import { validEmail, validPassword, validName } from '../utils/validateHelper';
import { Link } from 'react-router-dom';
import { loginUser } from '../redux/reducers/auth/auth.action';
import { connect } from 'react-redux';
import Div from './../components/Common/Div';
import { ToastContainer, toast } from 'react-toastify';

class Login extends Component {
  state = {
    email: '',
    password: '',
    redirect: false,
    error: {
      password: '',
      email: ''
    }
  };
  render() {
    if (this.state.redirect) {
      toast.success('Welcome back!');
      return <Redirect to="/" />;
    }
    return (
      <Div padding="100px 100px">
        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        <H size="20px" color="dark">
          Enter your name and password
        </H>
        <form onSubmit={this.handleSubmit}>
          <H>Login</H>
          <InputGroup
            icon="fa fa-envelope"
            label="Enter your email"
            onChange={this.handleChange}
            type="text"
            name="email"
            value={this.state.email}
            error={this.state.error.email}
          />
          <InputGroup
            icon="fa fa-key"
            label="Enter your password"
            onChange={this.handleChange}
            type="password"
            name="password"
            value={this.state.password}
            error={this.state.error.password}
          />
          <Button color="primary" margin="0 10px" hover="#aaa" type="submit">
            Submit
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
    const data = this.state;
    let validateForm = this.formValidate(data);
    validateForm.next();
    if (validateForm.next().done) {
      await this.props.loginUser(data);
      this.setState({ redirect: true });
    }
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
  };
}

const mapPropsToState = state => ({
  user: state.auth
});

export default connect(
  mapPropsToState,
  { loginUser }
)(Login);
