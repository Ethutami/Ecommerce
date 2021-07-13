import React, { PureComponent } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import AntDesgn from 'react-native-vector-icons/AntDesign'

export class ComponentNavigationBar extends PureComponent {
    render() {
        const {headline} = this.props
        return (
            <View style={styles.container}>
                <Pressable  onPress={()=>this.props.navigation.goBack('TabNav')}>
                    <MaterialIcon name='arrow-back-ios' size={28} color='#010035'/>
                </Pressable>
                <Text style={styles.headline}>{headline}</Text>
                {   headline === 'Cart' ? <View></View> :
                    <Pressable  
                        style={{width:50,alignItems:'center'}}
                        onPress={()=>this.props.navigation.navigate("CartScreen")}
                        >
                        <AntDesgn name='shoppingcart' size={40} color='#FF6E4E'/>
                        <View style={{width: 20, height:20, borderRadius:20/2, alignItems:'center', justifyContent:'center', borderColor:'#FF6E4E', borderWidth:1, backgroundColor:'#ffffff', position:'absolute', top:0, right:0}}>
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
    headline : {
        color:'#010035', 
        fontSize:20, 
        fontWeight:'bold',
    },
})