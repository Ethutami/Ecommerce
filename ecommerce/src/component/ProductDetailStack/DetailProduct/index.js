import React, { PureComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export class ConponentDetailProduct extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Description</Text>
                <View style={{borderBottomColor:'#E1E1E1', borderBottomWidth:1,}}></View>
                <View style={{flexDirection:'row', width:'100%', paddingTop:10, paddingBottom:10}}>
                    <View style={{width:'40%', }}>
                        <Text style={{paddingVertical:5, color:'#B7B7B7', fontSize:15}}>Stock</Text>
                        <Text style={{paddingVertical:5, color:'#B7B7B7', fontSize:15}}>Material</Text>
                        <Text style={{paddingVertical:5, color:'#B7B7B7', fontSize:15}}>Ship From</Text>
                    </View>
                    <View style={{width:'60%',}} >
                        <Text style={{paddingVertical:5, fontSize:15}}>23</Text>
                        <Text style={{paddingVertical:5, fontSize:15}}>Denim</Text>
                        <Text style={{paddingVertical:5, fontSize:15}}>KAB. TANGERANG - KELAPA DUA, BANTEN, ID</Text>
                    </View>
                </View>
                <View style={{borderBottomColor:'#E1E1E1', borderBottomWidth:1,}}></View>
                <Text style={{paddingTop:10, paddingBottom:5, fontSize:14}}>nama product</Text>
                <Text style={{paddingVertical:5, fontSize:14}}>other info</Text>
            </View>
        )
    }
}

export default ConponentDetailProduct

const styles = StyleSheet.create({
    container : {
        flex:1, 
        backgroundColor:'#ffffff', 
        padding:10,
        marginBottom:5,
    },
    title : {
        fontSize:20, 
        fontWeight:'500', 
        color:'#010035',
        paddingBottom:10,
    },
})