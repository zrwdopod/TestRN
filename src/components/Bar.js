import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import {connect} from 'react-redux';
import *as barAction from '../actions/barAction';
import *as listAction from '../actions/listAction';

const styles = StyleSheet.create({
    item:{
        fontSize:22,
        fontWeight:'bold'
    }
});

class Bar extends Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.orderBy !== this.props.orderBy) {
            this.props.reverseList();
            return true;
        }
        return true;
    }

    render() {
        const {orderByToggle} = this.props;
        return (
            <View>
                <Text style={styles.item} onPress={orderByToggle}>{this.props.orderBy}</Text>
            </View>
        );
    }
}

// this is a container component,responsible for organization state
export default connect(
    (rootState) => (rootState.bar),
    (dispatch) => ({
        orderByToggle: () => {
            dispatch(barAction.getToggleAction());
        },
        reverseList: () => {
            dispatch(listAction.getReverseAction());
        }
    })
)(Bar)
