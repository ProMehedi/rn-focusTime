import React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

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

  const addFocusHistoryWithStatus = (subject, status) => {
    setFocusHistory([...focusHistory, { subject, status }])
  }

  // Clear focus history
  const onClear = () => {
    setFocusSubject(null)
    setFocusHistory([])
  }

  // Set focus history
  const saveFocusHistory = async () => {
    try {
      await AsyncStorage.setItem('focusHistory', JSON.stringify(focusHistory))
    } catch (error) {
      console.log(error)
    }
  }

  // Get focus history
  const getFocusHistory = async () => {
    try {
      const history = await AsyncStorage.getItem('focusHistory')
      if (history !== null) {
        setFocusHistory(JSON.parse(history))
      }
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    getFocusHistory()
  }, [])

  React.useEffect(() => {
    saveFocusHistory()
  }, [focusHistory])

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => {
            addFocusHistoryWithStatus(focusSubject, STATUS.COMPLETE)
            setFocusSubject(null)
          }}
          clearSubject={() => {
            addFocusHistoryWithStatus(focusSubject, STATUS.INCOMPLETE)
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
