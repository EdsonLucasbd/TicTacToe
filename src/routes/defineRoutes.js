import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import main from '../pages/menu';
//import Options from '../pages/options';
import game from '../pages/game/game';

const { Screen, Navigator } = createStackNavigator();

export default function Routes () {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Main"
        screenOptions={{headerShown: false}}
      >
        <Screen name="Main" component={main} />
        <Screen name="Game" component={game} />
        {/* <Screen name="Options" component={Options} /> */}
      </Navigator>
    </NavigationContainer>
  );
}
