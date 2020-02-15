// @ts-nocheck
import React from 'react'

import { StyledInput, InputWrapper, Label } from './style'

export function InputField({ label, ...otherProps }) {
    return (
        <InputWrapper>
            <Label>{label}</Label>
            <StyledInput {...otherProps} />
        </InputWrapper>
    )
}
