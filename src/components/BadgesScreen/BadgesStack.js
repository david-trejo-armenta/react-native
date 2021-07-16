import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BadgeLanding from '../BadgesLanding/BadgeLanding.js';
import BadgesScreen from "./BadgesScreen.js";
import BadgesDetail from "../BadgesDetail/BadgesDetail.js";
import BadgesEdit from "../BadgesEdit/BadgesEdit.js";
import Colors from "../../res/Colors.js";

const Stack = createStackNavigator();

const BadgesStack = () => {
return(
    <Stack.Navigator
        screenOptions={{
            headerStyle:{
                backgroundColor: Colors.blackPearl,
                shadowColor: Colors.blackPearl,
            },
            headerTintColor: Colors.white,
        }}>
            
            <Stack.Screen 
            name="Hello" 
            component={BadgeLanding} 
            options={{headerShown:false}} 
            /> 

            <Stack.Screen 
            name="Badges" 
            component={BadgesScreen} 
            options={{headerShown:false}}
            />
            <Stack.Screen 
            name="BadgesDetail" 
            component={BadgesDetail} 
            />
            <Stack.Screen 
            name="BadgesEdit" 
            component={BadgesEdit} />
            
    </Stack.Navigator>
);
};

export default BadgesStack;

