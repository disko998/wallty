// @ts-nocheck
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

import { MoneyWrapper, Value, Label } from './style'
import { colors } from 'styles'

export function MoneyStatus({ value, expense, label, ...otherProps }) {
    return (
        <MoneyWrapper {...otherProps}>
            {label && <Label>{label}</Label>}
            <Value expense={expense}>${value}</Value>
            <Ionicons
                name={`md-arrow-${expense ? 'down' : 'up'}`}
                size={15}
                color={expense ? colors.danger : colors.success}
            />
        </MoneyWrapper>
    )
}
