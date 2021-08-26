import React, { useEffect } from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import Focus from './src/features/focus/Focus'
import FocusHistory from './src/features/focus/FocusHistory'
import Timer from './src/features/timer/Timer'
import { colors } from './src/utils/Colors'

const STATUS = {
  COMPLETE: 1,
  INCOMPLETE: 0,
}

const App = () => {
  const [focusSubject, setFocusSubject] = React.useState(null)
  const [focusHistory, setFocusHistory] = React.useState([])

  const addFocusHistoryWithState = (subject, status) => {
    setFocusHistory([...focusHistory, { subject, status }])
  }

  const onClear = () => {
    setFocusSubject(null)
    setFocusHistory([])
  }

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => {
            addFocusHistoryWithState(focusSubject, STATUS.COMPLETE)
            setFocusSubject(null)
          }}
          clearSubject={() => {
            addFocusHistoryWithState(focusSubject, STATUS.INCOMPLETE)
            setFocusSubject(null)
          }}
        />
      ) : (
        <>
          <Focus addSubject={setFocusSubject} />
          <FocusHistory focuses={focusHistory} onClear={onClear} />
        </>
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
