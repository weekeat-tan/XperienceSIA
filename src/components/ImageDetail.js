import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = props => {
  return (
    <View>
      <Image source={props.imageSource} style={{ height: 200, width: 200 }} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
