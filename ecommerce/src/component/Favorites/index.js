import React, { PureComponent } from 'react'
import { Pressable, StyleSheet, } from 'react-native'

import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

export default class ComponentFavorites extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            selected : false,
        }
    }
    render() {
        return (
            <Pressable style={this.props.square ? styles.add_favorites : styles.container} onPress={()=>this.setState({selected : !this.state.selected})}>
                <MaterialIcon name={ this.state.selected ? 'favorite' : 'favorite-border'} size={20} color={this.props.square ? '#ffffff' : '#FF6E4E'}/>
            </Pressable>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        width:40, 
        height:40, 
        borderRadius:40/2, 
        backgroundColor:'#ffffff',  
        shadowColor: 'gray',
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 5, 
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        bottom:31,
        right:0
    },
    add_favorites : {
        width:37, 
        height:37, 
        borderRadius:10, 
        backgroundColor:'#010035', 
        justifyContent:'center', 
        alignItems:'center',
    },
})