import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContentText = ({ content }) => {
  return (
    <View>
      <Text style={styles.text} >{content}</Text>
    </View>
  )
}

export default ContentText

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'purple',
    fontFamily: 'Fonst.regular',
  }
})