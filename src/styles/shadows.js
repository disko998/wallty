import { Platform } from 'react-native'
import { colors } from './colors'

export const defaultShadows =
    Platform.OS === 'android'
        ? { elevation: 5 }
        : {
              shadowColor: colors.black,
              shadowOffset: {
                  width: 0,
                  height: 5,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
          }

export const softShadows =
    Platform.OS === 'android'
        ? { elevation: 2 }
        : {
              shadowColor: colors.black,
              shadowOffset: {
                  width: 0,
                  height: 1,
              },
              shadowOpacity: 0.2,
              shadowRadius: 1.41,
          }
