import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomText = ({fontFamily,title,}) => {
  return (
    <View>
      <Text style={[{fontSize:15,color:'red'},fontFamily]}>{title}</Text>
    </View>
  )
}

export default CustomText

const styles = StyleSheet.create({})