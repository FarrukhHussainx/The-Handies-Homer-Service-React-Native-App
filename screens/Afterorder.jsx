import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function Afterorder({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#6C63FF" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 8,
          marginTop: 50,
          left: -150,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Entypo name="home" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          padding: 8,
          marginTop: 120,
        }}
      >
        <AntDesign name="checkcircle" size={200} color="#fff" />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          padding: 8,
          marginTop: 40,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: 24,
          }}
        >
          Order Conformed
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          padding: 8,
          marginTop: 10,
          marginHorizontal: 30,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontStyle: "normal",

            fontSize: 14,
          }}
        >
          Thank you for your order, Check the status of order on <Text> </Text>
          <Text
            style={{
              color: "#fff",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Order Tracking
          </Text>
          <Text> </Text>
          Page
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          padding: 12,
          marginTop: 40,
          backgroundColor: "#fff",
          marginHorizontal: 30,
          borderRadius: 20,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#6C63FF",
            }}
          >
            Continue Booking
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
