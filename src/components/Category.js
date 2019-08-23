import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

const Category = ({ title, imageSource }) => {
  return (
    <View>
      <Image style={styles.imageStyle} source={imageSource} />
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 150,
    width: 150,
    marginHorizontal: 15
  },
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

export default Category;
