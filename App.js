import React from 'react';
import { View, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BadgesStack from './src/components/BadgesScreen/BadgesStack';
const App = () => {
  return (
    <NavigationContainer>
      <BadgesStack></BadgesStack>
    </NavigationContainer>
    );
};



export default App;
