import { View, Text, FlatList } from 'react-native'
import styled from 'styled-components'

import { colors } from 'styles'

export const TransactionWrapper = styled(View)`
    flex: 1;
    padding: 20px;
`

export const TransactionFlatList = styled(FlatList)`
    flex: 1;
`

export const Label = styled(Text)`
    font-size: 14px
    margin-bottom: 10px
    text-transform: uppercase
    color: ${colors.darkGray}
`
