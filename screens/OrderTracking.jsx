import { View, Text, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import React from "react";

export default function OrderTracking() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <SafeAreaView style={styles.container}>
        <Text>hhhiii</Text>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    justifyContent: "center",
  },
});
