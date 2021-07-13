import React, { PureComponent } from 'react'
import { Text, View, Dimensions, StyleSheet, Image } from 'react-native'
import Carousel, { ParallaxImage }  from 'react-native-snap-carousel';
import { connect } from 'react-redux';

const { width: screenWidth } = Dimensions.get('window')

const mapStateToProps = state => {
    return {
        entries: state.product.entries
    }
};



export class ComponentProductCarausel extends PureComponent {
    constructor(props){  
        super(props);  
        this.state = {  
            switch_view: false,
         }  
    }
    _renderItem ({item, index}, parallaxProps) {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={item.photo}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
            </View>
        );
    }
    render() {
        return (
            <View style={{ paddingTop:10, paddingBottom:5}}>
                <Carousel
                    loop={true}
                    sliderWidth={screenWidth}
                    sliderHeight={screenWidth}
                    itemWidth={screenWidth - 60}
                    data={this.props.entries}
                    renderItem={this._renderItem}
                    hasParallaxImages={true}
                />
            </View>
        )
    }
}

export default connect(
    mapStateToProps,
    // mapDispatchToProps()
    )(ComponentProductCarausel);
    
    
const styles = StyleSheet.create({
    item: {
        width: screenWidth - 60,
        height: screenWidth - 60,
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: 'gray',
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 5, 
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
})