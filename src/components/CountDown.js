import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { colors } from '../utils/Colors'
import { fontSize } from '../utils/Sizes'

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

const CountDown = ({ time = 5, isPaused }) => {
  const [milis, setMilis] = React.useState(minutesToMillis(time))

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{formateTime(milis)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: fontSize.xxxxl,
    fontWeight: 'bold',
    color: colors.white,
    backgroundColor: 'rgba(94,132,226,0.3)',
  },
})

export default CountDown
