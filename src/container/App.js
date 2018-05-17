import {
    createStackNavigator,
} from 'react-navigation';
import {
    createStore,
    applyMiddleware,
    combineReducers,
} from 'redux';
import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware,
    createNavigationReducer,
} from 'react-navigation-redux-helpers';
import {Provider, connect} from 'react-redux';
import React from 'react';

const AppNavigator = createStackNavigator(AppRouteConfigs);

const navReducer = createNavigationReducer(AppNavigator);

const appReducer = combineReducers({
    nav: navReducer,
    ...
});

const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);
const addListener = createReduxBoundAddListener("root");

class App extends React.Component {
    render() {
        return (
            <AppNavigator navigation={{
                dispatch: this.props.dispatch,
                state: this.props.nav,
                addListener,
            }}/>
        );
    }
}

const mapStateToProps = (state) => ({
    nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(
    appReducer,
    applyMiddleware(middleware),
);

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState/>
            </Provider>
        );
    }
}
