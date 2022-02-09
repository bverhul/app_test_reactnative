import React, {Component} from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import {View, Button, Text} from 'react-native';

// todo :  npm install --save @react-native-community/async-storage

/**
 * Component used to test phone storage
 */
class Storage extends Component {
  state = {
    val: '---',
  };

  render() {
    return (
      <View>
        <Button
          title="Get value from store"
          onPress={async () => {
            console.log('Get value');
            try {
              const v = await AsyncStorage.getItem('cat');
              if (v !== null) {
                this.state.val = v;
                console.log(await AsyncStorage.getItem('cat'));
                this.forceUpdate();
              }
            } catch (e) {
              console.error(e);
            }
          }}
        />
        <Button
          title="Set value from store"
          onPress={async () => {
            console.log('Set value');
            try {
              const l = JSON.stringify('' + Math.random());
              await AsyncStorage.setItem('cat', l);
            } catch (e) {
              console.error(e);
            }
          }}
        />
        <Text>Value : {this.state.val}</Text>
      </View>
    );
  }
}
export default Storage;
