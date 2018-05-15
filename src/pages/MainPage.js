import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import List from '../components/List';
import Bar from '../components/Bar';

const instructions = Platform.select({
    ios: 'ios',
    android: 'android',
});

type Props = {};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default class MainPage extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Bar></Bar>
                <Text style={styles.welcome}>
                    {instructions}
                </Text>
                <List></List>

            </View>
        );
    }
}