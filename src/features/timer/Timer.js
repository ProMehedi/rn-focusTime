import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CountDown from '../../components/CountDown'

import { colors } from '../../utils/Colors'
import { fontSize } from '../../utils/Sizes'

const Timer = ({ focusSubject }) => {
  return (
    <View style={styles.container}>
      <CountDown />
      <View>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.white,
    textAlign: 'center',
    fontSize: fontSize.xxl,
    fontWeight: 'bold',
  },
  task: {},
})

export default Timer
