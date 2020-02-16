// @ts-nocheck
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { MoneyStatus, CircleButton } from 'components'
import { CardWrapper, Earning, EarningLabel, StatusWrapper, additionMonyStyle, ButtonWrapper } from './style'
import { defaultShadows } from 'styles'
import { formatMoney } from 'lib/utils'

export function CreditCard({ earning, spending, onTransaction }) {
    const navigation = useNavigation()
    const currentStatus = earning - spending

    const openModal = () => {
        navigation.navigate('Form', { onTransaction: onTransaction })
    }
    return (
        <CardWrapper style={defaultShadows}>
            <EarningLabel>Amount earned:</EarningLabel>
            <Earning>${formatMoney(earning)}</Earning>
            <StatusWrapper>
                <MoneyStatus value={formatMoney(currentStatus)} label='current:' style={additionMonyStyle} />
                <MoneyStatus value={formatMoney(spending)} spend label='spent:' style={additionMonyStyle} />
            </StatusWrapper>
            <ButtonWrapper>
                <CircleButton onPress={openModal} />
            </ButtonWrapper>
        </CardWrapper>
    )
}
