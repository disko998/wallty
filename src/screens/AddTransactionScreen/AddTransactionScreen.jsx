import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Switch, Alert } from 'react-native'
import moment from 'moment'

import { randomId, formatMoney } from 'lib/utils'
import { CustomButton, InputField } from 'components'
import { DEFAULT_HIT_SLOP } from 'styles'
import { FormScreenWrapper, FormWrapper, CloseButton, SwitchWrapper, SwitchLabel, FormTitle } from './style'

export const AddTransactionScreen = ({ navigation, route }) => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [payment, setPayment] = useState(false)
    const { onTransaction } = route.params

    const submitForm = () => {
        if (!title.length || !amount.length) {
            alert('Some of the inputs are empty')
            return
        }

        const amountToFloat = parseFloat(amount)

        if (isNaN(amountToFloat) || amountToFloat <= 0) {
            alert('You set bad value for amount')
            return
        }

        const transaction = {
            id: randomId(),
            title,
            pay: payment,
            amount: amountToFloat,
            date: moment(),
        }

        Alert.alert(
            'New Transaction',
            `Processed with ${transaction.pay ? 'paying' : 'adding'} $${formatMoney(transaction.amount)}`,
            [
                {
                    text: 'Cancel',
                    onPress: () => navigation.goBack(),
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: () => {
                        onTransaction(transaction)
                        navigation.goBack()
                    },
                },
            ],
            { cancelable: false }
        )
    }

    return (
        <FormScreenWrapper>
            <FormWrapper>
                <CloseButton onPress={navigation.goBack} hitSlop={DEFAULT_HIT_SLOP}>
                    <Ionicons name={`md-close`} size={30} color='white' />
                </CloseButton>
                <FormTitle>Add New Transaction</FormTitle>
                <InputField maxLength={15} label='Title:' value={title} onChangeText={setTitle} />
                <InputField
                    maxLength={8}
                    keyboardType='numeric'
                    label='Amount:'
                    value={amount}
                    onChangeText={setAmount}
                />
                <SwitchWrapper>
                    <Switch value={payment} onValueChange={setPayment} />
                    <SwitchLabel>income/expense</SwitchLabel>
                </SwitchWrapper>
                <CustomButton label='Add Transaction' onPress={submitForm} />
            </FormWrapper>
        </FormScreenWrapper>
    )
}
