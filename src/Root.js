// todo redux-actions使用
import React, {Component} from 'react';

import {Provider} from 'react-redux';

import configureStore from './store/ConfigureStore';
import {App} from './container/App';

import { Provider } from 'react-redux';

import AppWithNavigationState from './navigators/AppNavigator';

const store = configureStore();

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}
