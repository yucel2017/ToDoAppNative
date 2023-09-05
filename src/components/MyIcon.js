import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const MyIcon = ({style,color,size,name}) => {
  return (
<View  style={[style,{paddingLeft:5}]}>
    <Icon name={name} size={25} color={color}/>
</View>
  )
}

export default MyIcon

const styles = StyleSheet.create({})