import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { Text } from 'react-native';
import SplashScreen from '../common/SplashScreen';

const Stack = createNativeStackNavigator();

export default function Routes() {
  const userData = {
    name: 'xcxcx',
    token: 'xvdve3ds',
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!!userData?.token ? MainStack(Stack) : AuthStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
