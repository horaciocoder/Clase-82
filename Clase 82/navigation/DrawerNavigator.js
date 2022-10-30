import * as React from 'react';
import Profile from '../screens/Profile';
import { createDrawerNavigator } from '@react-navigation-drawer';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Principal" component = {TabNavigator}></Drawer.Screen>
            <Drawer.Screen name="Perfil" component = {Profile}></Drawer.Screen>
        </Drawer.Navigator>
)
}