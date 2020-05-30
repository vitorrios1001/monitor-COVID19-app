import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Animated, Dimensions, PanResponder } from 'react-native'

import ModalBase from 'react-native-modal'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const Modal = ({
  open,
  onClose,
  children,
  style,
  hideCloseButton = false,
}) => {


  return (
    <ModalBase
      testID="modal"
      isVisible={open}
      swipeDirection={['down']}
      onSwipeComplete={onClose}
      animationIn="slideInUp"
      animationInTiming={500}
      animationOut="slideOutDown"
      animationOutTiming={300}
      backdropColor="black"
      backdropOpacity={0.7}
      onBackButtonPress={() => onClose()}
      onBackdropPress={() => onClose()}
      deviceWidth={WIDTH}
      deviceHeight={HEIGHT}
      style={{ margin: 0 }}
      hasBackdrop
    >
      <View style={styles.overlay}>
        <View style={[styles.container]}>
          {
            !hideCloseButton && (
              <TouchableOpacity style={styles.containerCloseButton} onPress={onClose} >
                <View style={styles.closeButton} />
              </TouchableOpacity>
            )
          }
          <View style={[styles.content, style]} >
            {children}
          </View>
        </View>
      </View>
    </ModalBase>
  )
}

export default Modal

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: 'white',
    paddingTop: 8,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    position: 'relative',
  },
  content: {
    padding: 8,
  },
  containerCloseButton: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: 8,
  },
  closeButton: {
    backgroundColor: '#555',
    opacity: 0.7,
    height: 4,
    width: 80,
    borderRadius: 16,
  },
})
