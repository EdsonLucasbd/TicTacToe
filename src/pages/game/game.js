import React, {useState} from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions, Text } from 'react-native';

export function start(player){
  const [AtualPlayer, setAtualPlayer] = useState();
  const [remainingMoves, setRemainingMoves] = useState(0);
  const [board, setBoard] = useState([]);

  setAtualPlayer(player);
  setRemainingMoves(9);
  setBoard([
    ['','',''],
    ['','',''],
    ['','','']
  ]);
}

export function playerX(){
  return(
    <TouchableOpacity style={styles.boxPlayer}>
      <Text style={styles.playerX}>X</Text>
    </TouchableOpacity>
  );
}

export function playerO(){
  return(
    <TouchableOpacity style={styles.boxPlayer}>
      <Text style={styles.playerO}>O</Text>
    </TouchableOpacity>
  );
}
export default function game() {
  const [AtualPlayer, setAtualPlayer] = useState();
  const [remainingMoves, setRemainingMoves] = useState(0);
  const [board, setBoard] = useState([]);

  
  
  function makePlay(row, column){
    board[row][column] = AtualPlayer;
    setBoard([...board]);

    setAtualPlayer(atualPlayer === 'X' ? 'O' : 'X')
  }

  const winning_sequences = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
],

function check_winning_sequences(player) {

for ( let i in winning_sequences ) {
  if (board[ winning_sequences[i][0] ] == player  &&
    board[ winning_sequences[i][1] ] == player &&
    board[ winning_sequences[i][2] ] == player) {
    console.log('Sequencia vencedora INDEX:' + i);
    return i;
  }
};
return -1;
}
  
  return (
    <View style={styles.container}>
      {
        start(playerX),
        board.map((row, rowNumber) => {
          return (
            <View key={rowNumber} style={styles.inlineItems}>
              {
                row.map((column, columnNumber) => {
                  return (
                    <TouchableOpacity 
                      key={columnNumber} 
                      style={styles.boxPlayer}
                      onPress={() => makePlay(rowNumber, columnNumber)}
                      disabled={column !== ''}>
                      <Text style={column === 'X' ? styles.playerX : styles.playerO}>{column}</Text>
                    </TouchableOpacity>
                  );
                })
              }
            </View>
          );
        })
      }
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#F4E3D4',
  }, 

  positionOnBoard: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
    backgroundColor: '#555',
    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: '#fff',
  },

  inlineItems: {
    flexDirection: 'row'
  },

  boxPlayer: {
    width: 80,
    height: 80,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
  },

  playerX: {
    fontSize: 40,
    color: '#553fda',
  },

  player0: {
    fontSize: 40,
    color: '#da3f3f'
  },
});
