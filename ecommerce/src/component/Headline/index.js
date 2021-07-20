import React, { PureComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class ComponentHeadline extends PureComponent {
    render() {
        const {headline} = this.props
        return (
            <View style={headline === 'Login' || headline === 'Register' ? styles.container_ : styles.container}>
                <Text style={styles.headline}>{headline}</Text>
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
})
