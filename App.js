import "react-native-gesture-handler";
import React from 'react';
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Home from "./Components/Home/Home.js";
import Scan from "./Components/Scan/Scan.js";
import Upload from "./Components/Upload/Upload.js";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer styles={styles.container}>
      <Stack.Navigator 
      initialRouteName="Home"
      >
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Scan"
          component={Scan}
        />
        <Stack.Screen
          name="Upload"
          component={Upload}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
