import React, { useReducer } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert
} from "react-native";
import Category from "../components/Category";
import AmenitiesList from "../components/AmenitiesList";
import { Button, Card, CardSection } from "../components/common";

const alertMessage = (navigation, state) => {
  Alert.alert(
    "Confirm Amenities?", // title
    `You have selected a total of ${state.pillow + // message
      state.blanket +
      state.hotTowel +
      state.newspaper} items.`,
    [
      // button
      {
        text: "Cancel",
        style: "cancel"
      },
      {
        text: "Confirm",
        onPress: () => navigation.navigate("OrderProcessing"),
        style: "default"
      }
    ],
    { cancelable: false }
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case "change_pillow":
      if (state.pillow > 0) {
        Alert.alert(`1 ${action.name} has been removed.`);
        return { ...state, pillow: state.pillow - 1 };
      }
      return { ...state, pillow: state.pillow + action.payload };
    case "change_blanket":
      if (state.blanket > 0) {
        Alert.alert(`1 ${action.name} has been removed.`);
        return { ...state, blanket: state.blanket - 1 };
      }
      return { ...state, blanket: state.blanket + action.payload };
    case "change_hotTowel":
      if (state.hotTowel > 0) {
        Alert.alert(`1 ${action.name} has been removed.`);
        return { ...state, hotTowel: state.hotTowel - 1 };
      }
      return { ...state, hotTowel: state.hotTowel + action.payload };
    case "change_newspaper":
      if (state.newspaper > 0) {
        Alert.alert(`1 ${action.name} has been removed.`);
        return { ...state, newspaper: state.newspaper - 1 };
      }
      return { ...state, newspaper: state.newspaper + action.payload };
  }
};

const AmenitiesScreen = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, {
    pillow: 0,
    blanket: 0,
    hotTowel: 0,
    newspaper: 0
  });

  return (
    <ScrollView>
      <Text style={styles.introStyle}>
        Feel free to request the following items below
      </Text>
      <View style={styles.categoryStyle}>
        <TouchableOpacity
          onPress={() =>
            dispatch({ type: "change_pillow", payload: 1, name: "Pillow" })
          }
        >
          <Category
            title="Pillows"
            imageSource={require("../../assets/pillow.jpeg")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            dispatch({ type: "change_blanket", payload: 1, name: "Blanket" })
          }
        >
          <Category
            title="Blankets"
            imageSource={require("../../assets/blanket.jpeg")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.categoryStyle}>
        <TouchableOpacity
          onPress={() =>
            dispatch({ type: "change_hotTowel", payload: 1, name: "Hot Towel" })
          }
        >
          <Category
            title="Hot Towel"
            imageSource={require("../../assets/hottowel.jpg")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            dispatch({
              type: "change_newspaper",
              payload: 1,
              name: "Newspaper"
            })
          }
        >
          <Category
            title="Newspapers"
            imageSource={require("../../assets/newspaper.jpeg")}
          />
        </TouchableOpacity>
      </View>

      {state.pillow != 0 ||
      state.blanket != 0 ||
      state.hotTowel != 0 ||
      state.newspaper != 0 ? (
        <>
          <AmenitiesList
            title="List of items selected"
            pillowQty={state.pillow}
            blanketQty={state.blanket}
            hotTowelQty={state.hotTowel}
            newspaperQty={state.newspaper}
          />
          <View>
            <Card>
              <CardSection>
                <Button
                  buttonText={"Submit"}
                  onPress={() => alertMessage(navigation, state)}
                />
              </CardSection>
            </Card>
          </View>
        </>
      ) : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryStyle: {
    flexDirection: "row",
    justifyContent: "center"
  },
  introStyle: {
    fontSize: 24,
    textAlign: "center",
    marginVertical: 20,
    marginHorizontal: 5,
    fontWeight: "bold",
    fontStyle: "italic"
  }
});

export default AmenitiesScreen;
