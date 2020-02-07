import React from 'react'
import { StatusBar } from 'react-native'

import { CreditCard, TransactionList } from 'components'
import { HomeWrapper } from './style'

export const HomeScreen = () => {
    return (
        <HomeWrapper>
            <StatusBar barStyle='light-content' />
            <CreditCard />
            <TransactionList />
        </HomeWrapper>
    )
}
