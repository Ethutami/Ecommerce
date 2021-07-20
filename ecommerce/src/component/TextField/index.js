import React, { PureComponent } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export default class ComponentTextField extends PureComponent {
    render() {
        const {label} = this.props
        return (
            <View style={styles.container}>
                <Text>{label}</Text>
                <TextInput
                    placeholder={label}
                    />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container : {
        width:'100%', 
        backgroundColor:'#ffffff', 
        borderRadius:4,
        shadowColor: '#BFC5F5',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        marginVertical:10
    },
})