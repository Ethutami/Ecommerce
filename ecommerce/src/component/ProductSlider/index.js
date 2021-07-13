import React, { PureComponent } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import Carousel, {Pagination} from 'react-native-snap-carousel';
import { connect } from 'react-redux';

const sliderWidth = Dimensions.get('window').width;
const itemWidth = Dimensions.get('window').width;
const itemHeight = 200;

const mapStateToProps = state => {
    return {
        entries: state.product.entries
    }
};

export class ComponentProductSlider extends PureComponent {
    constructor(props){  
        super(props);  
        this.state = {  
            switch_view: false,
            activeSlide :0
         }  
    }  
    _renderItem = ({item, index}) => {
        return (
            <View style={styles.slider}>
                <Image source={item.photo} style={styles.slide_image_item}/>
                <Text style={styles.title}>{ item.title }</Text>
            </View>
        );
    }
    get pagination ()  {
        return (
                <Pagination
                    dotsLength={this.props.entries.length}
                    activeDotIndex={this.state.activeSlide}
                    containerStyle={{}}
                    dotStyle={{
                        width: 8,
                        height: 8,
                        borderRadius: 8/2,
                        marginHorizontal: 8,
                        //backgroundColor: 'rgba(255, 110, 78, 1)',
                    }}
                    dotColor='rgba(255, 110, 78, 1)'
                    inactiveDotColor='#010035'
                    inactiveDotStyle={{
                        // Define styles for inactive dots here
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />
        );
    }
    render() {
        return (
            <View style={{paddingVertical:12}}>
                <View style={styles.wrap_label}>
                    <Text style={styles.label_txt}>Hot Seles</Text>
                    <TouchableOpacity>
                        <Text style={styles.view_all}>see more</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        layout={"default"}
                        autoplay={true}
                        loop={true}
                        data={this.props.entries}
                        renderItem={this._renderItem}
                        sliderWidth={sliderWidth}
                        itemWidth={itemWidth}
                        onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                        />
                    <View style={styles.pigination_container}>
                        { this.pagination }
                    </View>
                </View>
            </View>
        )
    }
}

export default connect(
    mapStateToProps,
    // mapDispatchToProps()
    )(ComponentProductSlider);
    
    
const styles = StyleSheet.create({
    wrap_label : {
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center',
        marginBottom:8,
    },
    label_txt : {
        color:'#010035', 
        fontFamily:'Mark_pro', 
        fontWeight:'bold', 
        fontSize:25,
    },
    view_all : {
        color:'#FF6E4E', 
        fontSize:15,
    },
    slider : { 
        width: itemWidth,
        height: itemHeight,
    },
    slide_image_item : {
        height:'100%', 
        width:'100%', 
        resizeMode:'stretch',
    },
    pigination_container : {
        position:'absolute', 
        bottom:0, 
        left:0, 
        right:0, 
        justifyContent:'center'
    },
})

