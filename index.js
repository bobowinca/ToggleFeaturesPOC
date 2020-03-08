/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
// import App from './App';
// import AppWithFeatureToggle from './AppWithFeatureToggle';
import AppWithFeatureToggleLowerProvider from './AppWithFeatureToggleLowerProvider';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => AppWithFeatureToggleLowerProvider);
