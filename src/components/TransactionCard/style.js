import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

import { colors } from 'styles'
import { MoneyStatus } from '../MoneyStatus'

export const Amount = styled(MoneyStatus)`
    align-self: flex-end;
`

export const CardWrapper = styled(TouchableOpacity)`
    background: ${colors.white}
    margin: 5px
    margin-bottom: 10px
    padding: 10px
    elevation: 2
    flex-direction: row
    align-items: center
    justify-content: space-between
    border-radius: 5px
`

export const FlexColumn = styled(View)`
    flex-direction: column;
`

export const Title = styled(Text)`
    font-weight: 600
    font-size: 14px
    text-transform: capitalize
    color: ${colors.black}
`

export const Date = styled(Text)`
    font-size: 14px
    color: ${colors.darkGray}
`

export const BalanceStatus = styled(Date)`
    color: ${colors.black};
`

export const Percentage = styled(BalanceStatus)`
    font-size: 14px
    color: ${colors.darkGray}
`
export const FlexRow = styled(View)`
    flex-direction: row;
`
