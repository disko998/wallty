// @ts-nocheck
import React from 'react'

import { TransactionCard } from 'components'
import { TransactionWrapper, Label } from './style'

export function TransactionList({ transactions, earning, ...otherProps }) {
    return (
        <TransactionWrapper {...otherProps}>
            <Label>transactions history</Label>
            {transactions.map(item => (
                <TransactionCard item={item} key={item.id} earning={earning} />
            ))}
        </TransactionWrapper>
    )
}
