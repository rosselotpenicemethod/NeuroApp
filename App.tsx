import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Text style={styles.title}>ROSSELOT PENICE METHOD</Text>
        <Text style={styles.subtitle}>BUILD TEST SUCCESS</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#050505"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    backgroundColor: "#050505"
  },
  title: {
    color: "#D8B35F",
    fontSize: 24,
    fontWeight: "900",
    textAlign: "center"
  },
  subtitle: {
    marginTop: 10,
    color: "#D8B35F",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center"
  }
});
