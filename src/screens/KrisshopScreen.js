import React, { Component } from "react";
import { View, Text, StyleSheet, WebView } from "react-native";
import { withNavigation } from "react-navigation";

class KrisshopScreen extends Component {
  render() {
    return <WebView source={{ uri: "https://www.krisshop.com/en/" }} />;
  }
}

const styles = StyleSheet.create({});

export default withNavigation(KrisshopScreen);
