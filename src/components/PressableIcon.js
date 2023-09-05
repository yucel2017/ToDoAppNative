import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const PressableIcon = ({ style, onPress, color, size, name }) => {
    return (
        <TouchableOpacity onPress={onPress} style={style}>
            <Icon name={name} size={size} color={color} />
        </TouchableOpacity>
    )
}

export default PressableIcon

const styles = StyleSheet.create({})