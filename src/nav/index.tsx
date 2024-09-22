import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from '../screens/Auth';

const Stack = createNativeStackNavigator();

function Nav() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Auth" component={Auth} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Nav;