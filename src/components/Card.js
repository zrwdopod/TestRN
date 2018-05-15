import React,{Component} from 'react';
import PropTypes from 'prop-types';

import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

export default class Card extends Component{
    static propTypes = {
        rowData: PropTypes.object.isRequired
    };
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props.rowData.image);
        // source={require('./assets/gta5.jpg')}

        return (
            <View>
                <Text style={styles.text}>{this.props.rowData.text}</Text>
                <Image
                    style={styles.image}
                    // source={require(this.props.rowData.image)}
                    source={{uri: this.props.rowData.image}}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        width:100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    image:{
        width:375,
        height:234.375
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});