import { View, Text } from 'react-native'
import styled from 'styled-components'

import { colors } from 'styles'

export const additionalMonyStyle = {
    alignSelf: 'flex-end',
}

export const CardWrapper = styled(View)`
    background: ${colors.white}
    margin: 5px
    margin-bottom: 10px
    padding: 10px
    elevation: 5
    flex-direction: row
    align-items: center
    justify-content: space-between
    border-radius: 5px
`

export const ColumnWrapper = styled(View)`
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

export const EarnedMoney = styled(Date)`
    color: ${colors.black};
`

export const Percentage = styled(EarnedMoney)`
    font-size: 14px
    color: ${colors.darkGray}
`
export const InfoWrapper = styled(View)`
    flex-direction: row;
`
