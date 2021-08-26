import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import CountDown from '../../components/CountDown'
import RoundedButton from '../../components/RoundedButton'

import { colors } from '../../utils/Colors'
import { fontSize, spacing } from '../../utils/Sizes'

const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = React.useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.countDown}>
        <CountDown isPaused={!isStarted} />
      </View>
      <View>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={styles.btnWrapper}>
        <RoundedButton
          title={isStarted ? '⏸' : '⏩'}
          size={150}
          onPress={() => setIsStarted(!isStarted)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.md,
  },
  countDown: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.xxl,
  },
  title: {
    color: colors.white,
    textAlign: 'center',
    fontSize: fontSize.xxl,
    fontWeight: 'bold',
  },
  task: {},
  btnWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: spacing.xxl,
  },
})

export default Timer
