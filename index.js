/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Routes from './routes/Routes.js';

class routingApp extends Component {
  render() {
    return <Routes />;
  }
}
export default routingApp;

//AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => routingApp);
