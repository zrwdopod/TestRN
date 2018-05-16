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

const mainAction = NavigationActions.navigate({routeName: 'Main'});

class LoginPage extends Component {
    static navigationOptions = {
        title: 'LoginPage',
    };

    shouldComponentUpdate(nextProps, nextState) {
        if ( nextProps.isSuccess) {
            this.props.navigation.dispatch(mainAction);
            return false;
        }
        return true;
    }

    render() {
        const {login} = this.props;
        return (
            <View style={styles.container}>
                <Text>状态: {this.props.status}</Text>
                <TouchableOpacity onPress={() => login()} style={{marginTop: 50}}>
                    <View style={styles.loginBtn}>
                        <Text>登录</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

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
    }
});

export default connect(
    (state) => ({
        status: state.loginIn.status,
        isSuccess: state.loginIn.isSuccess,
        user: state.loginIn.user,
    }),
    (dispatch) => ({
        login: () => dispatch(loginAction.login()),
    })
)(LoginPage)
