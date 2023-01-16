import { View, Text, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";

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
