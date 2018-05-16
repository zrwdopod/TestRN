import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

const styles = StyleSheet.create({
    card: {
        flex: 1,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    image: {
        width: 375,
        height: 234.375
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

// this is a pure display component,responsible for display,without state manage
export default class Card extends Component {
    static propTypes = {
        rowData: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        let rowData = this.props.rowData;
        return (
            <View>
                <Text style={styles.text}>{rowData.text}</Text>
                <Image
                    style={styles.image}
                    source={{uri: rowData.image}}
                />
            </View>
        );
    }
};
