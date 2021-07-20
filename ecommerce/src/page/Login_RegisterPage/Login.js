import React, { PureComponent } from 'react'
import { Text, View, Pressable, StyleSheet } from 'react-native'

import Entypo from 'react-native-vector-icons/Entypo'

import ComponentNavigationBar from '../../component/NavigationBar'
import ComponentHeadline from '../../component/Headline'
import ComponentTextField from '../../component/TextField'
import ComponentButton from '../../component/Button'

export class LoginPage extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <View style={{paddingTop:73,}}>
                    <ComponentTextField label= 'Email'/>
                    <ComponentTextField label= 'Password'/>
                </View>
                <View style={styles.forgotpass}>
                    <Text style={{marginRight:10}}>Forgot your password?</Text>
                    <Entypo name='arrow-long-right' color='#FF6E4E'/>
                </View>
                <ComponentButton navigation={this.props.navigation} pagename='HomeScreen' label='LOGIN'/>
            </View>
        )
    }
}

export default LoginPage

const styles = StyleSheet.create({
    container : {
        flex:1, 
        paddingTop: 18, 
        paddingHorizontal:18,
    },
    forgotpass : {
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'flex-end', 
        paddingTop:16, 
        marginBottom:32,
    },
})