import React, { PureComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export class ConponentDetailProduct extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Description</Text>
            </View>
        )
    }
}

export default ConponentDetailProduct

const styles = StyleSheet.create({
    container : {
        flex:1, 
        backgroundColor:'#ffffff', 
        padding:10,
        marginBottom:5,
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center',
    },
    title : {
        fontSize:20, 
        fontWeight:'500', 
        color:'#010035',
    },
})