import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Category from "../components/Category";
import { withNavigation } from "react-navigation";
import { ScrollView } from "react-native-gesture-handler";

const alertMessage = (navigation) => {
  Alert.alert(
    'Attendant Service', // title
    'Do you require on-site attendant assistance?', // message
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => navigation.navigate('OrderProcessing'),
        style: 'default'
      },
    ], // button
    { cancelable: false },
  );
};

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
          <TouchableOpacity onPress={() => navigation.navigate("Beverages")}>
            <Category
              title="Beverages"
              imageSource={require("../../assets/bvgcat.jpg")}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Krisshop")}>
            <Category
              title="KrisShop"
              imageSource={require("../../assets/krisshopcat.jpg")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.categoryStyle}>
          <TouchableOpacity onPress={() => alertMessage(navigation)}
          >
            <Category
              title="On-site Service"
              imageSource={require("../../assets/callcat.jpg")}
            />
          </TouchableOpacity>

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
