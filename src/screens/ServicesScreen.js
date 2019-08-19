import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Category from "../components/Category";
import { withNavigation } from "react-navigation";
import { ScrollView } from "react-native-gesture-handler";

const ServicesHomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View>
        <Text style={styles.introStyle}>
          Please choose the category that you need help with
        </Text>

        <View style={styles.categoryStyle}>
          <Category
            title="Food"
            imageSource={require("../../assets/foodcat.jpg")}
          />
          <TouchableOpacity onPress={() => navigation.navigate("Amenities")}>
            <Category
              title="Amenitites"
              imageSource={require("../../assets/amenitycat.jpg")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.categoryStyle}>
          <Category
            title="Beverages"
            imageSource={require("../../assets/bvgcat.jpg")}
          />
          <TouchableOpacity onPress={() => navigation.navigate("Krisshop")}>
            <Category
              title="KrisShop"
              imageSource={require("../../assets/krisshopcat.jpg")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.categoryStyle}>
          <Category
            title="Call"
            imageSource={require("../../assets/callcat.jpg")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  introStyle: {
    fontSize: 24,
    textAlign: "center",
    marginVertical: 20,
    marginHorizontal: 5
    // borderWidth: 2,
    // borderColor: 'black'
  },
  categoryStyle: {
    flexDirection: "row",
    justifyContent: "center"
  }
});

export default withNavigation(ServicesHomeScreen);
