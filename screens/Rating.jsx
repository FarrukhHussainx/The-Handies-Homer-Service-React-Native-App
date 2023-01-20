import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Rating, AirbnbRating } from "react-native-ratings";
import CheckBox from "react-native-check-box";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function RatingPage() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);

  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(2);
  const [three, setTree] = useState(0);
  const [four, setFour] = useState(0);
  const [five, setFive] = useState(0);

  const rating = one + two + three + four + five;
  const ratingCompleted = (rating) => {
    console.log("Rating is: " + rating);
    if (rating === 1) {
      setIsChecked1(true);
      setIsChecked2(false);
      setIsChecked3(false);
      setIsChecked4(false);
      setIsChecked5(false);
      setOne(1);
      setTwo(0);
      setTree(0);
      setFour(0);
      setFive(0);
    } else if (rating === 2) {
      setIsChecked1(true);
      setIsChecked2(true);
      setIsChecked3(false);
      setIsChecked4(false);
      setIsChecked5(false);
      setOne(1);
      setTwo(1);
      setTree(0);
      setFour(0);
      setFive(0);
    } else if (rating === 3) {
      setIsChecked1(true);
      setIsChecked2(true);
      setIsChecked3(true);
      setIsChecked4(false);
      setIsChecked5(false);
      setOne(1);
      setTwo(1);
      setTree(1);
      setFour(0);
      setFive(0);
    } else if (rating === 4) {
      setIsChecked1(true);
      setIsChecked2(true);
      setIsChecked3(true);
      setIsChecked4(true);
      setIsChecked5(false);
      setOne(1);
      setTwo(1);
      setTree(1);
      setFour(1);
      setFive(0);
    } else if (rating === 5) {
      setIsChecked1(true);
      setIsChecked2(true);
      setIsChecked3(true);
      setIsChecked4(true);
      setIsChecked5(true);
      setOne(1);
      setTwo(1);
      setTree(1);
      setFour(1);
      setFive(1);
    }
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <View>
          <Image
            style={{ height: 230, width: 400, marginTop: -33 }}
            source={require("../assets/feedback.png")}
          />
          <Text style={styles.txt}>Feedback</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 10,
            marginHorizontal: 20,
          }}
        >
          <Text
            style={{ flex: 3, borderBottomWidth: 1, borderBottomColor: "gray" }}
          >
            write some text here...
          </Text>
          <CheckBox
            style={{ flex: 1, marginLeft: 20 }}
            onClick={() => {
              if (isChecked1) {
                setIsChecked1(false);
                setOne(0);
                return;
              }
              setIsChecked1(true);
              setOne(1);
            }}
            isChecked={isChecked1}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 10,
            marginHorizontal: 20,
          }}
        >
          <Text
            style={{ flex: 3, borderBottomWidth: 1, borderBottomColor: "gray" }}
          >
            write some text here...
          </Text>
          <CheckBox
            style={{ flex: 1, marginLeft: 20 }}
            onClick={() => {
              if (isChecked2) {
                setIsChecked2(false);
                setTwo(0);
                return;
              }
              setIsChecked2(true);
              setTwo(1);
            }}
            isChecked={isChecked2}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 10,
            marginHorizontal: 20,
          }}
        >
          <Text
            style={{ flex: 3, borderBottomWidth: 1, borderBottomColor: "gray" }}
          >
            write some text here...
          </Text>
          <CheckBox
            style={{ flex: 1, marginLeft: 20 }}
            onClick={() => {
              if (isChecked3) {
                setIsChecked3(false);
                setTree(0);
                return;
              }
              setIsChecked3(true);
              setTree(1);
            }}
            isChecked={isChecked3}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 10,
            marginHorizontal: 20,
          }}
        >
          <Text
            style={{
              flex: 3,
              borderBottomWidth: 1,
              borderBottomColor: "gray",
            }}
          >
            write some text here...ggggggg
          </Text>
          <CheckBox
            style={{ flex: 1, marginLeft: 20 }}
            onClick={() => {
              if (isChecked4) {
                setIsChecked4(false);
                setFour(0);
                return;
              }
              setIsChecked4(true);
              setFour(1);
            }}
            isChecked={isChecked4}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 10,
            marginHorizontal: 20,
          }}
        >
          <Text
            style={{ flex: 3, borderBottomWidth: 1, borderBottomColor: "gray" }}
          >
            write some text here...
          </Text>
          <CheckBox
            style={{ flex: 1, marginLeft: 20 }}
            onClick={() => {
              if (isChecked5) {
                setIsChecked5(false);
                setFive(0);
                return;
              }
              setIsChecked5(true);
              setFive(1);
            }}
            isChecked={isChecked5}
          />
        </View>

        <AirbnbRating
          count={5}
          // reviews={["Terrible", "Bad", "Meh", "OK", "great"]}
          defaultRating={rating}
          onFinishRating={ratingCompleted}
          // size={20}
        />

        <TouchableOpacity
          style={styles.button}
          // onPress={onPress}
        >
          <Text style={{ color: "#6C63FF", fontWeight: "bold", fontSize: 15 }}>
            Press Here
          </Text>
        </TouchableOpacity>
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
    fontSize: 30,
    marginTop: 30,
    fontWeight: "bold",
    color: "#6C63FF",
    marginLeft: 20,
  },
  button: {
    marginTop: 15,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});
