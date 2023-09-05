import { StyleSheet, Text, View, TouchableOpacity, onPress, title, Touchable } from 'react-native';
import React from 'react';
import {Fonst} from '../utils/Constants';
import MyIcon from './MyIcon';


const CustomButton = ({onPress,title,butonIcon,bgColor,iconColor}) => {
  return (
    <TouchableOpacity
    style={[styles.button, {backgroundColor: bgColor}]}
    onPress={onPress}>
    <Text style={styles.title}>{title}</Text>
    {butonIcon && <MyIcon name={butonIcon} color={iconColor} />}
  </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'green',
    fontFamily: 'Fons.bold'
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin:5,
  }
})