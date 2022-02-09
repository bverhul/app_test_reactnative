import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ParkingsMap from '../components/map/ParkingsMap';
import React from 'react';
import {Actions} from 'react-native-router-flux';

export default function MapP() {
  const goToHome = () => {
    Actions.main();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToHome}>
        <Text>Home</Text>
      </TouchableOpacity>
      <ParkingsMap pointPosition={{nom: 'Parking LESPRES'}} />
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
