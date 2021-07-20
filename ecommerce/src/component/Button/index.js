import React, { PureComponent } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default class ComponentButton extends PureComponent {
    render() {
        const {pagename, label} = this.props
        return (
            <TouchableOpacity style={styles.checkout} onPress={()=> this.props.navigation.navigate(pagename)}>
                <Text style={styles.checkout_txt}>{label}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    checkout : {
        backgroundColor:'#FF6E4E', 
        width:'100%', 
        paddingVertical:10,
        alignItems:'center', 
        justifyContent:'center', 
        borderRadius:50,
        marginVertical:10
    },
    checkout_txt : {
        fontSize:24, 
        fontWeight:'700', 
        color:'#ffffff',
    },
})
