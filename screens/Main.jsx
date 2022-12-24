import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";

import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function Main({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.txt}>JUST CLICK</Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image style={styles.img} source={require("../assets/home.png")} />
        </View>
        <Pressable
          android_ripple={true}
          style={styles.btn}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.btnT}>Lest's begin</Text>
          <MaterialIcons name="navigate-next" size={24} color="#fff" />
        </Pressable>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: { fontSize: 30, marginTop: 30, fontWeight: "bold", color: "#6C63FF" },
  btn: {
    backgroundColor: "#6C63FF",
    padding: 20,
    width: "90%",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 50,
  },
  btnT: { fontWeight: "bold", color: "#fff", fontSize: 18 },
  img: { width: 300, height: 300, transform: [{ rotate: "-5deg" }] },
});
