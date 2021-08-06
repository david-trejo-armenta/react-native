import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BadgesStack from './BadgesStack'
import Colors from '../../res/Colors'

const Tab = createBottomTabNavigator();

const BadgesTabNavigator = () => {
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                headerStyle:{
                backgroundColor: Colors.blackPearl,
                shadowColor: Colors.blackPearl,
                },
                headerTintColor: Colors.white,
            }}
        >
            
            <Tab.Screen 
                name="Badges"
                component={BadgesStack}
                options={{
                tabBarIcon: ({size, color}) => (
                <Image style={{tintColor: color, width: size, height: size}} 
                    source={require('../../assets/daruma.png')}
                />
                    ),
                }}
            />
            <Tab.Screen 
                name="Badges2"
                component={BadgesStack}
                options={{
                tabBarIcon: ({size, color}) => (
                <Image style={{tintColor: color, width: size, height: size}} 
                    source={require('../../assets/origami.png')}
                />
                    ),
                }}
            />
            
            <Tab.Screen 
                name="Badges3"
                component={BadgesStack}
                options={{
                tabBarIcon: ({size, color}) => (
                <Image style={{tintColor: color, width: size, height: size}} 
                    source={require('../../assets/bonsai.png')}
                />
                    ),
                }}
            />
            
            
            
        </Tab.Navigator>
    );
};

export default BadgesTabNavigator;