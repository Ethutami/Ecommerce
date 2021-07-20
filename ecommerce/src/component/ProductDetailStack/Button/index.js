import React, { PureComponent } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AntDesgn from 'react-native-vector-icons/AntDesign'

export default class ComponenetButtonCartBuy extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            addCart : 0,
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.cart} onPress={()=> this.setState({addCart : this.state.addCart + 1})}>
                    <AntDesgn name='shoppingcart' size={24} color='#ffffff'/>
                    <Text style={styles.cart_txt}>Add to cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buy} onPress={()=> this.props.navigation.navigate('CartScreen')}>
                    <Text style={styles.buy_txt}>Buy Now</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flexDirection:'row', 
        alignItems:'center',
        width:'100%', 
        padding:5,
    },
    cart : {
        flexDirection:'column', 
        alignItems:'center', 
        justifyContent:'center',
        backgroundColor:'#010035', 
        width:'40%', 
        height:50, 
        borderTopStartRadius:50/2, 
        borderBottomStartRadius:50/2, 
    },
    cart_txt : {
        color:'#ffffff', 
        fontSize:14,
    },
    buy : {
        backgroundColor:'#FF6E4E', 
        width:'60%', 
        alignItems:'center', 
        justifyContent:'center', 
        height:50, 
        borderTopEndRadius:50/2, 
        borderBottomEndRadius:50/2,
    },
    buy_txt : {
        fontSize:20, 
        fontWeight:'700', 
        color:'#ffffff',
    },
})