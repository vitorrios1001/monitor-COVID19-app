import React from 'react'

import { StyleSheet, Text } from 'react-native'

const Body = ({
  children,
  color = '#555',
  fontSize = 16,
  textAlign = 'left',
  style,
}) => {
  return (
    <Text style={[styles.commonm, { color, fontSize, textAlign }, style]}>
      {children}
    </Text>
  )
}

const Title = ({
  children,
  color = '#555',
  fontSize = 24,
  textAlign = 'left',
  style,
}) => {
  return (
    <Text style={[styles.title, styles.commonm, { color, fontSize, textAlign, }, style]}>
      {children}
    </Text>
  )
}

export { Title, Body }

const styles = StyleSheet.create({
  commonm: {
    letterSpacing: 1.2,
  },
  title: {
    fontWeight: '500',
  },
})
