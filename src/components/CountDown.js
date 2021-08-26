import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { colors } from '../utils/Colors'
import { fontSize, spacing } from '../utils/Sizes'

// Minutes to millis
const minutesToMillis = (minutes) => {
  return minutes * 60 * 1000
}

// Millis to minutes
const formateTime = (milis) => {
  const minutes = Math.floor(milis / 60000)
  const seconds = Math.floor((milis % 60000) / 1000)
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}

const CountDown = ({ time = 30, isPaused }) => {
  const [milis, setMilis] = React.useState(minutesToMillis(time))

  const interval = React.useRef(null)

  const countDown = () => {
    setMilis((time) => {
      if (time === 0) {
        return time
      }
      const timeLeft = time - 1000
      return timeLeft
    })
  }

  React.useEffect(() => {
    interval.current = setInterval(countDown, 1000)
    return () => clearInterval(interval.current)
  }, [])

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
