import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { Fonts } from '../utils/Constans'
const HeaderText = ({ title }) => {
    return (
        <View>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default HeaderText

const styles = StyleSheet.create({
    text: {
        fontSize: 35,
        fontFamily: 'Fonst.bold',
        color: 'green'
    }
  
})