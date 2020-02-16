import { View, Text, StyleSheet } from 'react-native'
import styled from 'styled-components'

import { colors } from 'styles'

export const ChartWrapper = styled(View)`
    position: absolute;
`

export const styles = StyleSheet.create({
    graph: {
        borderRadius: 30,
    },
})
