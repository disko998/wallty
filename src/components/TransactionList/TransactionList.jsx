// @ts-nocheck
import React from 'react'

import { TransactionCard } from 'components'
import { TransactionWrapper, TransactionFlatList, Label } from './style'

const DATA = [
    { id: '123dxa412423', title: 'Some title', date: new Date(), value: 1500 },
    { id: '123d21x412423', title: 'Some title', date: new Date(), value: -500 },
    { id: '12das12423', title: 'Some title', date: new Date(), value: 3000 },
    { id: '1gsadasd2423', title: 'Some title', date: new Date(), value: -230.23 },
    { id: '123dg2132423', title: 'Some title', date: new Date(), value: 1412.63 },
    { id: '123d312315a12423', title: 'Some title', date: new Date(), value: -5231.52 },
]

export function TransactionList({ ...otherProps }) {
    return (
        <TransactionWrapper {...otherProps}>
            <Label>isorija tansakcije</Label>
            {DATA.map(item => (
                <TransactionCard item={item} key={item.id} />
            ))}
        </TransactionWrapper>
    )
}
