import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  Dimensions
} from "react-native";
import { AntDesign } from "@expo/vector-icons"; /* eslint-disable-line import/no-extraneous-dependencies */
import PropTypes from "prop-types";

import logo from "assets/logo.png";
import data from "app/views/Home/data.json";
import Card from "app/components/Card";

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height * 0.3,
    // flex: 1,
    padding: 10
  },
  sectionLabel: {
    fontSize: 20,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  }
});

const HomeScreen = () => (
  <ScrollView>
    <View style={styles.container}>
      <Text style={styles.sectionLabel}>NEW</Text>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item, index) => `item-${index}`}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Card item={item} />}
      />
    </View>
    <View style={styles.container}>
      <Text style={styles.sectionLabel}>NEW</Text>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item, index) => `item-${index}`}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Card item={item} />}
      />
    </View>
    <View style={styles.container}>
      <Text style={styles.sectionLabel}>NEW</Text>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item, index) => `item-${index}`}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Card item={item} />}
      />
    </View>
  </ScrollView>
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
  headerTitle: <Image source={logo} />
};

export default HomeScreen;
