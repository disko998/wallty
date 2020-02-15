import { TouchableOpacity, Text } from 'react-native'
import styled from 'styled-components'

import { colors } from 'styles'

export const ButtonWrapper = styled(TouchableOpacity)`
    background: ${colors.mainBlue};
    border-radius: 5px
    min-width: 150px
    padding: 15px
`

export const ButtonLabel = styled(Text)`
    color: ${colors.white}
    font-size: 18px
    text-align: center
`
