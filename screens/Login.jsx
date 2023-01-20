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
import React, { useState, useContext } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import OrderContext from "./context/OrderContext";

const Login = ({ navigation }) => {
  const context = useContext(OrderContext);
  const { getCustomer } = context;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const changeHandlere = (val) => {
    setEmail(val);
  };
  const changeHandlerp = (val) => {
    setPassword(val);
  };
  const handleSubmit = async () => {
    //e.preventDefault();
    const url = "http://192.168.43.186:3000/api/user/signin";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: email,
        password: password,
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
      getCustomer(json);
      navigation.replace("Home");
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
          <Image style={styles.img} source={require("../assets/signup.png")} />
        </View>
        <Text style={styles.txt}>Login</Text>
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
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                "Forget Password",
                "Email was sent to forget password",
                [{ text: "OK", onPress: () => console.log("OK Pressed") }]
              );
            }}
          >
            <Text style={{ color: "#6C63FF", fontWeight: "700" }}>Forget?</Text>
          </TouchableOpacity>
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
            Login
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <Text>New to the app? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={{ color: "#6C63FF", fontWeight: "700" }}>
              Register
            </Text>
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
  img: { height: 300, width: 300, transform: [{ rotate: "-5deg" }] },
  txt: { fontSize: 28, fontWeight: "500", color: "#333", marginBottom: 30 },
});
export default Login;
