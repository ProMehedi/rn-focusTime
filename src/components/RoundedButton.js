import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const RoundedButton = ({
  title,
  style = {},
  textStyle = {},
  size = 60,
  ...restProps
}) => {
  return (
    <TouchableOpacity style={[styles(size).container, style]}>
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
      borderColor: '#fff',
      borderWidth: 2,
    },
    text: {
      color: '#fff',
      fontSize: size / 2,
    },
  })

export default RoundedButton
