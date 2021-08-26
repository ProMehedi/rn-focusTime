import React from 'react'
import { StyleSheet, View } from 'react-native'

import RoundedButton from '../../components/RoundedButton'
import { spacing } from '../../utils/Sizes'

const Timing = ({ onChangeTime }) => {
  return (
    <View style={styles.container}>
      <RoundedButton title='5' onPress={() => onChangeTime(5)} />
      <RoundedButton title='10' onPress={() => onChangeTime(10)} />
      <RoundedButton title='15' onPress={() => onChangeTime(15)} />
      <RoundedButton title='20' onPress={() => onChangeTime(20)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: spacing.xl,
    paddingHorizontal: spacing.md,
  },
})

export default Timing
