// @ts-nocheck
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

import { CircleTouchable } from './style'
import { colors } from 'styles'

export function CircleButton({ ...touchableProps }) {
    return (
        <CircleTouchable {...touchableProps}>
            <Ionicons name={`md-add`} size={30} color={colors.white} />
        </CircleTouchable>
    )
}
