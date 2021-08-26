import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { colors } from '../utils/Colors'
import { fontSize, spacing } from '../utils/Sizes'

const NotFound = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nothing Found!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    marginTop: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  text: {
    color: colors.red,
    fontSize: fontSize.lg,
    fontWeight: 'bold',
  },
})

export default NotFound
