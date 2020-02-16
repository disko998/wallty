// @ts-nocheck
import React from 'react'
import { Dimensions } from 'react-native'
import { LineChart } from 'react-native-chart-kit'

import { color } from 'styles'
import { ChartWrapper, styles } from './style'

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
            ],
        },
    ],
}

const chartConfig = {
    backgroundColor: color.mainBlue,
    backgroundGradientFrom: color.mainBlue,
    backgroundGradientTo: color.mainBlue,
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
        borderRadius: 0,
    },
    propsForDots: {
        r: '6',
        strokeWidth: '2',
        stroke: '#ffa726',
    },
}

export function MoneyChart() {
    return (
        <ChartWrapper>
            <LineChart
                data={data}
                width={Dimensions.get('window').width}
                height={250}
                yAxisLabel='$'
                yAxisSuffix='k'
                chartConfig={chartConfig}
                style={styles.graph}
            />
        </ChartWrapper>
    )
}
