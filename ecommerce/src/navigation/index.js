import React, { PureComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

import LaunchPage from '../page/launchPage';
import HomePage from '../page/HomePage/Index';
import CartPage from '../page/cartPage';
import ProfilePage from '../page/ProfilePage';
import FavoritePage from '../page/favoritePage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export class TabNavigation extends PureComponent {
    render() {
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                    let home, cart, favorite, profile;
        
                    if (route.name === 'HomeScreen') {
                        home = 'dot-single'
                        size = 35
                    } else if (route.name === 'CartScreen') {
                        cart = 'bag' ;
                        size = 24
                    } else if (route.name === 'FavoriteScreen') {
                        favorite = 'favorite-outline';
                        size =25
                    } else {
                        profile = 'user';
                        size = 25
                    }
                    return (
                        <View style={{flexDirection: 'row', alignItems:'center'}}>
                            {home && 
                                (<View style={{flexDirection: 'row', alignItems:'center',}}>
                                    <Entypo name={home} size={size} color={color}/>
                                    <Text style={styles.exploreTab}>Explorer</Text> 
                                </View>)
                            }
                            <SimpleLineIcon name={cart} size={size} color={color} />
                            <MaterialIcon name={favorite} size={size} color={color} />
                            <AntDesign name={profile} size={size} color={color} />
                        </View>
                    )},
                })}
                tabBarOptions={{
                    activeTintColor: '#ffffff',
                    inactiveTintColor: '#ffffff',
                    showLabel : false,
                    style:{
                        color : '#ffffff',
                        backgroundColor: '#010035',
                    }
                }}
            >
                <Tab.Screen name="HomeScreen" component={HomePage}/>
                <Tab.Screen name="CartScreen" component={CartPage} />
                <Tab.Screen name="FavoriteScreen" component={FavoritePage} />
                <Tab.Screen name="ProfileScreen" component={ProfilePage} />
            </Tab.Navigator>
        )
    }
}

export default class RootStack extends PureComponent {
    render() {
        return (
            <NavigationContainer >
                <Stack.Navigator initialRouteName='Launch' headerMode={false}>
                    <Stack.Screen name="Launch" component={LaunchPage} />
                    <Stack.Screen name="TabNav" component={TabNavigation} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({
    exploreTab :{
        color :'#ffffff',
        fontWeight : '700',
        fontSize:15,
        fontFamily:'Mark_Pro',
    }
})