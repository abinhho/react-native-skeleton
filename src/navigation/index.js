import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import AuthLoadingScreen from '../screens/AuthLoading';

import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';

import SignInScreen from '../screens/SignIn';

const AppStack = createStackNavigator(
    {
        Home: HomeScreen,
        Profile: ProfileScreen,
    },
    {
        initialRouteName: 'Home',
        headerLayoutPreset: 'center',
    }
);

const AuthStack = createStackNavigator(
    {
        SignIn: SignInScreen
    },
    {
        initialRouteName: 'SignIn',
        headerMode: 'none',
        headerLayoutPreset: 'center',
    }
);

const AppNavigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);

export default createAppContainer(AppNavigator);