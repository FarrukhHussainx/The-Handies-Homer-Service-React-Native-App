import React, { useContext, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import OrderContext from "./context/OrderContext";

export default function Maid({ navigation }) {
  const context = useContext(OrderContext);
  const { companies, getUserData } = context;

  useEffect(() => {
    getUserData();

    console.log("useEffect");
  }, []);

  const displayi = (item) => {
    if (item.checkbox[0] && item.checkbox[0].name === "Maid") {
      return (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Order", {
              name: item.name,
              _id: item._id,
              serviceType: item.checkbox[0].name,
            })
          }
        >
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Image
              style={{
                flex: 1,
                width: 100,
                height: 100,
                marginHorizontal: 20,
                borderRadius: 10,
                resizeMode: "contain",
              }}
              source={require("../assets/maid.png")}
            />
            <View style={{ flex: 3 }}>
              <Text
                style={{
                  left: 10,
                  fontSize: 25,
                  fontWeight: "bold",
                  color: "gray",
                  marginVertical: 10,
                }}
              >
                {item.name}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    left: 10,
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "gray",
                  }}
                >
                  {item.checkbox[0].price}
                </Text>
                <Image
                  style={{ width: 100, height: 50, left: -40 }}
                  source={require(`../assets/rating-0.png`)}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    }
    if (item.checkbox[1] && item.checkbox[1].name === "Maid") {
      return (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Order", {
              name: item.name,
              _id: item._id,
              serviceType: item.checkbox[1].name,
            })
          }
        >
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Image
              style={{
                flex: 1,
                width: 100,
                height: 100,
                marginHorizontal: 20,
                borderRadius: 10,
                resizeMode: "contain",
              }}
              source={require("../assets/maid.png")}
            />
            <View style={{ flex: 3 }}>
              <Text
                style={{
                  left: 10,
                  fontSize: 25,
                  fontWeight: "bold",
                  color: "gray",
                  marginVertical: 10,
                }}
              >
                {item.name}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    left: 10,
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "gray",
                  }}
                >
                  {item.checkbox[1].price}
                </Text>
                <Image
                  style={{ width: 100, height: 50, left: -40 }}
                  source={require(`../assets/rating-0.png`)}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    } else if (item.checkbox[2] && item.checkbox[2].name === "Maid") {
      return (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Order", {
              name: item.name,
              _id: item._id,
              serviceType: item.checkbox[2].name,
            })
          }
        >
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Image
              style={{
                flex: 1,
                width: 100,
                height: 100,
                marginHorizontal: 20,
                borderRadius: 10,
                resizeMode: "contain",
              }}
              source={require("../assets/maid.png")}
            />
            <View style={{ flex: 3 }}>
              <Text
                style={{
                  left: 10,
                  fontSize: 25,
                  fontWeight: "bold",
                  color: "gray",
                  marginVertical: 10,
                }}
              >
                {item.name}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    left: 10,
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "gray",
                  }}
                >
                  {item.checkbox[2].price}
                </Text>
                <Image
                  style={{ width: 100, height: 50, left: -40 }}
                  source={require(`../assets/rating-0.png`)}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    }
    if (item.checkbox[3] && item.checkbox[3].name === "Maid") {
      return (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Order", {
              name: item.name,
              _id: item._id,
              serviceType: item.checkbox[3].name,
            })
          }
        >
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Image
              style={{
                flex: 1,
                width: 100,
                height: 100,
                marginHorizontal: 20,
                borderRadius: 10,
                resizeMode: "contain",
              }}
              source={require("../assets/maid.png")}
            />
            <View style={{ flex: 3 }}>
              <Text
                style={{
                  left: 10,
                  fontSize: 25,
                  fontWeight: "bold",
                  color: "gray",
                  marginVertical: 10,
                }}
              >
                {item.name}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    left: 10,
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "gray",
                  }}
                >
                  {item.checkbox[3].price}
                </Text>
                <Image
                  style={{ width: 100, height: 50, left: -40 }}
                  source={require(`../assets/rating-0.png`)}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    }
  };

  return (
    <>
      <View
        style={{ flex: 1, backgroundColor: "#fff", justifyContent: "center" }}
      >
        <View
          style={{
            backgroundColor: "#6C63FF",
            marginHorizontal: 20,
            borderRadius: 10,
            padding: 8,
            marginBottom: 20,
          }}
        >
          <Text style={styles.txt}>Maid</Text>
        </View>

        <View style={{ backgroundColor: "#fff" }}>
          <FlatList
            data={companies}
            renderItem={({ item }) => displayi(item)}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 8,
        }}
      >
        <AntDesign name="home" size={24} color="#6C63FF" />
        <AntDesign name="shoppingcart" size={24} color="#6C63FF" />
        <FontAwesome5 name="user" size={24} color="#6C63FF" />
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
