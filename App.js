import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Focus from './src/features/focus/Focus'

const App = () => {
  const [focusSubject, setFocusSubject] = useState(null)

  return (
    <View style={styles.container}>
      {focusSubject ? <Text>Hello!</Text> : <Focus />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252250',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
