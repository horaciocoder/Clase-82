import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';
import { StyleSheet } from 'react-native';
import Feed from '../screens/Feed';
import CreateStory from '../screens/CreateStory';

const Tab = createMaterialBottomTabNavigator();
const BottomTabNavigator = () => {
    return
    (
        <Tab.Navigator labeled = {false} barStyle = {styles.bottomTabStyle} screenOptions = 
        {({route}) => ({
            tabBarIcon : ({focused, color, size}) =>
            {
                var iconName;
                if (route.name === "Índice")
                {
                    iconName = focused ? "reorder-four" : "reorder-four-outline";
                }
                else if (route.name === "Crear Historia")
                {
                    iconName = focused ? "reader" : "reader-outline";
                }
                return (
                    <Ionicons name={iconName} size = {RFValue(25)} color={color} style = {styles.icons}></Ionicons>
                )
            }
        })} activeColor = {'#00CCDD'} inactiveColor = {'#9ADC9A'}>
            <Tab.Screen name = 'Índice' component = {Feed}></Tab.Screen>
            <Tab.Screen name = "Crear Historia" component = {CreateStory}></Tab.Screen>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create(
    {
        bottomTabStyle:
        {
            backgroundColor:'#559B65',
            height:'8%',
            borderTopLeftRadius:'30',
            borderTopRightRadius:'30',
            overflow:'hidden',
            position:'absolute'
        },
        icons:
        {
            width:RFValue(30),
            height:RFValue(30)
        }
    }
)