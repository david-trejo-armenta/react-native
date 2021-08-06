import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BadgesTabNavigator from '../BadgesScreen/BadgesTabNavigator';
import BadgeLanding from '../BadgesLanding/BadgeLanding';
import BadgesStack from '../BadgesScreen/BadgesStack';
import Login from '../UsersScreen/Login';
import Signup from '../UsersScreen/Signup';
import Colors from '../../res/Colors';

const Stack = createStackNavigator();

//Here we declare the screens we will handle in our navigator, we can include options and settings for each screen separately
const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: Colors.charade,
          shadowColor: Colors.white,
        },
        headerTintColor: Colors.white,
      }}>
      <Stack.Screen
        name="Landing"
        component={BadgeLanding}
        options={{headerShown: false}}
      />
      <Stack.Screen name="BadgesTabNavigator" component={BadgesTabNavigator} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
