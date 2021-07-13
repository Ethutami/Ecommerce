import React, { PureComponent } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

import AntDesgn from 'react-native-vector-icons/AntDesign'
import ComponentNavigationBar from '../../component/NavigationBar'
import image from '../../assets/image/1.jpg'


export default class CartPage extends PureComponent {
    render() {
        return (
            <View style={{width:'100%'}}>
                <ComponentNavigationBar headline='Cart' navigation={this.props.navigation}/>
                <ScrollView style={{marginTop:10}}>
                    <View style={{backgroundColor:'#ffffff', padding:10, flexDirection:'row',alignItems:'center', width:'100%'}}>
                        <Image source={image} style={{height:88, width:'25%', resizeMode:'stretch', borderRadius:10}}/>
                        <View style={{paddingLeft:17, paddingRight:33, width:'50%'}}>
                            <Text style={{fontSize:20, fontWeight:'500', color:'#010035'}}>Product Name</Text>
                            <Text style={{fontSize:20, fontWeight:'500', color:'#FF6E4E'}}>Price</Text>
                        </View>
                        <View style={{width:'15%', alignItems:'center'}}>
                            <AntDesgn name='minus' size={24} color='#FF6E4E'/>
                            <Text>0</Text>
                            <AntDesgn name='plus' size={24} color='#FF6E4E'/>
                        </View>
                        <AntDesgn name='delete' size={24} color='#FF6E4E' style={{alignSelf:'center'}}/>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
