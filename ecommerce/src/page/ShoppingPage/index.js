import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'

import ComponentNavigationBar from '../../component/NavigationBar'
import ComponentHeadline from '../../component/Headline'
import ComponentSearchBar from '../../component/SearchBar'
import ComponentSelected  from '../../component/ProductSelected'
import ComponetProductCard from '../../component/ProductCard'


export class ShoppingPage extends PureComponent {
    render() {
        const { Headline } = this.props.route.params
        return (
            <View style={styles.container}>
                <ComponentNavigationBar navigation={this.props.navigation}/>
                <ScrollView>
                    <ComponentHeadline headline={Headline}/>
                    <View style={styles.inner_container}>
                        <ComponentSearchBar navigation={this.props.navigation}/>
                        <ComponentSelected/>
                        <ComponetProductCard navigation={this.props.navigation}/>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default ShoppingPage

const styles = StyleSheet.create({
    container : {
        flex:1, 
    },
    inner_container : {
        paddingHorizontal:10, 
        backgroundColor:'#E5E5E5',
    }
})