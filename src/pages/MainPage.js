import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {connect} from 'react-redux';

import List from '../components/List';
import Bar from '../components/Bar';

const instructions = Platform.select({
    ios: 'ios',
    android: 'android',
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

class MainPage extends Component {
    static navigationOptions = {
        title: 'MainPage',
    };

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    render() {
        return (
            <View style={styles.container}>
                <Bar></Bar>
                <List></List>
                <Text style={styles.welcome}>{instructions}</Text>
            </View>
        );
    }
}

// this is a container component,responsible for organization state
export default connect(
    (rootState) => (rootState.mainPage),
    (dispatch) => ({})
)(MainPage)