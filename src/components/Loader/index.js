import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator, Dimensions } from 'react-native'
import { Body } from '../ui/typography'
import stylesDefault from '../../assets/styles/stylesDefault'

const HEIGHT = Dimensions.get('window').height

const Loader = ({ size = 'large', text = null }) => {
  return (
    <View style={[stylesDefault.COL, styles.container]}>
      <ActivityIndicator color="#800080" size={size} />
      {text && <Body style={styles.description}>{text}</Body>}
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: HEIGHT,
  },
  description: {
    marginTop: 8,
    textAlign: 'center',
  },
})
