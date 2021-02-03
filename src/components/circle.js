import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';


const playerO = () => {
  return(
    <TouchableOpacity style={styles.boxPlayer}>
      <Text style={styles.playerO}>O</Text>
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

  player0: {
    fontSize: 40,
    color: '#da3f3f'
  },
});

export default player0;