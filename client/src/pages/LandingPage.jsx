import React from 'react';
import H from '../components/Common/H';
import Button from '../components/Common/Button';
import { Link } from 'react-router-dom';

const LandingPage = props => {
  return (
    <div className="landing">
      <H size="2rem" margin="0px 200px initial initial" color="dark">
        Connect with your developer
      </H>
      <H size="1rem" margin="0px 200px initial initial" color="secondary">
        Some dummy unecessary text that doesn't even matter
      </H>
      <div>
        <Link to="/register">
          <Button
            effect={true}
            margin="10px"
            text="light"
            hover="#222"
            color="primary"
            border="#222"
          >
            Get Started
          </Button>
        </Link>
        <Link to="/login">
          <Button
            effect={true}
            margin="10px"
            hover="danger"
            color="secondary"
            text="light"
            border="#222"
          >
            Have an account?
          </Button>
        </Link>
        <Link to="/hire">
          <Button
            effect={true}
            margin="10px"
            hover="secondary"
            color="danger"
            text="light"
            border="#222"
          >
            Hire a developerp
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default LandingPage;
