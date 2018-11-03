import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Footer from './components/Footer/Footer';
import LoadingPage from './components/Loader/Spinner';
import NavBar from './components/NavBar/NavBar';
import Profile from './pages/Profile';
import { getTheme } from './redux/reducers/theme/theme.action';

class App extends Component {
  componentDidMount() {
    this.props.getTheme();
  }
  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <Router>
          <React.Fragment>
            <NavBar />
            <Switch>
              <Route path="/" exact component={AsyncLandingPage} />
              <Route path="/register" exact component={AsyncRegister} />
              <Route path="/profile/:handle" exact component={Profile} />
              <Route path="/profile" exact component={AsyncProfile} />
              <Route path="/about" exact component={AsyncAbout} />
              <Route path="/hire" exact component={AsyncHire} />
              <Route path="/profiles" exact component={AsyncProfileList} />
              <Route path="/login" exact component={AsyncLogin} />
              <Route path="/load" exact component={LoadingPage} />
              <Route
                path="/create-profile"
                exact
                component={AsyncProfileForm}
              />
              <Route component={AsyncNotFoundPage} />
            </Switch>
            <Footer>CopyRight @ 2019</Footer>
          </React.Fragment>
        </Router>
      </ThemeProvider>
    );
  }
}

const AsyncLandingPage = Loadable({
  loader: () => import('./pages/LandingPage'),
  loading: () => LoadingPage
});
const AsyncRegister = Loadable({
  loader: () => import('./pages/Register'),
  loading: LoadingPage
});
const AsyncLogin = Loadable({
  loader: () => import('./pages/Login'),
  loading: LoadingPage
});
const AsyncProfile = Loadable({
  loader: () => import('./pages/Profile'),
  loading: LoadingPage
});
const AsyncAbout = Loadable({
  loader: () => import('./pages/About'),
  loading: LoadingPage
});
const AsyncProfileForm = Loadable({
  loader: () => import('./pages/ProfileForm'),
  loading: LoadingPage
});
const AsyncProfileList = Loadable({
  loader: () => import('./pages/ProfileList'),
  loading: LoadingPage
});
const AsyncHire = Loadable({
  loader: () => import('./pages/Hire'),
  loading: LoadingPage
});
const AsyncNotFoundPage = Loadable({
  loader: () => import('./components/NotFound/NotFoundPage'),
  loading: LoadingPage
});

App.propTypes = {
  theme: PropTypes.object.isRequired
};

App.defaultProps = {
  theme: {
    primary: '#233d4d',
    secondary: '#f71735',
    danger: '#ff9f1c',
    info: '#ffa552',
    dark: '#222',
    light: '#fff',
    none: 'none'
  }
};

const mapStateToProps = state => ({
  theme: state.theme.currentTheme
});

export default connect(
  mapStateToProps,
  { getTheme }
)(App);
