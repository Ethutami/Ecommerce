import React, { PureComponent, useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import Modal from 'react-native-modal';
import DropDownPicker from 'react-native-dropdown-picker';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export class AddFilter extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            modalVisible: false,
            showDropDown1: false,
            showDropDown2: false,
            showDropDown3: false,
        }
    }
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    FilterOptions = (title, dropdown, data) => {
        return(
            <View style={{marginTop:25}}>
                <Text style={{fontSize:18, fontWeight:'bold', color:'#010035'}}>{title}</Text>
                <DropDownPicker
                    items={[
                        {label: 'Item 1', value: 'item1'},
                        {label: 'Item 2', value: 'item2'},
                    ]}
                    open={dropdown}
                    setOpen={()=>{
                        dropdown === this.state.showDropDown1 ? this.setState({showDropDown1 : !this.state.showDropDown1}) :
                        dropdown ===  this.state.showDropDown2 ? this.setState({showDropDown2 : !this.state.showDropDown2}) :
                        this.setState({showDropDown3 : !this.state.showDropDown3})
                    }}
                    labelProps={{
                        numberOfLines: 1
                    }}
                    containerStyle={{height: 40, width:100, marginTop:10}}
                    />
            </View>
    
        )
    }

    render() {
        return (
            <View style={{}}>
                <MaterialCommunityIcons 
                    name='filter-outline' 
                    size={20} 
                    color='#FF6E4E' 
                    onPress={() => this.setModalVisible(true)}
                    style={{transform: [{rotateY: '180deg'}],}}
                    />
                <Modal
                    animationIn="fadeIn"
                    transparent={true}
                    isVisible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        this.setModalVisible(!this.state.modalVisible);
                    }}
                    style={{ justifyContent: 'flex-end', margin: 0 }}
                    
                    >
                    <View style={styles.modal_container}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.modal_inner_top_container}>
                                <Pressable 
                                    style={styles.modal_button_close} 
                                    onPress={() => this.setModalVisible(!this.state.modalVisible)}
                                    >
                                    <MaterialCommunityIcons name='close' size={18} color='#ffffff' />
                                </Pressable>
                                <Text style={styles.modal_label}>Filter options</Text>
                                <Pressable 
                                    style={styles.modal_button_done}
                                    onPress={() => this.setModalVisible(!this.state.modalVisible)}
                                    >
                                    <Text style={styles.modal_text_done}>Done</Text>
                                </Pressable>
                            </View>
                            <View style={{marginTop:10, marginBottom:30}}>
                                {this.FilterOptions('Brand', this.state.showDropDown1, '')}
                                {this.FilterOptions('Price', this.state.showDropDown2, '')}
                                {this.FilterOptions('Size', this.state.showDropDown3, '')}
                            </View>
                        </ScrollView>
                    </View>
                </Modal>
            </View>
        )
    }
}

export default AddFilter

const styles = StyleSheet.create({

    modal_container: {
        width: '100%',
        height:'50%',
        backgroundColor: '#FFFFFF',
        borderTopRightRadius:18,
        borderTopLeftRadius:18,
        paddingHorizontal:30,
        paddingTop:30   
    },
    modal_inner_top_container : {
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center',
    },
    modal_button_close : {
        width:37, 
        height:37, 
        borderRadius:10, 
        backgroundColor:'#010035', 
        justifyContent:'center', 
        alignItems:'center',
    },
    modal_button_done : {
        backgroundColor:'#FF6E4E', 
        height:37, 
        width:86, 
        borderRadius:10,
        alignItems:'center', 
        justifyContent:'center',
    },
    modal_text_done : {
        fontFamily: 'Mark_Pro',
        fontSize:18, 
        color:'#ffffff',
    },
    modal_label : {
        fontFamily: 'Mark_Pro', 
        fontWeight:'bold', 
        fontSize:18, 
        color:'#010035',
    },

})