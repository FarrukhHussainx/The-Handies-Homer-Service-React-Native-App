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
  ScrollView,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import OrderContext from "./context/OrderContext";

const Register = ({ navigation }) => {
  const context = useContext(OrderContext);
  const { getCustomer } = context;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const changeHandlere = (val) => {
    setEmail(val);
  };
  const changeHandlern = (val) => {
    setName(val);
  };
  const changeHandlerp = (val) => {
    setPassword(val);
  };
  const changeHandlercp = (val) => {
    setCpassword(val);
  };
  const handleSubmit = async () => {
    console.log("object id called");
    //e.preventDefault();
    const url = "https://otp-production.up.railway.app/api/user/create";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.status) {
      // //redirect
      // localStorage.setItem("token", json.token);
      // navigate("/");
      // tokenUser(json.token);
      // console.log(json.token);
      // getCustomer(json);
      console.log(json._id);
      navigation.navigate("Otp", { id: json._id });
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
          <Image style={styles.img} source={require("../assets/login.png")} />
        </View>
        <Text style={styles.txt}>Register</Text>
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}
        >
          <Ionicons
            name="person-outline"
            size={24}
            color="#666"
            style={{ marginRight: 5 }}
          />

          <TextInput
            placeholder="Full Name"
            style={{
              flex: 1,
              paddingVertical: 0,
              fontSize: 18,
            }}
            onChangeText={changeHandlern}
            keyboardType="default"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}
        >
          <MaterialIcons
            name="alternate-email"
            size={24}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="Email ID"
            style={{
              flex: 1,
              paddingVertical: 0,
              fontSize: 18,
            }}
            onChangeText={changeHandlere}
            keyboardType="email-address"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}
        >
          <Ionicons
            name="ios-lock-closed-outline"
            size={24}
            color="#666"
            style={{ marginRight: 5 }}
          />

          <TextInput
            placeholder="Password"
            style={{
              flex: 1,
              paddingVertical: 0,
              fontSize: 18,
            }}
            onChangeText={changeHandlerp}
            secureTextEntry={true}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}
        >
          <Ionicons
            name="ios-lock-closed-outline"
            size={24}
            color="#666"
            style={{ marginRight: 5 }}
          />

          <TextInput
            placeholder="Confim Password"
            style={{
              flex: 1,
              paddingVertical: 0,
              fontSize: 18,
            }}
            onChangeText={changeHandlercp}
            secureTextEntry={true}
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
            Register
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <Text>Already Register? </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{ color: "#6C63FF", fontWeight: "700" }}>Login</Text>
          </TouchableOpacity>
        </View>
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
    width: 300,

    transform: [{ rotate: "0deg" }],
  },
  txt: { fontSize: 28, fontWeight: "500", color: "#333", marginBottom: 30 },
});
export default Register;
