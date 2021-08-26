import React from 'react'
import { Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import RoundedButton from '../../components/RoundedButton'
import { colors } from '../../utils/Colors'
import { fontSize, spacing } from '../../utils/Sizes'

const Focus = ({ addSubject }) => {
  const [subject, setSubject] = React.useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What would you like to focus on?</Text>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setSubject(text)}
          onSubmitEditing={() => addSubject(subject)}
          placeholder='Type here to focus'
          placeholderTextColor='#ccc'
        />
        <RoundedButton
          title='+'
          size={48}
          onPress={() => addSubject(subject)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    justifyContent: 'center',
    marginVertical: spacing.xxl,
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: Platform.OS === 'ios' ? 34 : 30,
    marginBottom: spacing.xl,
  },
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.white,
    padding: Platform.OS === 'ios' ? spacing.lg : spacing.md,
    marginRight: spacing.md,
    color: colors.white,
    borderRadius: 4,
    fontSize: fontSize.lg,
  },
})

export default Focus
