import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Dimensions, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Provider } from 'react-redux';
import AddTaskModal from './components/AddTaskModal';
import { store } from './redux';
import Index from './views/Index';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import Home from './views/Home';
import Profile from './views/Profile';

export default function App() {

    const Tab = createBottomTabNavigator();

    return (
        <Provider store={store}>

                <NavigationContainer>

                    <Tab.Navigator screenOptions={{ tabBarStyle: styles.bottomBar, tabBarActiveTintColor: "#F77777", tabBarInactiveTintColor: "#000000", tabBarShowLabel: false }}>
                        
                        <Tab.Screen name="Home" component={Home} options={{ headerShown: false, tabBarIcon: ((color) => <Icon name="home" size={32} color="#000000" />) }} />
                        <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false, tabBarIcon: ((color) => <Icon name="person" size={32} color="#000000" />) }} />
                    
                    </Tab.Navigator>

                </NavigationContainer>

                {/*<StatusBar style="auto" />*/}
        </Provider>
    );
}

const styles = StyleSheet.create({
    bottomBar: {
        backgroundColor: "#F7F7F7",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        height: Dimensions.get("window").height / 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    }
});