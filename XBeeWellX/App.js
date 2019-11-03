import React from 'react';
import { Image, Button, TouchableHighlight, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const handlePress = () => false;
  return (
    <View style={styles.container}>
      <Image
        style={styles.background}
        source={require('./assets/fullBack.png')}
      />
      <TouchableHighlight style={styles.waterBottle} onPress={handlePress}>
      <Image
        source={require('./assets/icons/water.png')}
      />
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  background: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    zIndex: 2
  },
  waterBottle: {
    height: '10%',
    width: '10%',
    zIndex: 1
  }
});
