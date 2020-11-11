import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { RectButton } from 'react-native-gesture-handler';

export default function main() {
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
      <Image source={require('../../assets/icon.png')} style={styles.logo}/>
      
      <RectButton style={styles.buttonStyle} onPress={() => navigation.navigate('Game')} >
        <Text style={styles.buttonTitle}>Novo Jogo</Text>
      </RectButton>

      {/* <RectButton style={styles.buttonStyle} onPress={() => navigation.navigate('Options')} >
        <Text style={styles.buttonTitle}>Opções</Text>
      </RectButton> */}

      <RectButton style={styles.buttonStyle} onPress={() => navigation.goBack()} >
        <Text style={styles.buttonTitle}>Sair</Text>
      </RectButton>

      <Text style={styles.by}>Developed By @Ed.lucas_</Text>
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

  logo: {
    width: 130,
    height: 130,
    marginBottom: 120,
    marginTop: 120,
  },

  buttonStyle: {
    width: 200,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
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
  },

  by: {
    fontFamily: 'PatrickHand_400Regular',
    marginTop: 25,
    fontSize: 15,
    textAlign: 'center',

    color: '#7c7c7c',
  }
});