import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../views/Home';
import Single from '../views/Single';
import Profile from '../views/Profile';
import Authloading from '../views/Authloading';
import Login from '../views/Login';

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Profile',
    },
  },
},
{
  initialRouteName: 'Home',
});

const StackNavigator = createStackNavigator(
    // RouteConfigs
    {
      Home: {
        screen: TabNavigator,
        navigationOptions: {
          header: null,
        },
      },
      Single: {
        screen: Single,

      },
      Logout: {
        screen: Login,
      },
    },
);

const Navigator = createSwitchNavigator(
    {
      Authloading: Authloading,
      App: StackNavigator,
      Auth: Login,
    },
    {
      initialRouteName: 'Authloading',
    },
);

export default createAppContainer(Navigator);
