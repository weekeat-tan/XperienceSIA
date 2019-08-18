import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { withNavigation } from "react-navigation";

const FoodScreen = () => {
  return (
    <View>
      <Text>Food Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default withNavigation(FoodScreen);
