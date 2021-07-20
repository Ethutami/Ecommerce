import React, { PureComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ComponentNavigationBar from '../../component/NavigationBar'
import ComponentHeadline from '../../component/Headline'
import ComponentTextField from '../../component/TextField'
import ComponentButton from '../../component/Button'

export default class ForgotPass extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <ComponentNavigationBar headline='' navigation = {this.props.navigation} pagename='LoginRegisterPage'/>
                <ComponentHeadline headline = 'Forgot password'/>
                <Text style={{marginTop:87, marginBottom:18}}>Please, enter your email address. You will receive a link to create a new password via email.</Text>
                <ComponentTextField label='email'/>
                <View style={{marginBottom:55}}></View>
                <ComponentButton navigation={this.props.navigation} pagename='LoginRegisterPage' label='SEND'/>
            </View>
        )
    }
}

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