import React, { PureComponent } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
    categoryItem: state.product.categoryItem
    }
};

export class CategoryItem extends PureComponent {
    
    render() {
        console.log(this.props.categoryItem);
        return (
            <View style={{}}>
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
                                        <View style={styles.circle_orange}>
                                        </View>
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
  )(CategoryItem);

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
        marginHorizontal:10
    },
    circle_orange : {
        width:65, 
        height:65, 
        borderRadius:65/2, 
        backgroundColor:'#ffffff',
    },
    lebel_item : {
        alignSelf:'center',
    },
})
