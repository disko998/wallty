import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text, Button } from "react-native";

import { HomeScreen } from 'screens'

const MainStack = createStackNavigator()
const RootStack = createStackNavigator()

function ModalScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button onPress={() => navigation.goBack()} title="Dismiss" />
      </View>
    );
  }

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
             name='Main'
             component={MainStackScreen}
             options={{ headerShown: false }}
            />
            <RootStack.Screen
             name='InputForm'
             component={ModalScreen}
            />
        </RootStack.Navigator>
        </NavigationContainer>
    )
}
