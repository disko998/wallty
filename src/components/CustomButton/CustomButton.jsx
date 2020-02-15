// @ts-nocheck
import React from 'react'

import { ButtonWrapper, ButtonLabel } from './style'

export function CustomButton({ label, ...touchableProps }) {
    return (
        <ButtonWrapper {...touchableProps}>
            <ButtonLabel>{label}</ButtonLabel>
        </ButtonWrapper>
    )
}
