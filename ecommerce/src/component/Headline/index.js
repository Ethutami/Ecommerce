import React, { PureComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class ComponentHeadline extends PureComponent {
    render() {
        const {headline, swipe} = this.props
        return (
            <View style={headline === 'Login' || headline === 'Register' || headline === 'Forgot password' ? styles.container_ : styles.container}>
                <Text style={swipe === 'Login' || swipe === 'Register' ? styles.headline_ : styles.headline}>{headline}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor:'#ffffff', 
        paddingHorizontal: 24, 
        paddingBottom:10,
        paddingTop:16,
    },
    container_ : {
        paddingBottom:10,
        paddingTop:16,
    },
    headline : {
        color:'#010035', 
        fontSize:35, 
        fontWeight:'bold',
    },
    headline_ : {
        color:'#B7B7B7', 
        fontSize:30, 
        fontWeight:'bold',
    },
})
