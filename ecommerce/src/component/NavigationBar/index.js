import React, { PureComponent } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import AntDesgn from 'react-native-vector-icons/AntDesign'

export class ComponentNavigationBar extends PureComponent {
    render() {
        const {headline, pagename} = this.props
        return (
            <View style={headline === '' ? styles.container_ : styles.container}>
                {
                    headline === 'Favorites' ? <View></View> :
                    <Pressable  onPress={()=>{headline === '' ? this.props.navigation.navigate(pagename) : this.props.navigation.goBack()}}>
                        <MaterialIcon name='arrow-back-ios' size={20} color='#010035'/>
                    </Pressable>
                }
                <Text style={styles.headline}>{headline}</Text>
                {   headline === 'Cart' || headline === '' ? <View></View> :
                    headline === 'Favorites' ?
                    <Pressable  
                        style={styles.icon_container}
                        onPress={()=>this.props.navigation.navigate("SearchPage")}
                        >
                        <AntDesgn name='search1' size={24} color='#FF6E4E'/>
                    </Pressable> :
                    <Pressable  
                        style={styles.icon_container}
                        onPress={()=>this.props.navigation.navigate("CartScreen")}
                        >
                        <AntDesgn name='shoppingcart' size={30} color='#FF6E4E'/>
                        <View style={styles.num}>
                            <Text style={{fontSize:10, color:'#FF6E4E'}}>0</Text>
                        </View>
                    </Pressable>
                }
            </View>
        )
    } 
}

export default ComponentNavigationBar

const styles = StyleSheet.create({
    container : {
        backgroundColor:'#ffffff',
        paddingHorizontal:18,
        paddingTop:18,
        paddingBottom:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    container_ : {
        //backgroundColor:'#ffffff',
        //paddingHorizontal:10,
        paddingTop:18,
        paddingBottom:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    headline : {
        color:'#010035', 
        fontSize:20, 
        fontWeight:'bold',
    },
    icon_container : {
        width:50,
        alignItems:'center',
    },
    num : {
        width: 20, 
        height:20, 
        borderRadius:20/2, 
        alignItems:'center', 
        justifyContent:'center', 
        borderColor:'#FF6E4E', 
        borderWidth:1, 
        backgroundColor:'#ffffff', 
        position:'absolute', 
        top:-5, 
        right:0,
    },
})