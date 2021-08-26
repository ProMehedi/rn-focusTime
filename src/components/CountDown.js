import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { colors } from '../utils/Colors'
import { fontSize, spacing } from '../utils/Sizes'

// Minutes to millis
const minutesToMillis = (min) => min * 60 * 1000

// Millis to minutes
const formateTime = (milis) => {
  const minutes = Math.floor(milis / 1000 / 60) % 60
  const seconds = Math.floor(milis / 1000) % 60
  return `${minutes < 10 ? 0 : ''}${minutes}:${
    seconds < 10 ? '0' : ''
  }${seconds}`
}

const CountDown = ({ minutes = 5, isPaused = false, onProgress }) => {
  const [milis, setMilis] = React.useState(minutesToMillis(minutes))

  const interval = React.useRef(null)

  const countDown = () => {
    let timeLeft
    setMilis((time) => {
      if (time === 0) {
        return time
      }
      timeLeft = time - 1000
      return timeLeft
    })
    if (timeLeft > 0) {
      onProgress(timeLeft / minutesToMillis(minutes))
    } else {
      onProgress(0)
    }
  }

  React.useEffect(() => {
    setMilis(minutesToMillis(minutes))
  }, [minutes])

  React.useEffect(() => {
    if (!isPaused) {
      interval.current = setInterval(countDown, 1000)
      return () => clearInterval(interval.current)
    }
  }, [isPaused])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{formateTime(milis)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: fontSize.xxxxxl,
    fontWeight: 'bold',
    color: colors.white,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
    borderRadius: 6,
  },
})

export default CountDown
