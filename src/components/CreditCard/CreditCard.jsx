// @ts-nocheck
import React from 'react'

import { MoneyStatus, CircleButton } from 'components'
import { CardWrapper, Earning, EarningLabel, StatusWrapper, additionMonyStyle } from './style'

export function CreditCard() {
    return (
        <CardWrapper>
            <EarningLabel>ukupno zaradjeno:</EarningLabel>
            <Earning>$125,890.34</Earning>
            <StatusWrapper>
                <MoneyStatus value={1900} label='trenutno:' style={additionMonyStyle} />
                <MoneyStatus value={5000} spend label='potroseno:' style={additionMonyStyle} />
            </StatusWrapper>
            <CircleButton />
        </CardWrapper>
    )
}
