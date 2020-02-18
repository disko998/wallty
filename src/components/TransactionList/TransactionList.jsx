// @ts-nocheck
import React, { useContext } from 'react'

import { TransactionCard } from 'components'
import { TransactionWrapper, Label, EmptyText } from './style'

export function TransactionList({ transactions }) {
    return (
        <TransactionWrapper>
            <Label>transactions history</Label>
            {transactions.length ? (
                transactions.map(item => <TransactionCard item={item} key={item.id} />)
            ) : (
                <EmptyText>There is no any transactions yet...</EmptyText>
            )}
        </TransactionWrapper>
    )
}
