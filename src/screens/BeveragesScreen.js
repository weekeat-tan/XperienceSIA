import React, { useReducer } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView, Alert } from "react-native";
import { withNavigation } from "react-navigation";
import BeveragesList from '../components/BeveragesList';
import BeveragesImage from '../components/BeveragesImage';
import { TouchableOpacity } from "react-native-gesture-handler";

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

const BeveragesScreen = ({ navigation }) => {

  return (
    <ScrollView>
      <BeveragesList title='Coffee / Tea' />
      <View style={styles.imagesStyle}>
        <TouchableOpacity onPress={() => alertMessage('Coffee', navigation)}>
          <BeveragesImage title='Coffee' imageSource={require('../../assets/coffee.jpeg')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alertMessage('Tea', navigation)}>
          <BeveragesImage title='Tea' imageSource={require('../../assets/tea.jpg')} />
        </TouchableOpacity>
      </View>

      <BeveragesList title='Fruit Juices' />
      <View style={styles.imagesStyle}>
        <TouchableOpacity onPress={() => alertMessage('Apple', navigation)}>
          <BeveragesImage title='Apple' imageSource={require('../../assets/apple.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alertMessage('Orange', navigation)}>
          <BeveragesImage title='Orange' imageSource={require('../../assets/orange.jpg')} />
        </TouchableOpacity>
      </View>

      <BeveragesList title='Soft Drinks' />
      <View style={styles.imagesStyle}>
        <TouchableOpacity onPress={() => alertMessage('Coke', navigation)}>
          <BeveragesImage title='Coke' imageSource={require('../../assets/coke.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alertMessage('Sprite', navigation)}>
          <BeveragesImage title='Sprite' imageSource={require('../../assets/sprite.png')} />
        </TouchableOpacity>
      </View>

      <BeveragesList title='Plain Water' />
      <View style={styles.imagesStyle}>
        <TouchableOpacity onPress={() => alertMessage('Ice Mountain', navigation)}>
          <BeveragesImage title='Ice Mountain' imageSource={require('../../assets/ice_mountain.jpg')} />
        </TouchableOpacity>
      </View>

      <BeveragesList title='Alcoholic Drinks' />
      <View style={styles.imagesStyle}>
        <TouchableOpacity onPress={() => alertMessage('Libero Chianti', navigation)}>
          <BeveragesImage title='Libero Chianti' imageSource={require('../../assets/libero_chianti.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alertMessage('Black Label', navigation)}>
          <BeveragesImage title='Black Label' imageSource={require('../../assets/black_label.jpg')} />
        </TouchableOpacity>
      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  imagesStyle: {
    flexDirection: 'row',

  }
});

export default withNavigation(BeveragesScreen);
