import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../utils/Colors'

const RoundedButton = ({
  title,
  style = {},
  textStyle = {},
  size = 60,
  ...restProps
}) => {
  return (
    <TouchableOpacity style={[styles(size).container, style]} {...restProps}>
      <Text style={[styles(size).text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = (size) =>
  StyleSheet.create({
    container: {
      width: size,
      height: size,
      borderRadius: size / 2,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: colors.white,
      borderWidth: 2,
    },
    text: {
      color: colors.white,
      fontSize: size / 2.5,
    },
  })

export default RoundedButton
