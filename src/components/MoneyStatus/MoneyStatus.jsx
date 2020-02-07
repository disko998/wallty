// @ts-nocheck
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

import { MoneyWrapper, Value, Label } from './style'
import { colors } from 'styles'

export function MoneyStatus({ value, spend, label, ...otherProps }) {
    return (
        <MoneyWrapper {...otherProps}>
            {label && <Label>{label}</Label>}
            <Value spend={spend}>${value}</Value>
            <Ionicons
                name={`md-arrow-${spend ? 'down' : 'up'}`}
                size={15}
                color={spend ? colors.danger : colors.success}
            />
        </MoneyWrapper>
    )
}
