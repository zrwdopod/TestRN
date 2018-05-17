import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {StackNavigator, TabNavigator} from 'react-navigation';

import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';
import {addListener} from '../utils/redux';
import * as navTypes from '../constants/navTypes';

export const AppNavigator = StackNavigator({
    [navTypes.LOGIN]: {screen: LoginPage},
    [navTypes.MAIN]: {screen: MainPage}
});

class AppWithNavigationState extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        nav: PropTypes.object.isRequired,
    };

    render() {
        const {dispatch, nav} = this.props;
        return (
            <AppNavigator
                navigation={{
                    dispatch,
                    state: nav,
                    addListener,
                }}>
            </AppNavigator>
        );
    }
}

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);