import { View, Text } from 'react-native'
import styled from 'styled-components'

import { color } from 'styles'

export const additionMonyStyle = {
    marginHorizontal: 10,
}

export const CardWrapper = styled(View)`
    width: 100%
    height: 250px
    background: ${color.creditCard.background}
    justify-content: center
    align-items: center
    border-radius: 30px
    elevation: 2
    margin-bottom: 20px
`

export const EarningLabel = styled(Text)`
    font-size: 14px
    text-transform: uppercase
    color: ${color.gray}
`

export const Earning = styled(Text)`
    font-size: 36px;
    color: ${color.white};
    margin-vertical: 10px;
`

export const StatusWrapper = styled(View)`
    justify-content: space-between
    align-items: center
    flex-direction: row
`

export const ButtonWrapper = styled(View)`
    elevation: 5
    position: absolute
    bottom: -20px
    right: 30px
    border-radius: 30px
`
