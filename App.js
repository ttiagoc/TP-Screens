import React from "react";
import Screen1 from "./src/screens/Screen1";
import Screen2 from "./src/screens/Screen2";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
export default function App() {

  const Stack = createNativeStackNavigator();



  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Screen1"
        screenOptions={{ orientation: "portrait", headerShown: false }}
      >
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );


}