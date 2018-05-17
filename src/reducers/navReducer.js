import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';
import * as loginTypes from '../constants/loginTypes';
import * as navTypes from '../constants/navTypes';

const firstAction = AppNavigator.router.getActionForPathAndParams(navTypes.LOGIN);
const secondAction = AppNavigator.router.getActionForPathAndParams(navTypes.MAIN);
const tempNavState = AppNavigator.router.getStateForAction(firstAction);

const initialNavState = AppNavigator.router.getStateForAction(
    firstAction,
    // secondAction,
    // tempNavState
);

function nav(state = initialNavState, action) {
    let nextState;
    switch (action.type) {
        case loginTypes.LOGIN_DONE:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: navTypes.MAIN }),
                state
            );
            break;
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }
    return nextState || state;
}

export default nav;