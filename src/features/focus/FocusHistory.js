import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import { colors } from '../../utils/Colors'
import { fontSize, spacing } from '../../utils/Sizes'
import NotFound from '../../components/NotFound'
import ListItem from '../../components/ListItem'

const FocusHistory = ({ focuses, onClear }) => {
  console.log(focuses)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on:</Text>
      {focuses.length > 0 && (
        <FlatList
          contentContainerStyle={styles.list}
          data={focuses}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <ListItem item={item} />}
        />
      )}
      {focuses.length === 0 && <NotFound />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
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
    height: '100%',
  },
})

export default FocusHistory
