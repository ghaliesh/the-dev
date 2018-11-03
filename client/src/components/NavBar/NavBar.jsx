import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleList } from '../../helpers/style.helper';
import { logOutUser } from '../../redux/reducers/auth/auth.action';
import { setTheme } from '../../redux/reducers/theme/theme.action';
import Div from './../Common/Div';
import Span from './../Common/Span';
import Icon from './../Common/Icon';

class NavBar extends Component {
  state = {
    shown: true
  };

  showList = e => {
    this.setState({ shown: !this.state.shown });
  };
  render() {
    const { user } = this.props;
    return (
      <Div position="fixed" height="100px" width="100%">
        <Div className="nav" padding="0px 100px" background="secondary">
          <Div className="nav-header">
            <Div className="nav-title">
              <Span className="change-theme" clickable onClick={this.showList}>
                <Icon className="fas fa-palette" /> theme
              </Span>
              <ul style={toggleList(this.state.shown)}>
                <li onClick={() => this.changeTheme(0)}>
                  <Icon className="fa fa-circle" color="#560909" />{' '}
                  <Span clickable color="#560909">
                    Brown
                  </Span>
                </li>
                <li onClick={() => this.changeTheme(1)}>
                  <Icon className="fa fa-circle" color="#081135" />{' '}
                  <Span clickable color="#081135">
                    Blue
                  </Span>
                </li>
                <li onClick={() => this.changeTheme(2)}>
                  <Icon className="fa fa-circle" color="#c12056" />{' '}
                  <Span clickable color="#c12056">
                    Reddish
                  </Span>
                </li>
              </ul>
            </Div>
          </Div>
          <Div className="nav-btn">
            <label htmlFor="nav-check">
              <span />
              <span />
              <span />
            </label>
          </Div>
          <input type="checkbox" id="nav-check" />
          <Div className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>{' '}
            {user.isAuthenticated && (
              <li>
                <Link to="/profile">Profile </Link>
              </li>
            )}
            <li>
              <Link to="/about">About us </Link>
            </li>
            <li>
              <Link to="/hire">Hire</Link>
            </li>
            <li>
              <Link to="/profiles">Explore</Link>
            </li>{' '}
            {user.isAuthenticated && (
              <li onClick={this.logOut}>
                <Link to="/">Log out</Link>
              </li>
            )}
          </Div>
        </Div>
      </Div>
    );
  }

  logOut = () => {
    this.props.logOutUser();
  };

  changeTheme = a => {
    this.props.setTheme(a);
    this.setState({ shown: true });
  };
}

const mapStatetoProps = state => ({
  user: state.auth,
  theme: state.theme.currentTheme
});

export default connect(
  mapStatetoProps,
  { logOutUser, setTheme }
)(NavBar);
