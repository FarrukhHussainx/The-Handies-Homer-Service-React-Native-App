import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import OrderContext from "./context/OrderContext";

export default function Order({ route, navigation }) {
  const context = useContext(OrderContext);
  const { customer, getOrder } = context;
  console.log(customer.user.id);
  const [companyName, setOrdername] = useState(route.params.name);
  const [Company_id, setCompany_id] = useState(route.params._id);
  const [customer_id, setCustomer_id] = useState(customer.user.id);
  const [customerAdress, setCustomerAddress] = useState(customer.user.address);
  const [customerName, setCustomerName] = useState(customer.user.name);
  const [day, setDay] = useState("Mondary");
  const [Time, setTime] = useState("Morning");
  const [serviceType, setServiceType] = useState(route.params.serviceType);
  const [price, setPrice] = useState(route.params.price);

  // useEffect(() => {
  //   getc();

  //   console.log("useEffect");
  // }, []);

  const submitOrder = () => {
    getOrder({
      Company_id,
      customer_id,
      day,
      Time,
      companyName,
      customerName,
      customerAdress,
      price,
      serviceType,
    });
  };

  return (
    <>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <SafeAreaView style={styles.container}>
          <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
            <Text style={styles.txt}>Booking Details</Text>
            <View style={styles.xbox}>
              <Text style={styles.txt1}>Service Provider: {companyName}</Text>
              <Text style={styles.txt1}>Address: {customerAdress}</Text>
              <Text style={styles.txt1}>Charges: RS{price}</Text>
              <Text style={styles.txt1}>Service Type: {serviceType}</Text>
              <Text style={styles.txt1}>Specified Day: {day}</Text>
              <Text style={styles.txt1}>Time Slot: {Time}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.hed}>Your Prefer day for service</Text>
            <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
              <TouchableOpacity onPress={() => setDay("Monday")}>
                <Text style={styles.day}>Monday</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setDay("Tuesday")}>
                <Text style={styles.day}>Tuesday</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setDay("Wednesday")}>
                <Text style={styles.day}>Wednesday</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setDay("Thursday")}>
                <Text style={styles.day}>Thurday</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
              <TouchableOpacity onPress={() => setDay("Friday")}>
                <Text style={styles.day}>Friday</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setDay("Saturday")}>
                <Text style={styles.day}>Satureday</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setDay("Sunday")}>
                <Text style={styles.day}>Sunday</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.hedx}>Select Time Slot</Text>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 10,
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity onPress={() => setTime("Morning")}>
                <Text style={styles.day1}>Morning</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setTime("Afternoon")}>
                <Text style={styles.day1}>Afternoon</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setTime("Evening")}>
                <Text style={styles.day1}>Evening</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity onPress={submitOrder}>
              <Text style={styles.btnT}>Place Order</Text>
            </TouchableOpacity>
            <Feather name="check-circle" size={24} color="#fff" />
          </View>
        </SafeAreaView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    justifyContent: "center",
  },
  day: {
    fontSize: 15,
    borderRadius: 10,
    backgroundColor: "#6C63FF",

    padding: 8,
    marginHorizontal: 8,
    marginVertical: 8,
  },
  hed: {
    marginBottom: 6,
    fontSize: 20,
    fontWeight: "blod",
    left: 10,
  },
  hedx: {
    marginBottom: 6,
    fontSize: 20,
    fontWeight: "blod",
    left: 10,
    marginTop: 20,
  },
  day1: {
    fontSize: 15,
    borderRadius: 10,
    backgroundColor: "#6C63FF",

    padding: 8,
    marginHorizontal: 8,
    marginVertical: 8,
    paddingLeft: 25,
    paddingRight: 25,
  },
  txt: {
    left: -10,
    fontSize: 30,
    marginTop: 30,
    fontWeight: "bold",
    color: "#6C63FF",
    marginBottom: 10,
  },
  xbox: {
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
  },
  txt1: {
    fontSize: 20,
    fontWeight: "bold",

    color: "gray",
    padding: 6,
    marginRight: 50,

    left: 10,
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
