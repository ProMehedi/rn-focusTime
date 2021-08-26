import React from 'react'
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'

const Focus = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            onFocus={() => console.log('onFocus')}
            onBlur={() => console.log('onBlur')}
            placeholder='Type here to focus'
            placeholderTextColor='#ccc'
          />
          <View style={styles.button}>
            <Button color='#252250' title='+' />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  inputContainer: {
    flex: 0.5,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: Platform.OS === 'ios' ? 34 : 30,
    marginBottom: 20,
  },
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#f9f9f9',
    padding: 12,
    marginBottom: 10,
    color: '#fff',
    borderRadius: 4,
    fontSize: 16,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    padding: 12,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Focus
