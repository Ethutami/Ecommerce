import React, { PureComponent } from 'react'
import { Text, View, TextInput, StyleSheet, Image, TouchableOpacity} from 'react-native'

import GridIcon from '../../assets/icon/gridIcon.png'
import MaterialComunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Antdesign from 'react-native-vector-icons/AntDesign'

export default class SearchBar extends PureComponent {
    constructor(props){  
        super(props);  
        this.state = {  
            switch_view: false 
         }  
    }  

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrap_search}>
                    <Antdesign name='search1' color='#FF6E4E' size={16}/>
                    <TextInput
                    style={{marginLeft:12}}
                        placeholder ='search'
                    />
                </View>
                <TouchableOpacity 
                    style={styles.circle_orange}
                    onPress ={()=> this.setState({switch_view:!this.state.switch_view} )}
                >
                    {
                        this.state.switch_view ?
                        <MaterialComunityIcon name='format-list-text' size={20} color='#ffffff'/> :
                        <Image source={GridIcon} style={styles.grid_icon}/>
                    }
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop:35, 
        flexDirection:'row', 
        justifyContent:'space-between',
        alignItems:'center'
    },
    wrap_search : {
        width:'75%',
        height:34,
        backgroundColor:'#ffffff', 
        borderRadius:50, 
        marginLeft:22, 
        paddingHorizontal:24, 
        flexDirection:'row', 
        alignItems:'center', 
        shadowColor: '#BFC5F5',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    circle_orange : {
        width:34, 
        height:34, 
        borderRadius:34/2, 
        backgroundColor:'#FF6E4E', 
        marginRight:22,
        justifyContent:'center',
        alignItems:'center'
    },
    grid_icon : {
        width:14, 
        height:14, 
        resizeMode:'stretch',
    },
})
