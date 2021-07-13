import React, { PureComponent } from 'react'
import { Text, TextInput, View } from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign'

export class SearchPage extends PureComponent {
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#E5E5E5',}}>
                <View style={{flexDirection:'row', backgroundColor:'#ffffff', paddingTop:24, paddingHorizontal:10, paddingBottom:10, alignItems:'center', justifyContent:'space-between'}}>
                    <AntDesign name='arrowleft' size={24} color='#010035' onPress={()=> this.props.navigation.goBack()}/>
                    <TextInput
                        style={{backgroundColor:'#E5E5E5', width:'90%', paddingHorizontal:10}}
                        placeholder='search anything'
                    />
                </View>
            </View>
        )
    }
}

export default SearchPage
