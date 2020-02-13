import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text, Button } from "react-native";

import { HomeScreen, FormScreen } from 'screens'

const MainStack = createStackNavigator()
const RootStack = createStackNavigator()

function MainStackScreen() {
    return (
            <MainStack.Navigator headerMode='none'>
                <MainStack.Screen name='Home' component={HomeScreen} />
            </MainStack.Navigator>
    )
}

export default function RootStackScreen() {
    return (
        <NavigationContainer>
            <RootStack.Navigator mode='modal'>
              <RootStack.Screen
                name='Home'
                component={MainStackScreen}
                options={{ headerShown: false }}
              />
              <RootStack.Screen
              name='Form'
              component={FormScreen}
              />
          </RootStack.Navigator>
        </NavigationContainer>
    )
}
