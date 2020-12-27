import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Circle () {
  return (
    <View style={[styles.container, {
      transform: [
        { translateX: 10 },
        { translateY: 10 },
      ]
    }]}>
      <View style={styles.innerCircle}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
  },

  innerCircle: {
    backgroundColor: '#F4E3D4',
    width: 60,
    height: 60,
    borderRadius: 35,
  }
});