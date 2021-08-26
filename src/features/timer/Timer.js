import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import CountDown from '../../components/CountDown'
import RoundedButton from '../../components/RoundedButton'
import * as Progress from 'react-native-progress'

import { colors } from '../../utils/Colors'
import { fontSize, spacing } from '../../utils/Sizes'
import Timing from './Timing'

const Timer = ({ focusSubject }) => {
  const [minutes, setMinutes] = React.useState(5)
  const [isStarted, setIsStarted] = React.useState(false)
  const [progress, setProgress] = React.useState(1)

  const onProgress = (value) => {
    setProgress(value)
  }

  const changeTime = (time) => {
    setIsStarted(false)
    setMinutes(time)
    setProgress(1)
  }

  return (
    <View style={styles.container}>
      <View style={styles.countDown}>
        <CountDown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={onProgress}
        />
        <Progress.Bar
          style={{ marginTop: spacing.lg }}
          color='red'
          progress={progress}
          width={250}
        />
      </View>
      <View style={styles.taskWraper}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>"{focusSubject}"</Text>
      </View>
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={changeTime} />
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
    paddingTop: spacing.xxl,
  },
  taskWraper: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.xxxl,
  },
  title: {
    color: colors.white,
    textAlign: 'center',
    fontSize: fontSize.xxl,
    fontWeight: 'bold',
    marginBottom: spacing.md,
  },
  task: {
    color: colors.white,
    fontSize: fontSize.xl,
  },
  btnWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Timer
