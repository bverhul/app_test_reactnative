import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Actions} from 'react-native-router-flux';
import Animations from '../components/Animations';

export default function AnimationP() {
  const goToHome = () => {
    Actions.main();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToHome}>
        <Text>Home</Text>
      </TouchableOpacity>
      <Animations />
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
