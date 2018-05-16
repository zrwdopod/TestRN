import React, { Component } from 'react';

import { Provider } from 'react-redux';

import configureStore from './store/ConfigureStore';
import App from './container/App';

const store = configureStore();

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}