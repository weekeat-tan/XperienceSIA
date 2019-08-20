import React from "react";
import { Text, View, Dimensions, StyleSheet, Image } from "react-native";
import { Actions } from "react-native-router-flux";

import { Card, Button, CardSection } from "../components/common";

const Home = (props) => {
  const navigation = props.navigation;
  return (
    <View style={styles.backgroundStyle}>
      <Image
        style={{ alignSelf: "center", marginTop: 20 }}
        source={require("../../assets/sia_logo.png")}
      />
      <Text style={styles.textStyleOne}>Welcome Onboard</Text>
      <Text style={styles.textStyleTwo}>What would you like to do?</Text>
      <Card>
        <CardSection>
          <Button
            buttonText={"Entertainment"}
            onPress={() => navigation.navigate("SelectMovies")}
          // onPress={() => Actions.movies()}
          />
        </CardSection>
        <CardSection>
          <Button
            buttonText={"Services"}
            onPress={() => navigation.navigate({ routeName: "ServicesHome", key: "home" })}
          // onPress={() => Actions.services()}
          />
        </CardSection>
      </Card>
    </View>
  );
};
const dimensions = Dimensions.get("screen");

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "white",
    height: dimensions.height,
    width: dimensions.width
  },
  textStyleOne: {
    fontSize: 28,
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40
  },
  textStyleTwo: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 30,
    marginBottom: 15
  }
});

export default Home;
