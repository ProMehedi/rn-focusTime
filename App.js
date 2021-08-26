import React, { useState } from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import Focus from './src/features/focus/Focus'
import Timer from './src/features/timer/Timer'
import { colors } from './src/utils/Colors'

const App = () => {
  const [focusSubject, setFocusSubject] = useState('Something')

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => {
            setFocusSubject(null)
          }}
        />
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    paddingTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
  },
})

export default App
