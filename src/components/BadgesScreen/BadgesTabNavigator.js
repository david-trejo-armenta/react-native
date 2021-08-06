import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BadgesStack from './BadgesStack'
import FavoritesStack from '../Favorites/FavoritesStack'
import Colors from '../../res/Colors'

const Tab = createBottomTabNavigator();

const BadgesTabNavigator = () => {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                headerStyle:{
                backgroundColor: Colors.blackPearl,
                shadowColor: Colors.blackPearl,
                },
                headerTintColor: Colors.white,
            }}
        >
            
            <Tab.Screen 
                name="BadgesStack"
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
                name="Favorites"
                component={FavoritesStack}
                options={{
                tabBarIcon: ({size, color}) => (
                <Image style={{tintColor: color, width: size, height: size}} 
                    source={require('../../assets/origami.png')}
                />
                    ),
                }}
            />            
            
        </Tab.Navigator>
    );
};

export default BadgesTabNavigator;