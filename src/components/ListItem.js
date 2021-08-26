import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { colors } from '../utils/Colors'
import { fontSize, spacing } from '../utils/Sizes'

const ListItem = ({ item }) => {
  return (
    <Text style={[styles.item, { color: item.status ? 'green' : 'red' }]}>
      ▶ {item.subject}
    </Text>
  )
}

const styles = StyleSheet.create({
  item: {
    color: colors.white,
    fontSize: fontSize.md,
    paddingVertical: spacing.lg,
    borderTopWidth: 0.5,
    borderColor: colors.white,
  },
})

export default ListItem
