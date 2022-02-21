import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './StackNav';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
          >
              { StackNav(Stack) }
          </Stack.Navigator>
      </NavigationContainer>
  )
};

export default Routes;