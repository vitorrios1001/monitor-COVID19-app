import { StyleSheet, Platform } from 'react-native'

const stylesDefault = StyleSheet.create({
  ROW: {
    display: 'flex',
    flexDirection: 'row',
  },
  COL: {
    display: 'flex',
    flexDirection: 'column',
  },
  SHADOW: {
    ...Platform.select({
      ios: {
        shadowColor: '#007aff',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 6,
      },
    }),
  },
})

export default stylesDefault
