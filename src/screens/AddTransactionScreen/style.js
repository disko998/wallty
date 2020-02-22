import { View, TouchableOpacity, Text } from 'react-native'
import styled from 'styled-components'

import { colors } from 'styles'

export const FormScreenWrapper = styled(View)`
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const FormWrapper = styled(View)`
    background: rgba(255, 255, 255, 0.5);
    border-radius: 30px;
    padding: 20px;
    align-items: center
    justify-content: center
    width: 80%
`

export const FormTitle = styled(Text)`
    color: ${colors.black}
    font-size: 23px
    text-align: center
    font-weight: bold
    margin-bottom: 30px;
`

export const ButtonLabel = styled(Text)`
    color: ${colors.white}
    font-size: 18px
    text-align: center
`

export const CloseButton = styled(TouchableOpacity)`
    align-self: flex-start;
    margin-bottom: 20px;
`

export const SwitchWrapper = styled(View)`
    flex-direction: column;
    margin-bottom: 20px;
    flex-direction: column
    justify-content: center
    align-items: center
    padding: 6px
`

export const SwitchLabel = styled(Text)`
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
`
