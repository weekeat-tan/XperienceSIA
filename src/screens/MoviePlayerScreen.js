import React, { Component } from "react";
import { Text, StyleSheet, Dimensions } from "react-native";
import Video from "react-native-video";

class MoviePlayerScreen extends Component {

  onBuffer = () => {
    alert("Buffering");
  }

  onError = () => {
    alert("Could not play video");
  }

  render() {
    // source={{uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}
    const movie = require('../../assets/aPrivateWar.mp4');
    return (
      <Video source={movie}
        ref={(ref) => {
          this.player = ref
        }}                                      // Store reference
        onBuffer={this.onBuffer}                // Callback when remote video is buffering
        onError={this.videoError}               // Callback when video cannot be loaded
        style={styles.backgroundVideo}
        controls
        fullscreen
        resizeMode={"cover"}
      />
    )
  }
}

const dimensions = Dimensions.get("screen");

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
});

export default MoviePlayerScreen;
