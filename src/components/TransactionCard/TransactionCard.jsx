// @ts-nocheck
import React from 'react'
import moment from 'moment'

import { MoneyStatus, MoneySvg } from 'components'
import { colors } from 'styles'
import { getPercentage, formatMoney } from 'lib/utils'
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

export function TransactionCard({ item: { title, date, amount, pay }, earning, ...otherProps }) {
    const formatedDate = moment(date).format('DD.MM.YYYY HH:mm')
    return (
        <CardWrapper {...otherProps}>
            <InfoWrapper>
                <MoneySvg color={pay ? colors.danger : colors.success} />
                <ColumnWrapper>
                    <Title>{title}</Title>
                    <Date>{formatedDate}</Date>
                </ColumnWrapper>
            </InfoWrapper>
            <ColumnWrapper>
                <MoneyStatus value={formatMoney(amount)} spend={pay} style={additionalMonyStyle} />
                <EarnedMoney>
                    ${formatMoney(earning)}
                    <Percentage>
                        {' '}
                        {pay ? '-' : '+'} ({getPercentage(amount, earning)}%)
                    </Percentage>
                </EarnedMoney>
            </ColumnWrapper>
        </CardWrapper>
    )
}
