import React, { PureComponent } from 'react'
import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux';

import ComponentFavorites from '../Favorites';

const mapStateToProps = state => {
    return {
        entries: state.product.entries
    }
};

export class ComponetProductCard extends PureComponent {
    render() {
        return (
            <View style={{marginBottom:22, marginTop:24}}>
                {
                    this.props.label === 'show' &&
                    <View style={styles.wrap_label}>
                        <Text style={styles.label_txt}>Best Seller</Text>
                        <TouchableOpacity>
                            <Text style={styles.view_all}>see more</Text>
                        </TouchableOpacity>
                    </View>
                }
                <View style={styles.entries_container}>
                    {this.props.entries.map((item)=>{
                        return(
                            <Pressable 
                                key={item.id} 
                                style={styles.entries_inner_containaer}
                                onPress={()=> this.props.navigation.navigate('DetailsProductPage')}
                                >
                                <Image source={item.photo} style={styles.product_item}/>
                                <Text style={{color:'#010035', fontSize:16, fontWeight:'700', marginLeft:21}}>{item.price}</Text>
                                <Text style={{color:'#010035', fontSize:10, fontWeight:'400', marginLeft:21}}>{item.name}</Text>
                                <ComponentFavorites/>
                            </Pressable>
                            )
                    })}
                </View>
            </View>
        )
    }
}

export default connect(
    mapStateToProps,
    )(ComponetProductCard);

const styles = StyleSheet.create({
    wrap_label : {
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center',
        marginBottom:6,
    },
    label_txt : {
        color:'#010035', 
        fontFamily:'Mark_pro', 
        fontWeight:'bold', 
        fontSize:25,
    },
    view_all : {
        color:'#FF6E4E', 
        fontSize:15,
    },
    entries_container : { 
        flex:2,
        width:'100%', 
        flexWrap:'wrap', 
        flexDirection:'row', 
        justifyContent:'space-between',
    },
    entries_inner_containaer : {
        width:'48%', 
        backgroundColor:'#ffffff', 
        borderRadius:10, 
        marginBottom:10, 
        paddingBottom :8,

    },
    product_item :{
        width:'100%', 
        height:168, 
        borderRadius:10, 
        alignSelf:'center', 
        marginBottom:7,
    },
})
