import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import HomeScreen from "app/views/Home";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

export default createAppContainer(
  createBottomTabNavigator({
    Home: {
      screen: HomeStack,
      navigationOptions: HomeScreen.navigationOptions
    }
  })
);
