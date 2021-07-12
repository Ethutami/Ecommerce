import React, { PureComponent } from 'react'
import { Text, View, TextInput, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native'

import MaterialComunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Antdesign from 'react-native-vector-icons/AntDesign'

import AddFilter from '../Filter'

export default class ComponentSearchBar extends PureComponent {
    constructor(props){  
        super(props);  
        this.state = {  
            switch_view: false 
         }  
    }  

    render() {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={()=>alert('j')}>
                    <View style={styles.wrap_search} >
                        <Antdesign name='search1' color='#FF6E4E' size={16}/>
                        <Text style={{marginLeft:12, color:'rgba(1, 0, 53, 0.5)'}}>search</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableOpacity onPress ={()=> this.setState({switch_view:!this.state.switch_view} )}>
                    {
                        this.state.switch_view ?
                        <MaterialComunityIcon name='format-list-text' size={20} color='#FF6E4E'/> :
                        <MaterialComunityIcon name='view-grid-outline' size={20} color='#FF6E4E'/>
                
                    }
                </TouchableOpacity>
                <AddFilter/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingVertical:18, 
        flexDirection:'row', 
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:10,
    },
    wrap_search : {
        width:'75%',
        height:34,
        backgroundColor:'#ffffff', 
        borderRadius:50, 
        paddingHorizontal:24, 
        flexDirection:'row', 
        alignItems:'center', 
        shadowColor: '#BFC5F5',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },

})
