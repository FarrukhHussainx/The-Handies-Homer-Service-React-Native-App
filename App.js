import { Text, AppRegistry } from "react-native";
import React from "react";
import Main from "./screens/Main";
import Login from "./screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./screens/Register";
import OnbordingScreen from "./screens/OnbordingScreen";
import Otp from "./screens/Otp";
import Home from "./screens/Home";
import Plumber from "./screens/Plumber";
import Rating from "./screens/Rating";
import RatingPage from "./screens/Rating";
import Order from "./screens/Order";
import OrderState from "./screens/context/OrderState";
import Electrician from "./screens/Electrician";
import Maid from "./screens/Maid";
import Carpenter from "./screens/Carpenter";
import OrderTracking from "./screens/OrderTracking";
import MyOrders from "./screens/MyOrders";
import PersonalSetting from "./screens/PersonalSetting";
import Afterorder from "./screens/Afterorder";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <OrderState>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="OnbordingScreen" component={OnbordingScreen} />
          <Stack.Screen name="Afterorder" component={Afterorder} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="PersonalSetting" component={PersonalSetting} />
          <Stack.Screen name="MyOrders" component={MyOrders} />
          <Stack.Screen name="OrderTracking" component={OrderTracking} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Rating" component={RatingPage} />
          <Stack.Screen name="Plumber" component={Plumber} />
          <Stack.Screen name="Electrician" component={Electrician} />
          <Stack.Screen name="Maid" component={Maid} />
          <Stack.Screen name="Carpenter" component={Carpenter} />

          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Order" component={Order} />

          <Stack.Screen name="Otp" component={Otp} />
        </Stack.Navigator>
      </NavigationContainer>
    </OrderState>
  );
};
AppRegistry.registerComponent("otpApp", () => App);
export default App;
