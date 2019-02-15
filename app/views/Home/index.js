import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons"; /* eslint-disable-line import/no-extraneous-dependencies */
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

const HomeScreen = () => (
  <View style={styles.container}>
    <Text>Home Screen</Text>
  </View>
);

const TabBarIcon = ({ tintColor }) => (
  <AntDesign name="home" color={tintColor} size={25} />
);

TabBarIcon.propTypes = {
  tintColor: PropTypes.string
};

TabBarIcon.defaultProps = {
  tintColor: ""
};

HomeScreen.navigationOptions = {
  tabBarIcon: TabBarIcon,
  title: "Home"
};

export default HomeScreen;
