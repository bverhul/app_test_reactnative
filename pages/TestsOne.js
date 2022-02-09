import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Actions} from 'react-native-router-flux';
import Storage from '../components/Storage';
import Alertt from '../components/Alertt';
import HttpTest from '../components/HttpTest';
import RedirectionGMaps from '../components/RedirectionGMaps';
import Notif from '../components/Notif';

export default function TestsOne() {
  const goToHome = () => {
    Actions.main();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToHome}>
        <Text>Home</Text>
      </TouchableOpacity>
      <Text>Storage : </Text>
      <Storage />
      <Text>Alertt : </Text>
      <Alertt />
      <Text>HttpTest : </Text>
      <HttpTest />
      <Text>Notif : </Text>
      <Notif />
      <Text>Redirection GMaps : </Text>
      <RedirectionGMaps />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
