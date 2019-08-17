import { Animated, Easing } from 'react-native';
import {createStackNavigator, createDrawerNavigator, createSwitchNavigator, createAppContainer} from 'react-navigation';
import LoginScreen from "./screens/Login";
import ProfileScreen from "./screens/Profile";
import HomeScreen from "./drawercontent/Home";
import LogOutScreen from "./drawercontent/LogOut";


//	#233040
console.disableYellowBox = true;

const MainDrawerNavigator = createDrawerNavigator(
  {
      Home: {
        screen: HomeScreen
      },
      LogOut: {
        screen: LogOutScreen
      }
  },
  {
    initialRouteName: 'Home',

  }
);

const MainStackNavigator = createStackNavigator({
  Profile: { screen: ProfileScreen },
  Drawer: { screen: MainDrawerNavigator }
},
{
    initialRouteName: 'Profile',
    headerMode: 'none',
    mode: 'modal',
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateY }] };
      },
    }),
}
);

const AppSwitchNavigator = createSwitchNavigator(
  {
    Login: LoginScreen,
    AppNavigator: MainStackNavigator
  },
  {
    initialRouteName: 'Login'
  }
);

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;