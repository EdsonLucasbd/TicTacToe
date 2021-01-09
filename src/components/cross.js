import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const playerX = () => {
  return(
    <TouchableOpacity style={styles.boxPlayer}>
      <Text style={styles.playerX}>X</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create ({
  boxPlayer: {
    width: 80,
    height: 80,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
  },

  playerX: {
    fontSize: 40,
    color: '#553fda',
  },
});

export default playerX;