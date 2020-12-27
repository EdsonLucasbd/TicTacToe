import 'react-native-gesture-handler';
import React from 'react';
import { useFonts } from 'expo-font';
import { PatrickHand_400Regular } from '@expo-google-fonts/patrick-hand';

import Routes from './src/routes/defineRoutes';

export default function App() {
  const [fontsLoaded] = useFonts({
    PatrickHand_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Routes/>
  );
}

