/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Index from './src/screens/Index';
import Details from './src/screens/Details';
const stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="Index"
          component={Index}
          options={{title: 'Food ', headerShown: false}}
        />
        <stack.Screen
          name="Details"
          component={Details}
          options={{title: 'Food App', headerShown: false}}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
