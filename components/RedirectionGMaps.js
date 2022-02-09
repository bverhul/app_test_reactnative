import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import openMap from 'react-native-open-maps';

// todo :  npm install --save react-native-open-maps

class RedirectionGMaps extends Component {
  goToYosemite() {
    let start_p = '50.69107087007 3.1720968516789';
    let end_p = '50.636788993222 3.0730428283576';
    openMap({start: start_p, end: end_p});
  }

  render() {
    return (
      <TouchableOpacity color={'#bdc3c7'} onPress={this.goToYosemite}>
        <Text>Click to open maps</Text>
      </TouchableOpacity>
    );
  }
}

export default RedirectionGMaps;
