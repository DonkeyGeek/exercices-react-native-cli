import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import navigationPaths from '../constants/navigationPaths';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import iconPaths from '../constants/iconPaths';

const Tab = createBottomTabNavigator();

const TabNav = () => {
    return (
        <Tab.Navigator
           screenOptions={{
               headerShown: false,
               tabBarShowLabel: false,
               tabBarStyle: {
                   //backgroundColor: 'dodgerblue'
               }
            }}
        >
              <Tab.Screen 
                name={navigationPaths.HOME} 
                component={HomeScreen} 
                options={{
                    title: 'Accueil',
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image 
                                style={{ tintColor: focused ? 'crimson' : 'black' }}
                                source={iconPaths.iconHome}
                            />
                        )
                    }
                }}
              />
              <Tab.Screen 
                name={navigationPaths.PROFILE} 
                component={ProfileScreen} 
                options={{ 
                    title: 'Mon Profil',
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image 
                            style={{ tintColor: focused ? 'crimson' : 'black' }}
                                source={iconPaths.iconProfile}
                            />
                        )
                    }
                }}
               />
        </Tab.Navigator>
    );
}

export default TabNav;