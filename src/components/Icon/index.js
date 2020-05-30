import React from 'react'
import { StyleSheet, Image } from 'react-native'

import { ICONS } from '../../helpers/images'

const Icon = ({ name, size = 'medium', style }) => {
  return (
    <>
      <Image style={[styles.commonm, styles[size], style]} source={ICONS[name]} />
    </>
  )
}

export default Icon

const styles = StyleSheet.create({
  commonm: {
    resizeMode: 'stretch',
  },
  small: {
    width: 45,
    height: 40,
    margin: 4,
  },
  medium: {
    width: 60,
    height: 50,
    margin: 2,
  },
  big: {
    width: 90,
    height: 75,
    margin: 2,
  },
})
