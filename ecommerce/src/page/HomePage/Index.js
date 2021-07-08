import React, { PureComponent } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import CategoryItem from '../../component/Category'

export default class HomePage extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <CategoryItem/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1, 
        paddingHorizontal:17, 
        backgroundColor:'#E5E5E5',
    },
})

