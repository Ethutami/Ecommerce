import React, { PureComponent } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import FontAwesome from 'react-native-vector-icons/FontAwesome'

import image1 from '../../../assets/image/1.jpg'

export class ComponentProductReview extends PureComponent {
    constructor(props){
        super(props)
        this.rate = []
    }
    rating(){
        for (let i = 0; i < 5; i++) {
            this.rate.push(i)
        }
    }
    render() {
        this.rating()
        return (
            <View style={styles.container}>
                <View style={styles.user_container}>
                    <View style={{flexDirection:'row'}}>
                        <Image source={image1} style={styles.user_image}/>
                        <View style={{marginLeft:14}}>
                            <Text >Cale Hanetuse</Text>
                            <View style={{flexDirection:'row', paddingBottom:10}}>
                                {
                                    this.rate.map((item, index)=>{
                                        return(
                                            <FontAwesome 
                                                key={index} 
                                                name='star' 
                                                size={12} 
                                                color='#FFB800' 
                                                style={{marginRight: index === this.rate.length ? 0 : 5, marginTop:8}}
                                                />
                                            )
                                        })
                                }
                            </View>
                        </View>
                    </View>
                    <Text style={styles.date_review}>29/02/20</Text>
                </View>
                <Text style={{marginHorizontal:20, marginTop:10}}>
                    Gila sih ini toko keren bgt padahal chekout banyak tapi langsung di kirim hari itu juga dan pengiriman juga cepet
                    Barang yang di kirim sesuai pesanan
                </Text>
            </View>
        )
    }
}

export default ComponentProductReview

const styles = StyleSheet.create({
    container : {
        width:'100%', 
        backgroundColor:'#ffffff', 
        padding:10, 
        marginBottom:5,
    },
    user_container : {
        flexDirection:'row', 
        alignItems:'center',
        justifyContent:'space-between',
    },
    user_image : {
        width:40, 
        height:40, 
        borderRadius:40/2, 
        borderWidth:1,
        borderColor:'#FF6E4E',
        backgroundColor:'#E5E5E5'
    },
    date_review : {
        marginEnd:20, 
        color:'#B3B3C3', 
        fontSize:14,
    },
})