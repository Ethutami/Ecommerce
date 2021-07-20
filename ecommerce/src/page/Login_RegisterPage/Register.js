import React, { PureComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Entypo from 'react-native-vector-icons/Entypo'

import ComponentNavigationBar from '../../component/NavigationBar'
import ComponentHeadline from '../../component/Headline'
import ComponentTextField from '../../component/TextField'
import ComponentButton from '../../component/Button'

export class RegisterPage extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <ComponentNavigationBar headline='' navigation = {this.props.navigation} pagename='LoginPage'/>
                <ComponentHeadline headline = 'Register'/>
                <View style={{paddingTop:73,}}>
                    <ComponentTextField label= 'Name'/>
                    <ComponentTextField label= 'Email'/>
                    <ComponentTextField label= 'Password'/>
                </View>
                <View style={styles.have_account}>
                    <Text style={{marginRight:10}}>Already have an account?</Text>
                    <Entypo name='arrow-long-right' color='#FF6E4E'/>
                </View>
                <ComponentButton navigation={this.props.navigation} pagename='HomeScreen' label='REGISTER'/>
            </View>
        )
    }
}

export default RegisterPage

const styles = StyleSheet.create({
    container : {
        flex:1, 
        paddingTop: 18, 
        paddingHorizontal:18,
    },
    have_account : {
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'flex-end', 
        paddingTop:16, 
        marginBottom:32,
    },
})