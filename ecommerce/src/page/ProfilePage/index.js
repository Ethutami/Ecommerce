import React, { PureComponent } from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'

import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'

import ComponentHeadline from '../../component/Headline'
import image1 from '../../assets/image/1.jpg'

export default class ProfilePage extends PureComponent {

    _renderContent = (title, value) => {
        return(
            <View style={{}}>
                <Pressable 
                    style={styles.content_container}
                    onPress={()=> {
                        title === 'My orders' ? this.props.navigation.navigate('OrderPage') :
                        title === 'My reviews' ? this.props.navigation.navigate('UserReviewPage') : 
                        title === 'Settings' && this.props.navigation.navigate('SettingsPage') }}
                    >
                    <View>
                        <Text style={styles.content_title}>{title}</Text>
                        <Text style={styles.content_value}>{value}</Text>
                    </View>
                    <SimpleLineIcon name='arrow-right' size={16} color='#B3B3C3'/>
                </Pressable>
                <View style={{borderBottomColor:'#E1E1E1', borderBottomWidth:1,}}></View>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header_container}>
                    <ComponentHeadline headline='My profile'/>
                    <View style={styles.user_container}>
                        <Image source={image1} style={styles.user_image}/>
                        <View style={{marginLeft:25}}>
                            <Text style={{fontSize:20, fontWeight:'500'}}>Cale Hanetuse</Text>
                            <Text style={{color:'#B3B3C3', fontSize:15}}>@userid</Text>
                        </View>
                    </View>
                </View>
                { this._renderContent('My orders', 'Already have 12 orders') }
                { this._renderContent('My reviews', 'Reviews for 4 items') }
                { this._renderContent('Settings', 'Notification, password')}
                <Pressable 
                    style={styles.logout_container}
                    onPress={()=> this.props.navigation.navigate('LoginPage')}
                    >
                    <SimpleLineIcon 
                        name='logout' 
                        size={18} 
                        color='#B3B3C3' 
                        style={{transform: [{rotateY: '180deg'}],}}
                        />
                    <Text style={styles.logout_txt}>Logout</Text>
                </Pressable>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1, 
        backgroundColor:'#ffffff',
    },
    header_container : {
        width:'100%', 
        paddingTop:'15%',
    },
    user_container : {
        flexDirection:'row', 
        paddingHorizontal:20, 
        paddingTop:20, 
        paddingBottom:40,
    },
    user_image : {
        width:60, 
        height:60, 
        borderRadius:60/2, 
        borderWidth:1,
        backgroundColor:'#E5E5E5'
    },
    content_container : {
        paddingHorizontal:14, 
        paddingTop:20, 
        paddingBottom:10, 
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center',
    },
    content_title : {
        fontSize: 20, 
        fontWeight:'500',
    },
    content_value : {
        color:'#B3B3C3', 
        fontSize:16,
    },
    logout_container : {
        flexDirection:'row', 
        paddingHorizontal:16, 
        paddingTop: 40, 
        alignItems:'center',
    },
    logout_txt : {
        marginLeft:16, 
        fontSize:18, 
        fontWeight:'500',
    },

})
