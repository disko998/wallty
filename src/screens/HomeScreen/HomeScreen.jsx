import React, { useState } from 'react'
import { StatusBar } from 'react-native'

import { CreditCard, TransactionList } from 'components'
import { HomeWrapper } from './style'

const DATA = [
    { id: '123dxa4hsd12423', title: 'Title 1', amount: 500, date: new Date(), pay: true },
    { id: '123dxa1412423', title: 'Title 2', amount: 1600, date: new Date(), pay: false },
    { id: '123dsfdxa4122423', title: 'Title 3', amount: 200, date: new Date(), pay: true },
    { id: '123dxhhsa412423', title: 'Title 4', amount: 1730.32, date: new Date(), pay: false },
    { id: '123d63xa412423', title: 'Title 3', amount: 400, date: new Date(), pay: true },
]

export const HomeScreen = () => {
    const [transactions, setTransactions] = useState(DATA)

    const earning = transactions.reduce((value, trans) => {
        return trans.pay ? value : value + trans.amount
    }, 0)
    const spending = transactions.reduce((value, trans) => {
        return trans.pay ? value + trans.amount : value
    }, 0)
    const sortedTransactions = transactions.sort((a, b) => b.date - a.date)

    const onTransaction = transaction => {
        setTransactions([...transactions, transaction])
    }

    return (
        <HomeWrapper>
            <StatusBar barStyle='light-content' />
            <CreditCard earning={earning} spending={spending} onTransaction={onTransaction} />
            <TransactionList transactions={sortedTransactions} earning={earning} />
        </HomeWrapper>
    )
}
