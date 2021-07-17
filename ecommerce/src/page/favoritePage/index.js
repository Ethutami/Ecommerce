import React, { PureComponent } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import ComponentNavigationBar from '../../component/NavigationBar'
import ComponetProductCard from '../../component/ProductCard'
import ComponentSelected from '../../component/ProductSelected'

export default class FavoritePage extends PureComponent {
    render() {
        return (
            <View style={{flex:1,}}>
                <ComponentNavigationBar headline='Favorites'/>
                <ComponentSelected/>
                <ScrollView style={{paddingHorizontal:10, }}>
                    <ComponetProductCard navigation={this.props.navigation}/>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
})