import React, { PureComponent } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
    categoryItem: state.product.categoryItem
    }
};

export class ComponentProductCategory extends PureComponent {
    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <View style={{paddingVertical:18}}>
                <View style={styles.wrap_label}>
                    <Text style={styles.label_txt}>Select Category</Text>
                    <TouchableOpacity>
                        <Text style={styles.view_all}>view all</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{}}>
                    <View style={{flexDirection:'row',}}>
                        {
                            this.props.categoryItem.map((item)=>{
                                return(
                                    <View key={item.id} style={styles.wrap_item}>
                                        <Pressable style={styles.circle_item} onPress={()=>this.props.navigation.navigate('ShoppingPage', {Headline : item.categoryName})}>
                                        </Pressable>
                                        <Text style={styles.lebel_item}>{item.categoryName}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                </ScrollView>
            </View>
        )
    }
}


export default connect(
    mapStateToProps,
    // mapDispatchToProps()
  )(ComponentProductCategory);



const styles = StyleSheet.create({
    wrap_label : {
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center',
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
    wrap_item : {
        marginTop:24, 
        width:65, 
        marginHorizontal:10,
    },
    circle_item : {
        width:65, 
        height:65, 
        borderRadius:65/2, 
        backgroundColor:'#ffffff',
        shadowColor: '#BFC5F5',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    lebel_item : {
        alignSelf:'center',
    },
})
