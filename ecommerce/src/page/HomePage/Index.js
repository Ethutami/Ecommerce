import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'

import Location from '../../component/Location'
import CategoryItem from '../../component/Category'
import SearchBar from '../../component/SearchBar'
import Slider from '../../component/Slider'
import ItemList from '../../component/CardItem'

export default class HomePage extends PureComponent {
    render() {
        return (
            <ScrollView style={styles.container}>
                <CategoryItem/>
                <SearchBar/>
                <Slider/>
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

