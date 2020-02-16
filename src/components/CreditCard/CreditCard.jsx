// @ts-nocheck
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'

import { MoneyStatus, CircleButton } from 'components'
import { CardWrapper, Earning, EarningLabel, StatusWrapper, styles, ButtonWrapper } from './style'
import { LayoutAnimation } from 'react-native'
import { defaultShadows, DEFAULT_HIT_SLOP } from 'styles'
import { formatMoney } from 'lib/utils'
import { colors } from 'styles'

export function CreditCard({ earning, spending, onTransaction }) {
    const navigation = useNavigation()
    const currentStatus = earning - spending

    const openModal = () => {
        navigation.navigate('Form', { onTransaction: onTransaction })
    }
    return (
        <CardWrapper style={defaultShadows}>
            <LinearGradient colors={[colors.mainBlue, colors.secondary]} style={styles.gradient}>
                <EarningLabel>Current status:</EarningLabel>
                <Earning>${formatMoney(currentStatus)}</Earning>
                <StatusWrapper>
                    <MoneyStatus value={formatMoney(earning)} label='earned:' style={styles.money} />
                    <MoneyStatus value={formatMoney(spending)} spend label='spent:' style={styles.money} />
                </StatusWrapper>
                <ButtonWrapper>
                    <CircleButton hitSlop={DEFAULT_HIT_SLOP} onPress={openModal} />
                </ButtonWrapper>
            </LinearGradient>
        </CardWrapper>
    )
}
