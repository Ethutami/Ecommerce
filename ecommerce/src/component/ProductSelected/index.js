import React, { PureComponent } from 'react'
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return{
        productSelected : state.product.productSelected
    }
}

export class ComponentSelected extends PureComponent {
    constructor(props) {
        super(props);
        this.state ={
            productSelected : this.props.productSelected
        }
    }
    render() {
        return (
            <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{}}>
                    <View style={{flexDirection:'row',}}>
                        {
                            this.state.productSelected.map((item, index)=>{
                                return(
                                    <Pressable 
                                    key={item.id} 
                                    style={item.selected ? styles.search_by_selected : styles.search_by} 
                                    onPress={()=>{
                                        let newData = [...this.state.productSelected]
                                        newData[index].selected = !item.selected
                                        this.setState({productSelected: newData})}}
                                    >
                                        <Text style={styles.txt}>{item.categoryName}</Text>
                                    </Pressable>
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
   mapStateToProps, null
)(ComponentSelected);


const styles = StyleSheet.create({
    search_by_selected : {
        width:100, 
        height:30,
        borderRadius:25, 
        backgroundColor:'#FF6E4E',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:4,
    },
    search_by : {
        width:100, 
        height:30,
        borderRadius:25, 
        backgroundColor:'rgba(183, 183, 183, 1)',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:4,
    },
    txt :{
        fontSize:14, 
        color:'#ffffff',
    },

})
