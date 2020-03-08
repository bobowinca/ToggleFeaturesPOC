import Login from './LogIn';
import LoginNew from './LoginNew';
import {FeatureToggles, Feature} from '@paralleldrive/react-feature-toggles';
import React from 'react';
import config from '../config.json';

const activeComponent = () => <LoginNew buttonText={'Booyah LoginNew!!!'} />;
const inactiveComponent = () => <Login />;

const featureTrials = config.featureTrials;

export default LoginHOCwithFeatureToggleWithProvider = () => {
  return (
    <FeatureToggles features={featureTrials}>
      <Feature
        name={'newLogin'}
        activeComponent={activeComponent}
        inactiveComponent={inactiveComponent}
      />      
    </FeatureToggles>

  );
}
