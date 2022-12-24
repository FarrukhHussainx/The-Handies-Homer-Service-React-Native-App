import { View, Text, Image, StyleSheet } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const OnbordingScreen = ({ navigation }) => {
  return (
    <Onboarding
      onSkip={() => navigation.replace("Main")}
      onDone={() => navigation.replace("Main")}
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              style={styles.img}
              source={require("../assets/onbording1.jpg")}
            />
          ),
          title: "Multiple Services in one App",
          subtitle:
            "We render quality and affordable Services, Select from our available Services",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              style={styles.img}
              source={require("../assets/onbording2.jpg")}
            />
          ),
          title: "Book your Appointment",
          subtitle:
            "WE consider your Schdule,book your desire date to get Service rendered",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              style={styles.img}
              source={require("../assets/onbording3.jpg")}
            />
          ),
          title: "At your door in time",
          subtitle: "Yes! we offer home Services at your preferred time",
        },
      ]}
    />
  );
};
const styles = StyleSheet.create({
  img: { width: 400, height: 400, resizeMode: "contain", marginBottom: -100 },
});
export default OnbordingScreen;
