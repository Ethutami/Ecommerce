import React, { PureComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LaunchPage from '../page/launchPage';

const Stack = createStackNavigator();

export default class RootStack extends PureComponent {
    render() {
        return (
            <NavigationContainer >
                <Stack.Navigator initialRouteName='Launch' headerMode={false}>
                    <Stack.Screen name="Launch" component={LaunchPage} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

