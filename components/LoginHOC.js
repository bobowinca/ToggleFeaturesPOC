import Login from './LogIn';
import LoginNew from './LoginNew';
import {Flags} from 'react-feature-flags';
import React from 'react';

const renderOn = () => <LoginNew />;
const renderOff = () => <Login />;

export default LoginHOC = () => {
  return (
    <Flags
      authorizedFlags={['newLogin']}
      renderOn={renderOn}
      renderOff={renderOff}
    />
  );
}
