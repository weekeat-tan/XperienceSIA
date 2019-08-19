import React, { Component } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";

import { Button, Header, Card, CardSection } from "../components/common";

class SelectMovies extends Component {
  state = { moviesChosen: [] }

  determineOpacity = (movieThumbnail) => {
    const { moviesChosen } = this.state;

    if (moviesChosen.find((eachMovie) => eachMovie === movieThumbnail)) {
      return 0.2;
    }
    else {
      return 1;
    }
  }

  toggleMoviesChosen = (movieThumbnail) => {
    const { moviesChosen } = this.state;

    const tempMoviesChosen = [...moviesChosen];

    // If user has already clicked on this movie
    if (tempMoviesChosen.find((eachMovie) => eachMovie === movieThumbnail)) {
      console.log("found tho")
      const filteredMovies = tempMoviesChosen.filter((eachMovie) => eachMovie !== movieThumbnail);
      this.setState({ moviesChosen: filteredMovies });
    }
    else {
      if (moviesChosen.length === 3) {
        alert("Max limit is 3");
        return;
      }

      tempMoviesChosen.push(movieThumbnail);
      this.setState({ moviesChosen: tempMoviesChosen });
    }
  }

  // MovieThumbnailRow = (source) => {
  //   return (
  //     <View style={{ flexDirection: "row", justifyContent: "space-between", paddingBottom: 20, flex: 1 }}>
  //       <MovieThumbnail source={source}
  //       <MovieThumbnail source={source}/>
  //     </View>
  //   )
  // };

  MovieThumbnailRow = (source1, source2) => {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-between", paddingBottom: 20, flex: 1 }}>
        {this.MovieThumbnail(source1)}
        {this.MovieThumbnail(source2)}
      </View>
    )
  }

  MovieThumbnail = (source) => {
    return (
      <TouchableOpacity
        onPress={() => this.toggleMoviesChosen(source.uri)}
      >
        <Image
          source={source}
          style={{ height: 180, width: 150, opacity: this.determineOpacity(source.uri), marginHorizontal: 25, borderRadius: 5 }}
        />
      </TouchableOpacity>
    )
  }

  // MovieThumbnail = (props) => {
  //   return (
  //     <TouchableOpacity
  //       onPress={() => this.toggleMoviesChosen(props.source)}
  //     >
  //       <Image
  //         source={props.source}
  //         style={{ height: 180, width: 150, opacity: this.determineOpacity(props.source) }}
  //       />
  //     </TouchableOpacity>
  //   )
  // }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ textAlign: "center", fontSize: 18, paddingBottom: 20 }}>
          Please choose the genres that you are interested in (a maximum of 3 genres)
        </Text>

        <ScrollView style={{ flex: 1 }}>
          {this.MovieThumbnailRow(
            { uri: "https://m.media-amazon.com/images/M/MV5BODFkMzljMWUtY2NjNS00NjZhLTk4MDItYWNjMjIyODZlNDc1XkEyXkFqcGdeQXVyNzEyMTk0MzM@._V1_UX182_CR0,0,182,268_AL_.jpg" },
            { uri: "https://m.media-amazon.com/images/M/MV5BZTg4ZWY3OGItNzM2MC00MjJmLTkyMzAtOWNmNTU2YmQxMzVjXkEyXkFqcGdeQXVyMjkxMTg0Mjc@._V1_UY268_CR4,0,182,268_AL_.jpg" })
          }
          {this.MovieThumbnailRow(
            { uri: "https://m.media-amazon.com/images/M/MV5BODBiZTQ2NzctMTE4NS00YjE3LTk5MWMtYWE0NDE0ZDE0YTJjXkEyXkFqcGdeQXVyODAzODU1NDQ@._V1_UX182_CR0,0,182,268_AL_.jpg" },
            { uri: "https://m.media-amazon.com/images/M/MV5BMDBhOTMxN2UtYjllYS00NWNiLWE1MzAtZjg3NmExODliMDQ0XkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_UX182_CR0,0,182,268_AL_.jpg" })
          }
          {this.MovieThumbnailRow(
            { uri: "https://m.media-amazon.com/images/M/MV5BMTk1MzM1ODEwOV5BMl5BanBnXkFtZTgwMTE0OTA4NTM@._V1_UX182_CR0,0,182,268_AL_.jpg" },
            { uri: "https://m.media-amazon.com/images/M/MV5BODNjMTllODUtZDYwMi00M2JmLWJiNGYtN2JlOWQ3NmViZDM5XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg" })
          }
          {this.MovieThumbnailRow(
            { uri: "https://m.media-amazon.com/images/M/MV5BMTYyNzEyNDAzOV5BMl5BanBnXkFtZTgwNTk3NDczNjM@._V1_UX182_CR0,0,182,268_AL_.jpg" },
            { uri: "https://m.media-amazon.com/images/M/MV5BMTFhMzRiOWEtYThjMS00MWU1LTk1YTctYjcxMDcxMGU4MzQ4XkEyXkFqcGdeQXVyNTUxNTI3MzY@._V1_UX182_CR0,0,182,268_AL_.jpg" })
          }
          {this.MovieThumbnailRow(
            { uri: "https://m.media-amazon.com/images/M/MV5BNmE5ZmE3OGItNTdlNC00YmMxLWEzNjctYzAwOGQ5ODg0OTI0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg" },
            { uri: "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg" })
          }
          {this.MovieThumbnailRow(
            { uri: "https://m.media-amazon.com/images/M/MV5BNDg1NTU2OWEtM2UzYi00ZWRmLWEwMTktZWNjYWQ1NWM1OThjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg" },
            { uri: "https://m.media-amazon.com/images/M/MV5BYTEyMTBmY2MtZmI0NC00M2IxLWE0ZTYtN2Q4OGYwMTM0OGNiXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_UY268_CR5,0,182,268_AL_.jpg" })
          }


          {/*<MovieThumbnailRow
            source1={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png" }}
            source2={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png" }}
          />

          <MovieThumbnailRow
            source1={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png" }}
            source2={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png" }}
          />

          <MovieThumbnailRow
            source1={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png" }}
            source2={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png" }}
          />*/}

          <View style={{ marginHorizontal: 20, marginBottom: 20 }}>
            <Button
              buttonText={"Done"}
            />
          </View>

        </ScrollView>
      </View>
    )
  }
}

export default SelectMovies;
