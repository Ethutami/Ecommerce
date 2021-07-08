import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'

import CategoryItem from '../../component/Category'
import SearchBar from '../../component/SearchBar'
import Carausel from '../../component/Carausel'

export default class HomePage extends PureComponent {
    render() {
        return (
            <ScrollView style={styles.container}>
                <CategoryItem/>
                <SearchBar/>
                <Carausel/>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1, 
        paddingHorizontal:10, 
        backgroundColor:'#E5E5E5',
    },
})

