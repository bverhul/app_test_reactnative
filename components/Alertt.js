import React, {Component} from 'react';
import {View, Text, Alert, TouchableOpacity} from 'react-native';

class Alertt extends Component {
  state = {
    data: '',
  };

  sendAlert = () =>
    Alert.alert(
      'Alertt Title',
      'My Alertt Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.sendAlert}>
          <Text>Send alert : </Text>
          <Text> </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Alertt;
