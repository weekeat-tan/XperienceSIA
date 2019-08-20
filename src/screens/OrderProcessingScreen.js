import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { withNavigation } from "react-navigation";


const OrderProcessingScreen = ({ navigation }) => {

  const goBack = navigation.goBack;
  const timeout = setTimeout(() => goBack('home'), 1500);

  return (
    <View>
      <Text style={styles.textStyle} onLoad={timeout}>Your request has been processed!</Text>
      {/* <Button onPress={() => goBack('home')} title='OK' onLoad={timeout} /> */}
    </View>

  );
};

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    textAlignVertical: 'center',
    marginBottom: 15,
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default withNavigation(OrderProcessingScreen);
