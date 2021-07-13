import React, { PureComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class ComponentHeadline extends PureComponent {
    render() {
        const {headline} = this.props
        return (
            <View style={styles.container}>
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
    },
    headline : {
        color:'#010035', 
        fontSize:35, 
        fontWeight:'bold',
    },
})
