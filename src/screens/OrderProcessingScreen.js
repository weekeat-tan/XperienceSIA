import React from "react";
import { View, Text, StyleSheet, Button, Dimensions } from "react-native";
import { withNavigation } from "react-navigation";


const OrderProcessingScreen = ({ navigation }) => {

  const goBack = navigation.goBack;
  const timeout = setTimeout(() => goBack('home'), 1500);

  return (
    <View style={styles.backGroundStyle}>
      <Text style={styles.textStyle} onLoad={timeout}>
        Your request has been processed!
        </Text>
      {/* <Button onPress={() => goBack('home')} title='OK' onLoad={timeout} /> */}
    </View>

  );
};

const dimensions = Dimensions.get("screen");

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
  backGroundStyle: {
    height: dimensions.height,
    width: dimensions.width,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default withNavigation(OrderProcessingScreen);
