import React from "react";
import { View, ScrollView, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import FoodList from "../components/FoodList";
import FoodImage from "../components/FoodImage";


const determineFood = () => {
  const time = new Date().getHours();
  if (time > 4 && time < 11) {
    return 'breakfast';
  } else if (time >= 11 && time < 16) {
    return 'lunch';
  } else {
    return 'dinner';
  }
}

const alertMessage = (beveragesType, navigation) => {
  Alert.alert(
    'Selection Confirmation', // title
    `You have selected "${beveragesType}".
    Do you want to proceed with this?`, // message
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

const FoodScreen = ({ navigation }) => {
  const foodType = determineFood();
  switch (foodType) {
    case 'breakfast':
      return (
        <ScrollView>
          <FoodList title='Breakfast' />
          <View>
            <TouchableOpacity onPress={() => alertMessage('Nasi Lemak', navigation)}>
              <FoodImage title='Nasi Lemak' imageSource={require('../../assets/nasi_lemak.jpg')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alertMessage('Omelette', navigation)}>
              <FoodImage title='Omelette' imageSource={require('../../assets/western_omelet.jpg')} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      );
    case 'lunch':
      return (
        <ScrollView>
          <FoodList title='Lunch' />
          <View>
            <TouchableOpacity onPress={() => alertMessage('Hainanese Chicken Rice', navigation)}>
              <FoodImage title='Hainanese Chicken Rice' imageSource={require('../../assets/chicken_rice.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alertMessage('Beef Brisket Noodle', navigation)}>
              <FoodImage title='Beef Brisket Noodle' imageSource={require('../../assets/beef_brisket_noodle.jpg')} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      );
    case 'dinner':
      return (
        <ScrollView>
          <FoodList title='Dinner' />
          <View>
            <TouchableOpacity onPress={() => alertMessage('Hokkien Mee', navigation)}>
              <FoodImage title='Hokkien Mee' imageSource={require('../../assets/hokkien_mee.jpg')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alertMessage('Roasted Salmon', navigation)}>
              <FoodImage title='Roasted Salmon' imageSource={require('../../assets/salmon.jpg')} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      );
  }
};

const styles = StyleSheet.create({});

export default withNavigation(FoodScreen);
