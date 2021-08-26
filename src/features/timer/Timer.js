import React from 'react'
import { Platform, StyleSheet, Text, Vibration, View } from 'react-native'
import * as Progress from 'react-native-progress'
import { useKeepAwake } from 'expo-keep-awake'

import CountDown from '../../components/CountDown'
import RoundedButton from '../../components/RoundedButton'
import { colors } from '../../utils/Colors'
import { fontSize, spacing } from '../../utils/Sizes'
import Timing from './Timing'

const DEFAULT_TIME = 0.1

const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  const [minutes, setMinutes] = React.useState(DEFAULT_TIME)
  const [isStarted, setIsStarted] = React.useState(false)
  const [progress, setProgress] = React.useState(1)

  // Keeping App Awake
  // useKeepAwake()

  const onProgress = (value) => {
    setProgress(value)
  }

  // Create Vibration
  const vibrate = () => {
    if (Platform.OS === 'ios') {
      const inverval = setInterval(() => Vibration.vibrate(), 1000)
      setTimeout(() => {
        clearInterval(inverval)
        Vibration.cancel()
      }, 5000)
    } else {
      Vibration.vibrate(10000)
    }
  }

  // Reset States
  const onEnd = () => {
    vibrate()
    setIsStarted(false)
    setMinutes(DEFAULT_TIME)
    setProgress(1)
  }

  // Back to main screen
  React.useEffect(() => {
    if (progress === 0) {
      onTimerEnd()
    }
  }, [progress])

  // Change Time & Reset States
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
          onEnd={onEnd}
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
          size={120}
          onPress={() => setIsStarted(!isStarted)}
        />
      </View>
      <View style={styles.clearSubject}>
        <RoundedButton
          style={{ borderColor: 'red' }}
          textStyle={{ color: 'red' }}
          title='❌'
          size={60}
          onPress={clearSubject}
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
    flex: 1,
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
  clearSubject: {
    marginLeft: spacing.lg,
    marginBottom: spacing.lg,
  },
})

export default Timer
