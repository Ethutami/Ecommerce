import React, { PureComponent } from 'react'
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

import AntDesgn from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import ComponentNavigationBar from '../../component/NavigationBar'
import ComponentButton from '../../component/Button'
import image from '../../assets/image/1.jpg'



export default class CartPage extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            checked : false
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ComponentNavigationBar headline='Cart' navigation={this.props.navigation}/>
                <ScrollView style={{marginTop:10}}>
                    <View style={styles.body_container}>
                        <Pressable style={{width:'10%'}} onPress={()=> this.setState({checked : !this.state.checked})}>
                            {
                                this.state.checked ? <FontAwesome name='check-square' size={18} color='#FF6E4E'/> :
                                <FontAwesome name='square-o' size={18} color='#FF6E4E'/>
                            }
                        </Pressable>
                        <Image source={image} style={styles.product_image}/>
                        <View style={styles.product_name_container}>
                            <Text style={styles.product_name}>Product Name</Text>
                            <Text style={styles.product_price}>Price</Text>
                        </View>
                        <View style={{width:'10%', alignItems:'center', }}>
                            <AntDesgn name='minus' size={18} color='#FF6E4E'/>
                            <Text>0</Text>
                            <AntDesgn name='plus' size={18} color='#FF6E4E'/>
                        </View>
                        <AntDesgn name='delete' size={18} color='#FF6E4E' style={{alignSelf:'center'}}/>
                    </View>
                </ScrollView>
                <View style={styles.bottom_container}>
                    <View style={styles.bottom_inner_container}>
                        <Text style={styles.total_txt}>Total amount</Text>
                        <Text style={styles.total_num}>$ 9238239</Text>
                    </View>
                    <ComponentButton navigation={this.props.navigation} pagename='ShippingPage' label='Check Out'/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1, 
        width:'100%',
    },
    body_container : {
        backgroundColor:'#ffffff', 
        padding:10, 
        flexDirection:'row',
        alignItems:'center', 
        width:'100%',
    },
    product_image : {
        height:88, 
        width:'20%', 
        resizeMode:'stretch', 
        borderRadius:10,
    },
    product_name_container : {
        paddingLeft:17, 
        paddingRight:33, 
        width:'55%',
    },
    product_name : {
        fontSize:20, 
        fontWeight:'500', 
        color:'#010035',
    },
    product_price : {
        fontSize:20, 
        fontWeight:'500', 
        color:'#FF6E4E',
    },
    bottom_container : {
        position:'absolute', 
        bottom:0, 
        width:'100%', 
        paddingHorizontal:24,
    },
    bottom_inner_container : {
        flexDirection:'row', 
        justifyContent:'space-between', 
        marginVertical:10,
    },
    total_txt : {
        fontSize:15, 
        fontWeight:'400', 
        color:'#B7B7B7',
    },
    total_num : {
        fontSize:15, 
        fontWeight:'700', 
        color:'#FF6E4E',
    },
    
})