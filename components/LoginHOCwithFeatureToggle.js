import Login from './LogIn';
import LoginNew from './LoginNew';
import {Feature} from '@paralleldrive/react-feature-toggles';
import React from 'react';

const activeComponent = () => <LoginNew buttonText={'BLAH BLAH BLAH'} />;
const inactiveComponent = () => <Login />;

export default LoginHOCwithFeatureToggle = () => {
  return (
    <Feature
      name={'newLogin'}
      activeComponent={activeComponent}
      inactiveComponent={inactiveComponent}
    />
  );
}
