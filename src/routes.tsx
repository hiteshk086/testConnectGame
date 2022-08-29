import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import GameScreen from './Screens/GameScreen';
import GameHistory from './Screens/GameHistory';
import {AUthContext} from './Contexts';
import {lightThemeColors} from './Constants/colors';
const Stack = createNativeStackNavigator();
const RootNavigation = () => {
  const [value, setValue] = useState(lightThemeColors);
  return (
    <AUthContext.Provider value={{value, setValue}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Game" component={GameScreen} />
          <Stack.Screen name="History" component={GameHistory} />
        </Stack.Navigator>
      </NavigationContainer>
    </AUthContext.Provider>
  );
};

export default RootNavigation;
