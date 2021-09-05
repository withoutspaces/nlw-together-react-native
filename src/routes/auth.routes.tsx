import React from "react";
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from "../screens/Home";
import { SingIn } from "../screens/signin";
import { theme } from "../global/styles/theme";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes(){
    return(
        <Navigator
            screenOptions={{
                presentation: 'modal',
                cardStyle: { backgroundColor: theme.colors.secondary100 },
                headerShown: false,

            }}
        >
            <Screen 
                name="SignIn"
                component={SingIn}
            />
            <Screen 
                name="Home" 
                component={Home}
            />
        </Navigator>
    )
};