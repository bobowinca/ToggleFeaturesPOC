/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { FeatureToggles, Feature } from '@paralleldrive/react-feature-toggles';
import Login from './components/LogIn';
import LoginNew from './components/LoginNew';
import LoginHOC from './components/LoginHOC';
import LoginHOCwithFeatureToggle from './components/LoginHOCwithFeatureToggle';
import config from './config.json';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const features = ['faq', 'foo', 'bar', 'newLogin'];
const featureTrials = config.featureTrials;

const activeComponent = () => <LoginNew />;
const inactiveComponent = () => <Login />;

const AppWithFeatureToggle: () => React$Node = () => {
  return (
    <FeatureToggles features={featureTrials}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {/* <Login /> */}
          {/* <Feature
            name={'newLogin'}
            activeComponent={activeComponent}
            inactiveComponent={inactiveComponent}
          /> */}
          <LoginHOCwithFeatureToggle />
        </ScrollView>
      </SafeAreaView>
    </FeatureToggles>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default AppWithFeatureToggle;
