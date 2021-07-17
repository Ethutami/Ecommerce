import React, { PureComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import ComponentFavorites from '../../Favorites'

export class ComponentProductName extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
        }
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
                <View style={{}}>
                    <Text style={styles.product_name}>name</Text>
                    <Text style={styles.product_price}>Harga</Text>
                    <View style={styles.rating_container}>
                        {
                            this.rate.map((item, index)=>{
                                return(
                                    <FontAwesome 
                                        key={index} 
                                        name='star' 
                                        size={18} 
                                        color='#FFB800' 
                                        style={{marginRight: index === this.rate.length ? 0 : 10, marginTop:8}}
                                        />
                                    )
                                })
                            }
                    </View>
                </View>
                <ComponentFavorites square={true}/>
            </View>
        )
    }
}

export default ComponentProductName

const styles = StyleSheet.create({
    container : {
        paddingHorizontal:18, 
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center', 
        backgroundColor:'#ffffff',
        marginVertical:5,
    },
    product_name : {
        fontSize:24, 
        fontWeight:'600', 
        color:'#010035',
    },
    product_price : {
        fontSize:18, 
        fontWeight:'500', 
        color:'#FF6E4E',
    },
    rating_container : {
        flexDirection:'row', 
        paddingBottom:10,
    },
})