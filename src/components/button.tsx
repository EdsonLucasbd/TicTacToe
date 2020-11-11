import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';


interface ButtonProps {
  title: string,
  onPress(): void,
}

export default function Button ({ title }: ButtonProps) {
  const navigation = useNavigation();

  return (
    <RectButton style={styles.buttonStyle} onPress={() => navigation.navigate('Options')} >
      <Text style={styles.buttonTitle}>{ title }</Text>
    </RectButton>
  );
}

const styles = StyleSheet.create ({
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
  }
});