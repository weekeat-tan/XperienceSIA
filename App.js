import { createStackNavigator, createAppContainer } from "react-navigation";
import React, { Component } from "react";
import { Text } from "react-native";
import { Router, Scene, Stack } from "react-native-router-flux";

import HomeScreen from "./src/screens/HomeScreen";
import SelectMoviesScreen from "./src/screens/SelectMoviesScreen";
import ServicesHomeScreen from "./src/screens/ServicesScreen";
import FoodScreen from "./src/screens/FoodScreen";
import AmenitiesScreen from "./src/screens/AmenitiesScreen";
import KrisshopScreen from "./src/screens/KrisshopScreen";
import BeveragesScreen from "./src/screens/BeveragesScreen";
import OrderProcessingScreen from "./src/screens/OrderProcessingScreen";
import MovieRecommendationsScreen1 from "./src/screens/MovieRecommendationsScreen1";
import MovieRecommendationsScreen2 from "./src/screens/MovieRecommendationsScreen2";
import MovieRecommendationsScreen3 from "./src/screens/MovieRecommendationsScreen3";


import MoviePlayerScreen from "./src/screens/MoviePlayerScreen";

const navigator = createStackNavigator(
  {
    Welcome: {
      screen: HomeScreen,
    },
    SelectMovies: {
      screen: SelectMoviesScreen,
      navigationOptions: {
        title: 'Movies'
      }
    },
    ServicesHome: {
      screen: ServicesHomeScreen,
      navigationOptions: {
        title: 'Services'
      }
    },
    Food: {
      screen: FoodScreen,
      navigationOptions: {
        title: 'Food'
      }
    },
    Amenities: {
      screen: AmenitiesScreen,
      navigationOptions: {
        title: 'Amenities'
      }
    },
    Beverages: {
      screen: BeveragesScreen,
      navigationOptions: {
        title: 'Beverages'
      }
    },
    Krisshop: {
      screen: KrisshopScreen,
      navigationOptions: {
        title: 'KrisShop'
      }
    },
    OrderProcessing: {
      screen: OrderProcessingScreen,
      navigationOptions: {
        title: 'Processing'
      }
    },
    MovieRecommendations1: {
      screen: MovieRecommendationsScreen1,
      navigationOptions: {
        title: 'Movies Playlist'
      }
    },
    MovieRecommendations2: {
      screen: MovieRecommendationsScreen2,
      navigationOptions: {
        title: 'Movies Playlist'
      }
    },
    MovieRecommendations3: {
      screen: MovieRecommendationsScreen3,
      navigationOptions: {
        title: 'Movies Playlist',
      }
    },
    playerScreen: {
      screen: MoviePlayerScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "Welcome",
    defaultNavigationOptions: {
      title: "HungrySIA"
    }
  }
);

export default createAppContainer(navigator);

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <Scene key={"root"} hideNavBar>
//           <Stack>
//             <Scene
//               key={"home"}
//               component={HomeScreen}
//               initial
//               title={"Home"}
//             />
//           </Stack>

//           <Stack key={"movies"} headerLayoutPreset="center">
//             <Scene
//               key={"selectMovies"}
//               component={SelectMoviesScreen}
//               back
//               title={"Movies"}
//             />
//           </Stack>

//           <Stack key={"services"} headerLayoutPreset="center">
//             <Scene
//               key={"selectServices"}
//               component={ServicesHomeScreen}
//               back
//               title={"Services"}
//             />
//           </Stack>

//         </Scene>
//       </Router>
//     )
//   }
// }

// export default App;
