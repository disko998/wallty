// @ts-nocheck
import React, { useContext } from 'react'
import moment from 'moment'

import { MoneySvg } from 'components'
import { colors } from 'styles'
import { getPercentage, formatMoney } from 'lib/utils'
import { EarningContext } from 'lib/contexts'
import { CardWrapper, Title, FlexColumn, Date, BalanceStatus, Percentage, Amount, FlexRow } from './style'

export function TransactionCard({ item: { title, date, amount, pay } }) {
    const earning = useContext(EarningContext)
    const formatedDate = moment(date).format('DD.MM.YYYY')

    return (
        <CardWrapper>
            <FlexRow>
                <MoneySvg color={pay ? colors.danger : colors.success} />
                <FlexColumn>
                    <Title>{title}</Title>
                    <Date>{formatedDate}</Date>
                </FlexColumn>
            </FlexRow>
            <FlexColumn>
                <Amount value={formatMoney(amount)} expense={pay} />
                <BalanceStatus>
                    ${formatMoney(earning)}
                    <Percentage>
                        {' '}
                        {pay ? '-' : '+'} ({getPercentage(amount, earning)}%)
                    </Percentage>
                </BalanceStatus>
            </FlexColumn>
        </CardWrapper>
    )
}
