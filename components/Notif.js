import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';

class Notif extends Component {
  state = {
    data: null,
  };

  sendNotif1() {}
  componentDidMount() {
    /*
        Notifications.setNotificationHandler({
            handleNotification: async () => ({
                shouldShowAlert: true,
                shouldPlaySound: true,
                shouldSetBadge: true,
            }),
        });
        async() => await this.askPermissions();
        */
    console.log('mounted');
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.sendNotif1()}>
          <Text>Send notif : </Text>
          <Button
            title="Press to schedule a notification"
            onPress={async () => {
              console.log('Pop up');
              await this.schedulePushNotification();
            }}
          />
          <Button
            title="Get info from personal backend"
            onPress={async () => {
              console.log('Backend connection');
              await this.schedulePushNotification2();
            }}
          />
          <Text>{this.state.data}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Notif;
