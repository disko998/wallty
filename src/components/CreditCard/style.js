import { View, Text, StyleSheet } from 'react-native'
import styled from 'styled-components'

import { colors } from 'styles'
import { MoneyStatus } from '../MoneyStatus'
import { CircleButton } from '../CircleButton'

export const styles = StyleSheet.create({
    gradient: {
        width: '100%',
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
    },
})

export const CardWrapper = styled(View)`
    background: ${colors.mainBlue}
    border-radius: 30px
    border-top-right-radius: 0
    border-top-left-radius: 0
    elevation: 2
    margin-bottom: 20px
`

export const BalanceLabel = styled(Text)`
    font-size: 14px
    text-transform: uppercase
    color: ${colors.lightGray}
`

export const CurrentBalance = styled(Text)`
    font-size: 36px;
    color: ${colors.white};
    margin-vertical: 10px;
`

export const StatusWrapper = styled(View)`
    justify-content: space-between
    align-items: center
    flex-direction: row
`

export const AddTransactionButton = styled(CircleButton)`
    position: absolute
    bottom: -15px
    right: 30px
    border-radius: 30px
`

export const IncomeExpense = styled(MoneyStatus)`
    margin-horizontal: 10px;
`
