import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import {connect} from 'react-redux';
import *as loginAction from '../actions/loginAction';
import {NavigationActions} from 'react-navigation';
import *as navTypes from '../constants/navTypes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ececec'
    },
    loginBtn: {
        borderWidth: 1,
        padding: 5,
    },
    touchLoginBtn: {
        marginTop: 50
    }
});

class LoginPage extends Component {
    static navigationOptions = {
        title: 'login',
    };

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.isSuccess) {
            const navAction = NavigationActions.navigate({routeName: navTypes.MAIN});
            this.props.navigation.dispatch(navAction);
            return false;
        } else {
            return true;
        }
    }

    render() {
        const {login} = this.props;
        return (
            <View style={styles.container}>
                <Text>status: {this.props.status}</Text>
                <TouchableOpacity onPress={() => login()} style={styles.touchLoginBtn}>
                    <View style={styles.loginBtn}>
                        <Text>login</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

// this is a container component,responsible for organization state
export default connect(
    (rootState) => (rootState.login),
    (dispatch) => ({
        login: () => dispatch(loginAction.login())
    })
)(LoginPage)
