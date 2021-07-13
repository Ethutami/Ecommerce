import React, { PureComponent } from 'react'
import { Text, View, ScrollView  } from 'react-native'


import ComponentNavigationBar from '../../component/NavigationBar'
import ComponentProductCarausel from '../../component/ProductDetailStack/ProductCarausel'
import ComponentProductName from '../../component/ProductDetailStack/ProductName'
import ComponentShopName from '../../component/ProductDetailStack/ShopNameCard'
import ComponentDetailProduct from '../../component/ProductDetailStack/DetailProduct'
import ComponenetButtonCartBuy from '../../component/ProductDetailStack/Button'


export class DetailsProducPage extends PureComponent {
    render() {
        return (
            <View style={{flex:1,}}>
                <ComponentNavigationBar headline='Details Poduct' navigation={this.props.navigation}/>
                <ScrollView>
                    <ComponentProductCarausel/>
                    <ComponentProductName/>
                    <ComponentShopName/>
                    <ComponentDetailProduct/>
                </ScrollView>
                <ComponenetButtonCartBuy/>
            </View>
        )
    }
}

export default DetailsProducPage
