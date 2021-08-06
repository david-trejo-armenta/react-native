import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import BadgesTabNavigator from '../BadgesScreen/BadgesTabNavigator'
import BadgeLanding from '../BadgesLanding/BadgeLanding'
import BadgesScreen from '../BadgesScreen/BadgesScreen'
import Colors from '../../res/Colors'
import BadgesEdit from '../BadgesEdit/BadgesEdit'
import BadgesDetail from '../BadgesDetail/BadgesDetail'

const Stack = createStackNavigator();

const AppStack = () => {
    return(
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
            name = "Landing" 
            component ={BadgeLanding} 
            options ={{headerShown: false}}
            />
            <Stack.Screen 
            name = "BadgesTabNavigator" 
            component = {BadgesTabNavigator} 
            />
          

        </Stack.Navigator>
    );
}

export default AppStack