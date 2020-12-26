import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import Circle from './circle';
import Cross from './cross';


export default function game() {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <SafeAreaView style={styles.board}>
          <View 
            style={styles.line} />
          <View
            style={[styles.line, {
              transform: [
                { translateX: 200 }
              ]
            }]}/>

          <View
            style={[styles.line, {
              height: 3,
              width: 306,
              transform: [
                { translateY: 200 }
              ]
            }]}/>

          <View
            style={[styles.line, {
              height: 3,
              width: 306,
              transform: [
                { translateY: 100 }
              ]
            }]}/>
          <Circle />
          <Cross />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4E3D4',
  }, 

  board: {
    borderWidth: 3,
    borderColor: '#3A3A3C',
    height: 312,
    width: 312,
  },

  line: {
    backgroundColor: '#000',
    height: 306,
    width: 3,
    position: 'absolute',
    transform: [
      { translateX: 100 }
    ],
  },
});