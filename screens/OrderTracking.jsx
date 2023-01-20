import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
export default function OrderTracking({ route, navigation }) {
  const [status, setStatus] = useState("placed");
  const po = ({ color1, color2, color3, color4, btnShow }) => {
    return (
      <>
        <View style={{ flexDirection: "row", marginTop: 100 }}>
          <Text
            style={{
              backgroundColor: color1,
              borderRadius: 50,
              padding: 20,
              width: 60,
              left: 10,
              color: "#fff",
            }}
          >
            ✔
          </Text>
          <Text style={{ textAlign: "center", padding: 20, left: -10 }}>
            -----------
          </Text>
          <Text
            style={{
              backgroundColor: color2,
              borderRadius: 50,
              padding: 20,
              width: 60,
              left: -30,
              color: "#fff",
            }}
          >
            ✔
          </Text>
          <Text style={{ textAlign: "center", padding: 20, left: -50 }}>
            -----------
          </Text>
          <Text
            style={{
              backgroundColor: color3,
              borderRadius: 50,
              padding: 20,
              width: 60,
              left: -70,
              color: "#fff",
            }}
          >
            ✔
          </Text>
          <Text style={{ textAlign: "center", padding: 20, left: -90 }}>
            -----------
          </Text>
          <Text
            style={{
              backgroundColor: color4,
              borderRadius: 50,
              padding: 20,
              width: 60,
              left: -110,
              color: "#fff",
            }}
          >
            ✔
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              borderRadius: 50,
              padding: 20,
              width: 100,
            }}
          >
            Booking Placed
          </Text>
          <Text
            style={{
              borderRadius: 50,
              padding: 20,
              width: 100,
            }}
          >
            Worker Assigned
          </Text>
          <Text
            style={{
              borderRadius: 50,
              padding: 20,
              width: 100,
              left: 5,
            }}
          >
            Work in Progress
          </Text>
          <Text
            style={{
              borderRadius: 50,
              padding: 20,
              width: 100,
              left: 15,
            }}
          >
            work Finish
          </Text>
        </View>
        {btnShow && (
          <View style={styles.btn}>
            <TouchableOpacity onPress={() => navigation.navigate("Rating")}>
              <Text style={styles.btnT}>FeedBack</Text>
            </TouchableOpacity>
            <Feather name="check-circle" size={24} color="#fff" />
          </View>
        )}
      </>
    );
  };
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <SafeAreaView style={styles.container}>
          {route.params.status == "place" &&
            po({
              color1: "green",
              color2: "gray",
              color3: "gray",
              color4: "gray",
              btnShow: false,
            })}
          {/* {status == "placed" &&
          po({
            color1: "green",
            color1: "green",
            color1: "gray",
            color1: "gray",
            btnShow: false,
          })}
        {status == "placed" &&
          po({
            color1: "green",
            color2: "green",
            color4: "green",
            color4: "gray",
            btnShow: false,
          })}*/}
          {route.params.status == "complete" &&
            po({
              color1: "green",
              color2: "green",
              color3: "green",
              color4: "green",
              btnShow: true,
            })}
        </SafeAreaView>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 8,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <AntDesign name="home" size={24} color="#6C63FF" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("MyOrders")}>
          <AntDesign name="shoppingcart" size={24} color="#6C63FF" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("PersonalSetting")}
        >
          <FontAwesome5 name="user" size={24} color="#6C63FF" />
        </TouchableOpacity>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginTop: StatusBar.currentHeight,
  },
  btn: {
    backgroundColor: "#6C63FF",
    padding: 20,
    width: "50%",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",

    marginVertical: 20,
    left: 100,
  },
  btnT: { fontWeight: "bold", color: "#fff", fontSize: 22 },
  img: { width: 300, height: 300, transform: [{ rotate: "-5deg" }] },
});
