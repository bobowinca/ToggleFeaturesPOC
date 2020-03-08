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
import {FlagsProvider, Flags} from 'react-feature-flags';
import Login from './components/LogIn';
import LoginNew from './components/LoginNew';
import LoginHOC from './components/LoginHOC';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const flags = [
  {name: 'newLogin', isActive: false},
  {name: 'adminOnly', isActive: true},
];

const renderOn = () => <LoginNew />;
const renderOff = () => <Login />;

const App: () => React$Node = () => {
  return (
    <FlagsProvider value={flags}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {/* <Login /> */}
          {/* <Flags
            authorizedFlags={['newLogin']}
            renderOn={renderOn}
            renderOff={renderOff}
          /> */}
          <LoginHOC />
        </ScrollView>
      </SafeAreaView>
    </FlagsProvider>
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

export default App;
