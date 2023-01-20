import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import OrderContext from "./context/OrderContext";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function MyOrders({ navigation }) {
  const context = useContext(OrderContext);
  const { FetchOrders, orders } = context;

  useEffect(() => {
    FetchOrders();
  }, []);
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={{ marginVertical: 40 }}>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#6C63FF",
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 90,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                fontWeight: "bold",
                marginHorizontal: 10,
                marginVertical: 10,
                borderRadius: 15,
              }}
            >
              MyOrders
            </Text>
            <FontAwesome name="opencart" size={24} color="#e0e0e0" />
          </View>
          <View>
            <FlatList
              data={orders}
              renderItem={({ item }) => (
                <>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("OrderTracking", {
                        status: item.status,
                      })
                    }
                  >
                    <View
                      style={{
                        backgroundColor: "#e0e0e0",
                        marginHorizontal: 10,
                        marginVertical: 10,
                        borderRadius: 15,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "center",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 20,
                            padding: 10,
                            fontWeight: "bold",
                            color: "gray",
                          }}
                        >
                          Service Booked for
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            padding: 10,
                            fontWeight: "bold",
                            color: "#6C63FF",
                            left: -10,
                          }}
                        >
                          {item.servicetype}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-around",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 15,
                            padding: 10,
                            fontWeight: "bold",
                            color: "gray",
                          }}
                        >
                          Booking Date : {item.date}/{item.month}/2023
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            padding: 10,
                            fontWeight: "bold",
                            color: "gray",
                            left: -10,
                          }}
                        >
                          RS:{item.price}
                        </Text>
                      </View>

                      <Text
                        style={{
                          fontSize: 17,
                          padding: 10,
                          fontWeight: "bold",
                          color: "gray",
                          textAlign: "center",
                        }}
                      >
                        Service booked for {item.day} at {item.Time}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </>
              )}
            />
          </View>
        </View>
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
  txt: {
    fontSize: 20,

    fontWeight: "bold",
    color: "#fff",
    left: 10,
  },
});
