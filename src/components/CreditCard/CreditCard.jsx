// @ts-nocheck
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { formatMoney } from 'lib/utils'
import { defaultShadows, DEFAULT_HIT_SLOP } from 'styles'
import {
    CardWrapper,
    CurrentBalance,
    BalanceLabel,
    StatusWrapper,
    styles,
    AddTransactionButton,
    IncomeExpense,
} from './style'

export function CreditCard({ income, expense, onTransaction }) {
    const navigation = useNavigation()
    const currentStatus = income - expense

    const openModal = () => {
        navigation.navigate('AddTransaction', { onTransaction: onTransaction })
    }
    return (
        <CardWrapper style={[defaultShadows, styles.gradient]}>
            <BalanceLabel>Your balance:</BalanceLabel>
            <CurrentBalance>${formatMoney(currentStatus)}</CurrentBalance>
            <StatusWrapper>
                <IncomeExpense value={formatMoney(income)} label='income:' />
                <IncomeExpense value={formatMoney(expense)} expense label='expense:' />
            </StatusWrapper>
            <AddTransactionButton hitSlop={DEFAULT_HIT_SLOP} onPress={openModal} />
        </CardWrapper>
    )
}
