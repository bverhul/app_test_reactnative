import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default function App() {
  const goToMap = () => {
    Actions.maps();
  };
  const goToTests1 = () => {
    Actions.testone();
  };
  const goToAnim = () => {
    Actions.animone();
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TouchableOpacity onPress={goToMap} style={styles.tch}>
        <Text>Maps</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToTests1} style={styles.tch}>
        <Text>Tests #1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToAnim} style={styles.tch}>
        <Text>Animations #1</Text>
      </TouchableOpacity>
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
  tch: {
    backgroundColor: '#d34',
    fontWeight: 'bold',
  },
});
