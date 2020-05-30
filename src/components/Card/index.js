import React from 'react'
import { StyleSheet, TouchableOpacity} from 'react-native'
import stylesDefault from '../../assets/styles/stylesDefault'

const Card = ({ children, style, ...props }) => {
  return (
    <TouchableOpacity
      style={[stylesDefault.SHADOW, stylesCard.card, style]}
      {...props}
    >
      {children}
    </TouchableOpacity>
  )
}

export default Card

const stylesCard = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 8,
  },
})
