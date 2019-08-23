import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";

import MoviePlayerScreen from "../screens/MoviePlayerScreen";

class MovieRow extends Component {
  renderMoviePlayer = async () => {
    this.props.navigation.navigate("playerScreen");
  }

  render() {
    return (
        <TouchableOpacity
          style={{
            marginTop: 10,
            marginLeft: 10,
            marginRight: 10,
            borderRadius: 5,
            shadowColor: '#000000',
            shadowOffset: {
              width: 10,
              height: 2
            },
            shadowRadius: 5,
            shadowOpacity: 1.0,
            backgroundColor: "#fff",
            elevation: 2 }
          }
          onPress={() => this.renderMoviePlayer()}
        >
            {this.props.children}
        </TouchableOpacity>

    );
  }
};

export default MovieRow;
