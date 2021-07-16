import React, { PureComponent } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import ComponentNavigationBar from '../../component/NavigationBar'
import ComponetProductCard from '../../component/ProductCard'

export default class FavoritePage extends PureComponent {
    render() {
        return (
            <View style={{flex:1,}}>
                <ComponentNavigationBar headline='Favorites'/>
                <ScrollView style={{paddingHorizontal:10, }}>
                    <ComponetProductCard navigation={this.props.navigation}/>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
})