import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Switch } from 'react-native'

import { CustomButton, InputField } from 'components'
import { FormScreenWrapper, FormWrapper, CloseButton, SwitchWrapper, SwitchLabel } from './style'
import { DEFAULT_HIT_SLOP } from 'styles'

export function FormScreen({ navigation }) {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [payment, setPayment] = useState(false)

    return (
        <FormScreenWrapper>
            <FormWrapper>
                <CloseButton onPress={navigation.goBack} hitSlop={DEFAULT_HIT_SLOP}>
                    <Ionicons name={`md-close`} size={30} color='white' />
                </CloseButton>
                <InputField label='Naslov:' value={title} onChangeText={setTitle} />
                <InputField label='Vrednost:' value={amount} onChangeText={setAmount} />
                <SwitchWrapper>
                    <Switch value={payment} onValueChange={setPayment} />
                    <SwitchLabel>placanje</SwitchLabel>
                </SwitchWrapper>
                <CustomButton label='Pay now' />
            </FormWrapper>
        </FormScreenWrapper>
    )
}
