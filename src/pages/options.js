/* import React, { useRef } from 'react';
import { View, Image, StyleSheet, TextInput, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import Button from '../components/button';
import { RectButton } from 'react-native-gesture-handler';

export default function Options() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/icon.png')} style={styles.logo}/>
      
      <View style={styles.inputContainer}>
        <Image source={require('../../assets/cross.png')} style={styles.playerIcon}/>
        <TextInput
          style={styles.inputText}
          defaultValue="Jogador 1"
          autoCorrect={false}
          autoCapitalize={'none'}
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Image source={require('../../assets/circle.png')} style={styles.playerIcon}/>
        <TextInput
          style={styles.inputText}
          defaultValue="Jogador 2"
          autoCorrect={false}
          autoCapitalize={'none'}
        />
      </View>

      <RectButton style={styles.buttonStyle} onPress={() => navigation.navigate('Game')} >
        <Text style={styles.buttonTitle}>Ok</Text>
      </RectButton>
      
    </View>
  );
}

Options.navigationOptions = {
  title: 'Options',
}

const styles = StyleSheet.create ({
  container: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4E3D4',
  },

  logo: {
    width: 130,
    height: 130,
    marginBottom: 120,
    marginTop: 120,
  },

  inputContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },

  inputText: {
    width: '40%',
    borderBottomWidth: 1,
    borderColor: '#3A3A3C',
  },

  playerIcon: {
    display: 'flex',
    width: 50,
    height: 50,
  },

  buttonStyle: {
    width: 200,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 30,

    backgroundColor: '#3A3A3C',
    borderRadius: 15.5,
  },

  buttonTitle: {
    fontFamily: 'PatrickHand_400Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 25,
    lineHeight: 24,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',

    color: '#FFFFFF',
  }
}); */