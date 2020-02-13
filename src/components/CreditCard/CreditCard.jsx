// @ts-nocheck
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import { MoneyStatus, CircleButton } from 'components'
import { CardWrapper, Earning, EarningLabel, StatusWrapper, additionMonyStyle, ButtonWrapper } from './style'
import { defaultShadows } from 'styles'

export function CreditCard() {
    const navigation = useNavigation();

    const openModal = () => {
        navigation.navigate('Form')
    }

    return (
        <CardWrapper style={defaultShadows}>
            <EarningLabel>ukupno zaradjeno:</EarningLabel>
            <Earning>$125,890.34</Earning>
            <StatusWrapper>
                <MoneyStatus value={1900} label='trenutno:' style={additionMonyStyle} />
                <MoneyStatus value={5000} spend label='potroseno:' style={additionMonyStyle} />
            </StatusWrapper>
            <ButtonWrapper>
                <CircleButton onPress={openModal} />
            </ButtonWrapper>
        </CardWrapper>
    )
}
