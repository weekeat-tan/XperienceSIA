import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AmenitiesList = ({
  title,
  pillowQty,
  blanketQty,
  hotTowelQty,
  newspaperQty
}) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.textStyle}>{title}</Text>
      <Text>Pillows Selected : {pillowQty}</Text>
      <Text>Blankets Selected : {blanketQty}</Text>
      <Text>Hot Towels Selected : {hotTowelQty}</Text>
      <Text>Newspapers Selected : {newspaperQty}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    margin: 20,
    textAlign: "center"
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 10
  }
});

export default AmenitiesList;
