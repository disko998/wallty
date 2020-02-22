import { View, Text, TextInput } from 'react-native'
import styled from 'styled-components'

import { colors } from 'styles'

export const StyledInput = styled(TextInput)`
    background: ${colors.white};
    border-radius: 5px
    width: 200px
    height: 50px
    padding: 10px
    flex: 1
`

export const InputWrapper = styled(View)`
    flex-direction: row
    align-items: center
    justify-content: center
    margin-bottom: 20px
`

export const Label = styled(Text)`
    color: ${colors.black}
    font-size: 18px
    margin-right: 10px
    min-width: 70px
    text-align: right
    font-weight: bold
`
