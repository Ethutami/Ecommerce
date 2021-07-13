import React, { PureComponent } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export class ComponentShopName extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Pressable style={styles.circle_item}></Pressable>
                <View> 
                    <Text style={styles.shop_name}>Shop Name</Text>
                    <Text style={styles.shop_address}>Shop Adress</Text>
                </View>
                <View style={styles.number_of_product_container}>
                    <Text style={{fontSize:40, color:'#FF6E4E'}}>40</Text>
                    <Text style={{color:'#B3B3C3', fontSize:16}}>Product</Text>
                </View>
            </View>
        )
    }
}

export default ComponentShopName

const styles = StyleSheet.create({
    container : {
        flex:1, 
        backgroundColor:'#ffffff', 
        padding:10,
        marginBottom:5,
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center',
    },
    circle_item : {
        width:80, 
        height:80, 
        borderRadius:80/2, 
        borderWidth:1,
        borderColor:'#FF6E4E',
    },
    shop_name : {
        fontSize:20, 
        fontWeight:'500', 
        color:'#010035',
    },
    shop_address : {
        fontSize:16, 
        fontWeight:'500', 
        color:'#FF6E4E',
    },
    number_of_product_container : {
        alignItems:'center',
        marginRight:30, 
        marginLeft:30,
    },
})
