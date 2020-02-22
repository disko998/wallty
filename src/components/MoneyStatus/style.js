import { View, Text } from 'react-native'
import styled from 'styled-components'

import { colors } from 'styles'

export const MoneyWrapper = styled(View)`
    flex-direction: row
    align-items: center
    justify-content: center
`

export const Value = styled(Text)`
    font-size: 14px
    font-weight: bold
    text-transform: uppercase
    color: ${props => (props.expense ? colors.danger : colors.success)}
    marginRight: 5px
`

export const Label = styled(Text)`
    font-size: 9px
    text-transform: uppercase
    color: ${colors.lightGray}
    margin-right: 5px
`
