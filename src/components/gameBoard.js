import React, {useState} from 'react';
import { View, StyleSheet, SafeAreaView, TouchableWithoutFeedback, PanResponder } from 'react-native';
import Circle from './circle';
import Cross from './cross';
import {
  CENTER_POINTS,
  AREAS,
  CONDITIONS,
  GAME_RESULT_NO,
  GAME_RESULT_USER1,
  GAME_RESULT_USER2,
  GAME_RESULT_TIE
} from '../constants/gameConstants';

export default function game() {
  
/*   const state = {
    firstUserInputs: [],
    secondUserInputs: [],
    result: GAME_RESULT_NO,
    round: 0,
  };

  function restart() {
    const { round } = state
    this.setState({
      firstUserInputs: [],
      secondUserInputs: [],
      result: GAME_RESULT_NO,
      round: round + 1
    });
    setTimeout(() => {
      if (round % 2 === 0) {
        SecondUserAction()
      }
    }, 5)
  }

  function boardClickHandler(e) {
    const [ locationX, setLocationX ] = useState('0');
    const [ locationY, setLocationY ] = useState('0');
    const [ setNext ] = useState({});

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (event, gestureState) => true,
      onStartShouldSetPanResponderCapture:
        (event, gestureState) => true,
      onMoveShouldSetPanResponder: (event, gestureState) => false,
      onMoveShouldSetPanResponderCapture:
        (event, gestureState) => false,
      onPanResponderGrant: (event, gestureState) => false,
      onPanResponderMove: (event, gestureState) => false,
      onPanResponderRelease: (event, gestureState) => {
        setLocationX(event.nativeEvent.locationX.toFixed(2));
        setLocationY(event.nativeEvent.locationY.toFixed(2));
      },
    });
    const { firstUserInputs, secondUserInputs, result } = state;
    if (result !== -1) {
      return;
    }
    const inputs = firstUserInputs.concat(secondUserInputs);

    const area = AREAS.find(d =>
      (locationX >= d.startX && locationX <= d.endX) &&
      (locationY >= d.startY && locationY <= d.endY));

      if (area && inputs.every(d => d !== area.id)) {
        setNext({ firstUserInputs: firstUserInputs.concat(area.id) });
        setTimeout(() => {
          judgeWinner();
          SecondUserAction(e);
        }, 5);
      }
  }

  function SecondUserAction(e) {
    const [ locationX, setLocationX ] = useState(0);
    const [ locationY, setLocationY ] = useState(0);
    const [ setNext ] = useState({});

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (event, gestureState) => true,
      onStartShouldSetPanResponderCapture:
        (event, gestureState) => true,
      onMoveShouldSetPanResponder: (event, gestureState) => false,
      onMoveShouldSetPanResponderCapture:
        (event, gestureState) => false,
      onPanResponderGrant: (event, gestureState) => false,
      onPanResponderMove: (event, gestureState) => false,
      onPanResponderRelease: (event, gestureState) => {
        setLocationX(event.nativeEvent.locationX.toFixed(2));
        setLocationY(event.nativeEvent.locationY.toFixed(2));
      },
    });

    const { firstUserInputs, secondUserInputs, result } = state;
    if (result !== -1) {
      return;
    }
    const inputs = firstUserInputs.concat(secondUserInputs);

    const area = AREAS.find(d =>
      (locationX >= d.startX && locationX <= d.endX) &&
      (locationY >= d.startY && locationY <= d.endY));

      if (area && inputs.every(d => d !== area.id)) {
        setNext({ firstUserInputs: firstUserInputs.concat(area.id) });
        setTimeout(() => {
          judgeWinner();
          boardClickHandler(e);
        }, 5);
      }
  }

  function isWinner(inputs) {
    return CONDITIONS.some(d => d.every(item => inputs.indexOf(item) !== -1));
  }

  function judgeWinner() {
    const [ setResult ] = useState({});
    const { firstUserInputs, secontUserInputs, result } = state;
    const inputs = firstUserInputs.concat(secontUserInputs);

    if (inputs.length >= 5 ) {
      let res = isWinner(firstUserInputs);
      if (res && result !== GAME_RESULT_USER1) {
        return setResult({ result: GAME_RESULT_USER1 });
      }
      res = isWinner(secontUserInputs)
      if (res && result !== GAME_RESULT_USER2) {
        return setResult({ result: GAME_RESULT_USER2 });
      }
    }

    if (inputs.length === 9 &&
        result === GAME_RESULT_NO && result !== GAME_RESULT_TIE) {
          setResult({ result: GAME_RESULT_TIE });
    }
  }
 */
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => {}}>
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
            {
              firstUserInputs.map((current, index) => (
                <Circle 
                  key={index}
                  xTranslate={CENTER_POINTS[current].x}
                  yTranslate={CENTER_POINTS[current].y}
                />
              ))
            }

            {
              secondUserInputs.map((current, index) => (
                <Cross 
                  key={index}
                  xTranslate={CENTER_POINTS[current].x}
                  yTranslate={CENTER_POINTS[current].y}
                />
              ))
            }
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