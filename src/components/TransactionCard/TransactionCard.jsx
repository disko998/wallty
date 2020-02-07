// @ts-nocheck
import React from 'react'

import { MoneyStatus, MoneySvg } from 'components'
import {
    CardWrapper,
    Title,
    ColumnWrapper,
    Date,
    EarnedMoney,
    Percentage,
    additionalMonyStyle,
    InfoWrapper,
} from './style'
import { colors } from 'styles'

export function TransactionCard({ item: { title, date, value }, ...otherProps }) {
    return (
        <CardWrapper {...otherProps}>
            <InfoWrapper>
                <MoneySvg color={value < 0 ? colors.danger : colors.success} />
                <ColumnWrapper>
                    <Title>{title}</Title>
                    <Date>{date.toLocaleDateString()}</Date>
                </ColumnWrapper>
            </InfoWrapper>
            <ColumnWrapper>
                <MoneyStatus value={value} spend={value < 0 ? true : false} style={additionalMonyStyle} />
                <EarnedMoney>
                    $125,890.23
                    <Percentage> {value < 0 ? '-' : '+'} (10.23%)</Percentage>
                </EarnedMoney>
            </ColumnWrapper>
        </CardWrapper>
    )
}
