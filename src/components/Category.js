import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

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
    textAlign: 'center'
  }
});

export default Category;
