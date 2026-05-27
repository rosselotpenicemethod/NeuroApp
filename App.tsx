import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <View
        style={{
          flex: 1,
          backgroundColor: "#050505",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <StatusBar style="light" />
        <Text
          style={{
            color: "#D8B35F",
            fontSize: 28,
            fontWeight: "bold"
          }}
        >
          ROSSELOT PENICE METHOD
        </Text>
      </View>
    </NavigationContainer>
  );
}
