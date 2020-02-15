import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

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
            <RootStack.Navigator headerMode='none' mode='modal'>
                <RootStack.Screen name='Home' component={MainStackScreen} />
                <RootStack.Screen
                    name='Form'
                    component={FormScreen}
                    options={{
                        cardStyle: {
                            backgroundColor: 'rgba(0,0,0,0.8)',
                        },
                    }}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}
