import React from "react";
import { Text, ScrollView, View, TouchableOpacity, Image } from "react-native";
import MovieRow from "../components/MovieRow";

EachMovie = ({ source, movieTitle, ratings }) => {
  <TouchableOpacity
    onPress={() => alert("Playing this movie")}
    style={{ justifyContent: "center" }}
  >
  </TouchableOpacity>
  return (
    <View style={{ flexDirection: "row", flex: 1 }}>
      <Image
        source={source}
        style={{ height: 80, width: 80, marginRight: 15, borderRadius: 5 }}
      />

      <View style={{ justifyContent: "space-around", alignItems: "flex-start" }}>
        <Text>
          {movieTitle}
        </Text>

        <Text style={{ textAlign: "justify" }}>
          Ratings: {ratings} / 10
        </Text>
      </View>
    </View>
  )
}

const MovieRecommendationsScreen = (props) => {

  const movieList = [];

  movieList.push({
    uri: "https://m.media-amazon.com/images/M/MV5BODFkMzljMWUtY2NjNS00NjZhLTk4MDItYWNjMjIyODZlNDc1XkEyXkFqcGdeQXVyNzEyMTk0MzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    movieTitle: "A Private War",
    ratings: 6.7,
    key: 1
  })

  movieList.push({
    uri: "https://m.media-amazon.com/images/M/MV5BYzIzYmJlYTYtNGNiYy00N2EwLTk4ZjItMGYyZTJiOTVkM2RlXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_UX182_CR0,0,182,268_AL_.jpg",
    movieTitle: "Green Book",
    ratings: 8.2,
    key: 2
  })

  movieList.push({
    uri: "https://m.media-amazon.com/images/M/MV5BMTA2NDc3Njg5NDVeQTJeQWpwZ15BbWU4MDc1NDcxNTUz._V1_UX182_CR0,0,182,268_AL_.jpg",
    movieTitle: "Bohemian Rhapsody",
    ratings: "8.0",
    key: 3
  })

  movieList.push({
    uri: "https://m.media-amazon.com/images/M/MV5BMTg1NzQwMDQxNV5BMl5BanBnXkFtZTgwNDg2NDYyNjM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    movieTitle: "The Favourite",
    ratings: 7.6,
    key: 4
  })

  movieList.push({
    uri: "https://m.media-amazon.com/images/M/MV5BZjIxZTllYjUtNzJjNy00YWNlLWE3NmItMTk0ZDMxOGVlMDhjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY268_CR0,0,182,268_AL_.jpg",
    movieTitle: "Manto",
    ratings: 7.4,
    key: 5
  })

  movieList.push({
    uri: "https://m.media-amazon.com/images/M/MV5BYTI3ZmIyMjYtZTcwZC00N2Q1LTg1ZTEtNjZjYWQ5NTU1NTA1XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    movieTitle: "Pariyerum Perumal",
    ratings: 8.9,
    key: 6
  })

  movieList.push({
    uri: "https://m.media-amazon.com/images/M/MV5BMDBhOTMxN2UtYjllYS00NWNiLWE1MzAtZjg3NmExODliMDQ0XkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_UX182_CR0,0,182,268_AL_.jpg",
    movieTitle: "First Man",
    ratings: 7.3,
    key: 7
  })

  movieList.push({
    uri: "https://m.media-amazon.com/images/M/MV5BOTRmZGJiZjUtMGJjYi00MzZhLTkzYjUtODE1Yjk5ZDRiODhlXkEyXkFqcGdeQXVyODAzODU1NDQ@._V1_UX182_CR0,0,182,268_AL_.jpg",
    movieTitle: "At Eternity's Gate",
    ratings: 6.9,
    key: 8
  })

  movieList.push({
    uri: "https://m.media-amazon.com/images/M/MV5BMjM3ODc5NDEyOF5BMl5BanBnXkFtZTgwMTI4MDcxNjM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    movieTitle: "Widows",
    ratings: 6.9,
    key: 9
  })

  movieList.push({
    uri: "https://m.media-amazon.com/images/M/MV5BOWU0NjY3NDItNmZhMS00ZGE3LWE5MzItOTJjZmI3NTRhNzAzXkEyXkFqcGdeQXVyNDI3NjcxMDA@._V1_UX182_CR0,0,182,268_AL_.jpg",
    movieTitle: "Kingdom of Clay Subjects",
    ratings: 8.3,
    key: 10
  })

  return (
    <ScrollView>
      {
        movieList.map((each) => {
          return (
            <MovieRow navigation={props.navigation} key={each.key} >
              {
                EachMovie({
                  source: {
                    uri: each.uri
                  },
                  movieTitle: each.movieTitle,
                  ratings: each.ratings,
                })
              }
            </MovieRow>
          );
        })
      }
    </ScrollView>
  );
}

export default MovieRecommendationsScreen;

// <ScrollView style={{ flex: 1 }}>
//         <MovieRow navigation={props.navigation}>
//           {EachMovie({
//             source: {
//               uri: "https://m.media-amazon.com/images/M/MV5BODFkMzljMWUtY2NjNS00NjZhLTk4MDItYWNjMjIyODZlNDc1XkEyXkFqcGdeQXVyNzEyMTk0MzM@._V1_UX182_CR0,0,182,268_AL_.jpg"
//             },
//             movieTitle: "A Private War"
//           })}
//         </MovieRow>

//         <MovieRow navigation={props.navigation}>
//           {EachMovie({
//             source: {
//               uri: "https://m.media-amazon.com/images/M/MV5BYzIzYmJlYTYtNGNiYy00N2EwLTk4ZjItMGYyZTJiOTVkM2RlXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_UX182_CR0,0,182,268_AL_.jpg"
//             },
//             movieTitle: "Green Book"
//           })}
//         </MovieRow>
//       </ScrollView>
