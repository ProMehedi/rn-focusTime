import React from 'react'
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import RoundedButton from '../../components/RoundedButton'

const Focus = ({ addSubject }) => {
  const [subject, setSubject] = React.useState('')

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setSubject(text)}
            placeholder='Type here to focus'
            placeholderTextColor='#ccc'
          />
          <RoundedButton
            title='+'
            size={Platform.OS === 'ios' ? 45 : 50}
            onPress={() => addSubject(subject)}
          />
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
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#f9f9f9',
    padding: 12,
    marginRight: 10,
    color: '#fff',
    borderRadius: 4,
    fontSize: 16,
  },
})

export default Focus
