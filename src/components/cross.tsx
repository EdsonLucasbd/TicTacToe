import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Cross () {
  return (
    <View style={[styles.container, {
      transform: [
        { translateX: 10 + 35},
        { translateY: 10  - 12},
      ]
    }]}>
      <View style={[styles.line, {
        transform: [
          { rotate: '135deg' },
        ],
        backgroundColor: '#3d3d3d'
      }]}>
      </View>
      <View style={[styles.line, {
        transform: [
          { rotate: '45deg' },
        ],
        backgroundColor: '#3d3d3d'
      }]}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    position: 'absolute',
    width: 80,
    height: 80,
  },

  line: {
    position: 'absolute',
    width: 8,
    height: 105,
  },
});