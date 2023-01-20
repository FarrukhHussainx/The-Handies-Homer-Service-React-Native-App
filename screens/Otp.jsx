import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Foundation } from "@expo/vector-icons";

const Otp = ({ route, navigation }) => {
  const [otp, setOtp] = useState("");

  const changeHandlero = (val) => {
    setOtp(val);
  };

  const handleSubmit = async () => {
    //e.preventDefault();
    console.log(route.params.id);
    const url = "http://192.168.43.186:3000/api/user/verify-email";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        userId: route.params.id,
        otp: otp,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // //redirect
      // localStorage.setItem("token", json.token);
      // navigate("/");
      // tokenUser(json.token);
      // console.log(json.token);
      // getCustomer(json);
      console.log(json._id);
      navigation.navigate("Login");
    } else {
      Alert.alert("OOPS!", "Invalid Credentials", [
        { text: "underStood", onPress: () => console.log("alert called") },
      ]);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 30 }}>
        <View style={{ alignItems: "center" }}>
          <Image style={styles.img} source={require("../assets/otp.png")} />
        </View>
        <Text style={styles.txt}>OTP Verification</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",

            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
            width: 90,
            left: 120,
          }}
        >
          <Foundation
            name="key"
            size={24}
            color="#666"
            style={{ marginRight: 15 }}
          />

          <TextInput
            placeholder="****"
            style={{
              width: 40,
              paddingVertical: 0,
              fontSize: 18,
            }}
            onChangeText={changeHandlero}
            maxLength={4}
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity
          onPress={handleSubmit}
          style={{
            backgroundColor: "#6C63FF",
            padding: 20,
            borderRadius: 10,
            marginBottom: 30,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "700",
              fontSize: 16,
              color: "#fff",
            }}
          >
            Verify
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  img: {
    height: 300,
    width: 400,
    resizeMode: "contain",
  },
  txt: { fontSize: 28, fontWeight: "500", color: "#333", marginBottom: 30 },
});
export default Otp;
