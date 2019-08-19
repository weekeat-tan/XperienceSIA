import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { withNavigation } from "react-navigation";

const BeveragesScreen = () => {
  return (
    <View>
      <Text>beverages Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default withNavigation(BeveragesScreen);
