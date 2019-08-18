import { createStackNavigator, createAppContainer } from 'react-navigation';
import React, { Component } from "react";
import { Text } from "react-native";
import { Router, Scene, Stack } from "react-native-router-flux";

import HomeScreen from "./src/screens/HomeScreen";
import SelectMoviesScreen from "./src/screens/SelectMoviesScreen";
import ServicesHomeScreen from './src/screens/ServicesScreen';

const navigator = createStackNavigator(
  {
    Welcome: HomeScreen,
    ServicesHome: ServicesHomeScreen,
    SelectMovies: SelectMoviesScreen,
  },
  {
    initialRouteName: 'Welcome',
    defaultNavigationOptions: {
      title: 'HungrySIA'
    }
  }
)

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
