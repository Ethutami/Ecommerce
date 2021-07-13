import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'

import Address from '../../component/UserAddress'
import ComponentProductCategory  from '../../component/ProductCategory'
import ComponentSearchBar from '../../component/SearchBar'
import ComponentProductSlider from '../../component/ProductSlider'
import ComponetProductCard from '../../component/ProductCard'

export default class HomePage extends PureComponent {
    render() {
        return (
            <ScrollView style={styles.container}>
                {/* <Address/> */}
                <ComponentProductCategory navigation={this.props.navigation}/>
                <ComponentSearchBar navigation={this.props.navigation}/>
                <ComponentProductSlider/>
                <ComponetProductCard label='show' navigation={this.props.navigation}/>
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

