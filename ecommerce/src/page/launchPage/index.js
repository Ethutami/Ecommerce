import React, { PureComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'



export default class LaunchPage extends PureComponent {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        setTimeout(  () => {
            this.props.navigation.navigate('TabNav')
        }, 1000);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ width:'55%', height:'14%',}}>
                    <View style={styles.circle_orange}></View>
                    <View style={styles.text_brand_wrap}>
                        <Text style={styles.text_brand}>Ecommerce</Text>
                        <Text style={styles.text_brand}>Concept</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1, 
        justifyContent:'center', 
        alignItems:'center', 
        backgroundColor:'#010035'
    },
    circle_orange : {
        backgroundColor:'#FF6E4E', 
        width: 100, height:100, 
        borderRadius:50, 
        alignSelf:'center'
    },
    text_brand_wrap : {
        position:'absolute',
        top: 0,  
        right: 0, 
        bottom: 0,
        justifyContent: 'center',
    },
    text_brand :{
        color:'#ffffff', 
        fontSize:23, 
        fontWeight:'bold', 
        fontFamily:'Mark_Pro', 
    },
})