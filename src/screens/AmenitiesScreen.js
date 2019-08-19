import React, { useReducer } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Category from "../components/Category";
import AmenitiesList from "../components/AmenitiesList";

const reducer = (state, action) => {
  switch (action.type) {
    case "change_pillow":
      if (state.pillow > 0) {
        alert("This item has already been selected.");
        return { ...state, pillow: state.pillow + 0 };
      }
      return { ...state, pillow: state.pillow + action.payload };
    case "change_blanket":
      if (state.blanket > 0) {
        alert("This item has already been selected.");
        return { ...state, blanket: state.blanket + 0 };
      }
      return { ...state, blanket: state.blanket + action.payload };
    case "change_hotTowel":
      if (state.hotTowel > 0) {
        alert("This item has already been selected.");
        return { ...state, hotTowel: state.hotTowel + 0 };
      }
      return { ...state, hotTowel: state.hotTowel + action.payload };
    case "change_newspaper":
      if (state.newspaper > 0) {
        alert("This item has already been selected.");
        return { ...state, newspaper: state.newspaper + 0 };
      }
      return { ...state, newspaper: state.newspaper + action.payload };
  }
};

const AmenitiesScreen = () => {
  const [state, dispatch] = useReducer(reducer, {
    pillow: 0,
    blanket: 0,
    hotTowel: 0,
    newspaper: 0
  });

  return (
    <View>
      <Text style={styles.titleStyle}>Amenities</Text>
      <View style={styles.categoryStyle}>
        <TouchableOpacity
          onPress={() => dispatch({ type: "change_pillow", payload: 1 })}
        >
          <Category
            title="Pillows"
            imageSource={require("../../assets/pillow.jpeg")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => dispatch({ type: "change_blanket", payload: 1 })}
        >
          <Category
            title="Blankets"
            imageSource={require("../../assets/blanket.jpeg")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.categoryStyle}>
        <TouchableOpacity
          onPress={() => dispatch({ type: "change_hotTowel", payload: 1 })}
        >
          <Category
            title="Hot Towel"
            imageSource={require("../../assets/hottowel.jpg")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch({ type: "change_newspaper", payload: 1 })}
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
        <AmenitiesList
          title="List of items selected"
          pillowQty={state.pillow}
          blanketQty={state.blanket}
          hotTowelQty={state.hotTowel}
          newspaperQty={state.newspaper}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 20,
    marginHorizontal: 5
  },
  categoryStyle: {
    flexDirection: "row",
    justifyContent: "center"
  }
});

export default AmenitiesScreen;
