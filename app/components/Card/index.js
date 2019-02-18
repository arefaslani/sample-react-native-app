import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get("screen").width * 0.8,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: "#ddd"
  }
});

const Card = ({
  item: { image, name, dateOfAdmission, price, distanceTravevlled }
}) => (
  <View style={styles.card}>
    <Image
      source={{ uri: image }}
      style={{ flex: 1, width: null, height: null }}
      resizeMode="cover"
    />
    <Text numberOfLines={1} style={{ fontSize: 20 }}>
      {name}
    </Text>
    <Text>{dateOfAdmission}</Text>
    <Text>
      &euro;
      {price}
    </Text>
    <Text>
      {distanceTravevlled}
      &nbsp;km
    </Text>
  </View>
);

Card.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    dateOfAdmission: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    distanceTravevlled: PropTypes.number.isRequired
  }).isRequired
};

export default Card;
