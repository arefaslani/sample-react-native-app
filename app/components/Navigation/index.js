import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import HomeScreen from "app/views/Home";

const defaultStackNavigationOptions = {
  headerStyle: {
    backgroundColor: "#feeb3e"
  }
};

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    defaultNavigationOptions: defaultStackNavigationOptions
  }
);

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: {
        screen: HomeStack,
        navigationOptions: HomeScreen.navigationOptions
      }
    },
    {
      tabBarOptions: {
        style: {
          backgroundColor: "#feeb3e"
        },
        inactiveTintColor: "#000",
        activeTintColor: "#000"
      }
    }
  )
);
