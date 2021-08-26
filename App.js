import React, { useEffect } from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import Focus from './src/features/focus/Focus'
import Timer from './src/features/timer/Timer'
import { colors } from './src/utils/Colors'

const App = () => {
  const [focusSubject, setFocusSubject] = React.useState(null)
  const [focusHistory, setFocusHistory] = React.useState([])

  useEffect(() => {
    if (focusSubject) {
      setFocusHistory([...focusHistory, focusSubject])
    }
  }, [focusSubject])

  console.log('focusHistory', focusHistory)

  // Clear Subject & Back to Main Screen
  const clearSubject = () => {
    setFocusSubject(null)
  }

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => {
            setFocusSubject(null)
          }}
          clearSubject={clearSubject}
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
