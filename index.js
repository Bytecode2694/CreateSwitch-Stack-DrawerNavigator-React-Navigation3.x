/**
 * @format
 */

import {AppRegistry} from 'react-native';
import LaunchApp from './src/index';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => LaunchApp);
