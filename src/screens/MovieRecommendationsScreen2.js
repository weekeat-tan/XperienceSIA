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
        uri: "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
        movieTitle: "Mad Max: Fury Road",
        ratings: 8.1,
        key: 1
    })

    movieList.push({
        uri: "https://m.media-amazon.com/images/M/MV5BMTYyNzEyNDAzOV5BMl5BanBnXkFtZTgwNTk3NDczNjM@._V1_UX182_CR0,0,182,268_AL_.jpg",
        movieTitle: "Ralph Breaks the Internet",
        ratings: 7.1,
        key: 2
    })

    movieList.push({
        uri: "https://m.media-amazon.com/images/M/MV5BNDg1NTU2OWEtM2UzYi00ZWRmLWEwMTktZWNjYWQ1NWM1OThjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
        movieTitle: "Transformers",
        ratings: 7.1,
        key: 3
    })

    movieList.push({
        uri: "https://m.media-amazon.com/images/M/MV5BMjUwNjU5NDMyNF5BMl5BanBnXkFtZTgwNzgxNjM2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
        movieTitle: "Bumblebee",
        ratings: 6.8,
        key: 4
    })

    movieList.push({
        uri: "https://m.media-amazon.com/images/M/MV5BOGYyN2RjOWMtNzFjNS00YjIyLTg1MTAtZmMyMGI4Yzk5MTE5XkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_UY268_CR4,0,182,268_AL_.jpg",
        movieTitle: "Gintama 2: Rules Are Made To Be Broken",
        ratings: 6.6,
        key: 5
    })

    movieList.push({
        uri: "https://m.media-amazon.com/images/M/MV5BMTY1NTI0ODUyOF5BMl5BanBnXkFtZTgwNTEyNjQ0MDE@._V1_UX182_CR0,0,182,268_AL_.jpg",
        movieTitle: "Monsters, Inc.",
        ratings: "8.0",
        key: 6
    })

    movieList.push({
        uri: "https://m.media-amazon.com/images/M/MV5BNzM2NzM2NmMtNjZlNi00YTcyLWIwYmUtYmE1MWVmYTNiODRlXkEyXkFqcGdeQXVyNDkzMjE0NDE@._V1_UX182_CR0,0,182,268_AL_.jpg",
        movieTitle: "Pokémon the Movie: The Power of Us",
        ratings: 6.4,
        key: 7
    })

    movieList.push({
        uri: "https://m.media-amazon.com/images/M/MV5BMjEzODY2MjU1Nl5BMl5BanBnXkFtZTcwMzc1ODUzNg@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        movieTitle: "Johnny English Reborn",
        ratings: 6.3,
        key: 8
    })

    movieList.push({
        uri: "https://m.media-amazon.com/images/M/MV5BNDkxODhlNmItYjhiMC00ZjNmLWE2YmMtOTQ3NmQxM2YzOGFiXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX182_CR0,0,182,268_AL_.jpg",
        movieTitle: "Johnny English",
        ratings: 6.2,
        key: 9
    })

    movieList.push({
        uri: "https://m.media-amazon.com/images/M/MV5BMjI4MjQ3MjI5MV5BMl5BanBnXkFtZTgwNjczMDE4NTM@._V1_UX182_CR0,0,182,268_AL_.jpg",
        movieTitle: "Johnny English Strikes Again",
        ratings: 6.2,
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
