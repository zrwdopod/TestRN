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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5fcff'
    },
    loginBtn: {
        borderWidth: 1,
        padding: 5,
    },
    touchLoginBtn:{
        marginTop: 50
    }
});

class LoginPage extends Component {
    static navigationOptions = {
        title: 'LoginPage',
    };

    shouldComponentUpdate(nextProps, nextState) {
        const mainAction = NavigationActions.navigate({routeName: 'Main'});
        if (nextProps.isSuccess) {
            this.props.navigation.dispatch(mainAction);
            return false;
        }
        return true;
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
        login: () => dispatch(loginAction.login()),
    })
)(LoginPage)
