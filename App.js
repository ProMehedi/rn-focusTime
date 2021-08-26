import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Focus from './src/features/focus/Focus'
import { colors } from './src/utils/Colors'

const App = () => {
  const [focusSubject, setFocusSubject] = useState(null)

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Text>Hello!</Text>
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}
      <Text>{focusSubject}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
