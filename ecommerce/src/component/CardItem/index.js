import React, { PureComponent } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        entries: state.product.entries
    }
};

export class ItemList extends PureComponent {
    render() {
        return (
            <View style={{marginBottom:22}}>
                <View style={styles.wrap_label}>
                    <Text style={styles.label_txt}>Best Seller</Text>
                    <TouchableOpacity>
                        <Text style={styles.view_all}>see more</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.entries_container}>
                    {this.props.entries.map((item)=>{
                        return(
                            <View key={item.id} style={styles.entries_inner_containaer}>
                                <Image source={item.photo} style={styles.product_item}/>
                                <Text>{item.price}</Text>
                                <Text>{item.name}</Text>
                            </View>
                            )
                    })}
                </View>
            </View>
        )
    }
}

export default connect(
    mapStateToProps,
    )(ItemList);

const styles = StyleSheet.create({
    wrap_label : {
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center',
        marginTop: 24,
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
        padding :8,

    },
    product_item :{
        width:'90%', 
        height:168, 
        alignSelf:'center', 
        marginBottom:7,
    },
})
