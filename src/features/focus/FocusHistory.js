import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'

import { colors } from '../../utils/Colors'
import { fontSize, spacing } from '../../utils/Sizes'
import NotFound from '../../components/NotFound'
import ListItem from '../../components/ListItem'
import RoundedButton from '../../components/RoundedButton'

const FocusHistory = ({ focuses, onClear }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Things we've focused on:</Text>
      {focuses.length > 0 && (
        <>
          <FlatList
            style={{ flex: 1 }}
            contentContainerStyle={styles.list}
            data={focuses}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <ListItem item={item} />}
          />
          <View style={styles.clearContainer}>
            <RoundedButton
              title='Clear'
              size={80}
              textStyle={{ fontSize: fontSize.xl }}
              onPress={() => onClear()}
            />
          </View>
        </>
      )}
      {focuses.length === 0 && <NotFound />}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
    paddingTop: 0,
  },
  title: {
    color: colors.white,
    fontSize: fontSize.xl,
    fontWeight: 'bold',
    borderBottomWidth: 3,
    paddingBottom: spacing.md,
    borderColor: colors.white,
  },
  list: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: spacing.md,
    paddingTop: 0,
  },
  clearContainer: {
    alignItems: 'center',
    padding: spacing.md,
  },
})

export default FocusHistory
