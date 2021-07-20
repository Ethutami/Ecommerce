import React, { PureComponent } from 'react'
import { Pressable, Text, View } from 'react-native'

import LoginPage from './Login'
import RegisterPage from './Register'
import ComponentHeadline from '../../component/Headline'


export default class LoginRegisterPage extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            switch_regis : false
        }
    }
    render() {
        return (
            <View style={{flex:1, padding: 20}}>
                <View style={{flexDirection:'row'}}>
                    <Pressable onPress={()=> this.setState({switch_regis : true})} style={{marginRight:20}}>
                        <ComponentHeadline headline = 'Register' swipe = {!this.state.switch_regis && 'Register'}/>
                    </Pressable>
                    <Pressable onPress={()=> this.setState({switch_regis : false})} >
                        <ComponentHeadline headline = 'Login' swipe = {this.state.switch_regis && 'Login'}/>
                    </Pressable>
                </View>
                <Text style={{marginTop:20}}>{this.state.switch_regis ? 'Create an account to continiue' : 'Please login to your account.'}</Text>
                {
                    this.state.switch_regis ? <RegisterPage/> : <LoginPage/>
                }
            </View>
        )
    }
}
