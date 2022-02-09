import React from 'react';
import App from '../App';
import {Router, Scene} from 'react-native-router-flux';
import MapP from '../pages/MapP';
import TestsOne from '../pages/TestsOne';
import AnimationP from '../pages/AnimationsP';

// todo : npm install react-native-router-flux --save

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="main" component={App} title="Main home" initial={true} />
      <Scene key="maps" component={MapP} title="Maps" />
      <Scene key="testone" component={TestsOne} title="Tests #1" />
      <Scene key="animone" component={AnimationP} title="Animations" />
    </Scene>
  </Router>
);

export default Routes;
