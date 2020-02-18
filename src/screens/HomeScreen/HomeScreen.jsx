import React, { useState, useEffect } from 'react'
import { StatusBar, AsyncStorage } from 'react-native'
import moment from 'moment'

import { CreditCard, TransactionList } from 'components'
import { EarningContext } from 'lib/contexts'
import { HomeWrapper } from './style'

export const HomeScreen = () => {
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await AsyncStorage.getItem('TRANSACTION_KEY')
            const trans = JSON.parse(result) || []
            setTransactions(trans)
        }

        fetchData()
    }, [])

    const earning = transactions.reduce((value, trans) => {
        return trans.pay ? value : value + trans.amount
    }, 0)
    const spending = transactions.reduce((value, trans) => {
        return trans.pay ? value + trans.amount : value
    }, 0)
    const sortedTransactions = transactions.sort(
        (a, b) => moment(b.date).milliseconds(Number) - moment(a.date).milliseconds(Number)
    )
    const onTransaction = transaction => {
        const newTransaction = [...transactions, transaction]
        AsyncStorage.setItem('TRANSACTION_KEY', JSON.stringify(newTransaction))
        setTransactions([...transactions, transaction])
    }

    // AsyncStorage.clear()
    return (
        <HomeWrapper>
            <StatusBar barStyle='light-content' />
            <CreditCard earning={earning} spending={spending} onTransaction={onTransaction} />
            <EarningContext.Provider value={earning}>
                <TransactionList transactions={sortedTransactions} />
            </EarningContext.Provider>
        </HomeWrapper>
    )
}
