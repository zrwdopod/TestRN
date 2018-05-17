import {StackNavigator} from 'react-navigation';
import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';
import *as navTypes from '../constants/navTypes';

const App = StackNavigator({
    [navTypes.LOGIN]: {screen: LoginPage},
    [navTypes.MAIN]: {screen: MainPage},
});

export default App
