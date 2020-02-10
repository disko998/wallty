import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'

import { colors } from 'styles'

export const CircleTouchable = styled(TouchableOpacity)`
    justify-content: center
    align-items: center
    border-radius: 50px
    background: ${colors.blue}
    width: 50px
    height: 50px
`
