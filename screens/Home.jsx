import React, { useContext, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import OrderContext from "./context/OrderContext";

export default function Example({ navigation }) {
  const [items, setItems] = React.useState([
    {
      name: "MAID",
      code: "#1abc9c",
      mm: require("../assets/maid.png"),
      plumber: "Maid",
    },
    {
      name: "PLUMBER",
      code: "#2ecc71",
      mm: require("../assets/plumber.png"),
      plumber: "Plumber",
    },
    {
      name: "CARPENTER",
      code: "#3498db",
      mm: require("../assets/carpenter.png"),
      plumber: "Carpenter",
    },
    {
      name: "ELECTRICIAN",
      code: "#9b59b6",
      mm: require("../assets/electrician.png"),
      plumber: "Electrician",
    },
  ]);

  return (
    <>
      <View
        style={{ flex: 1, backgroundColor: "#fff", justifyContent: "center" }}
      >
        <View style={{ backgroundColor: "#fff" }}>
          <Text style={styles.txt}>Hi, Farrukh Hussain!</Text>
        </View>
        <View>
          <Image
            style={{ height: 200, width: 400 }}
            source={require("../assets/home-mainx.png")}
          />
          {/* <Text style={styles.txt}>Feedback</Text> */}
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            marginHorizontal: 20,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              backgroundColor: "#6C63FF",
              borderRadius: 10,
              padding: 8,

              color: "#fff",
            }}
          >
            Our Services
          </Text>
          <FlatGrid
            itemDimension={130}
            data={items}
            style={styles.gridView}
            // staticDimension={300}
            // fixed
            spacing={10}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate(item.plumber)}
              >
                <View
                  style={[styles.itemContainer, { backgroundColor: "#fff" }]}
                >
                  <Image style={{ width: 120, height: 120 }} source={item.mm} />
                  <Text style={styles.itemName}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
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
  gridView: {
    marginTop: 10,
    backgroundColor: "#fff",
  },
  txt: {
    fontSize: 30,
    marginTop: 30,
    fontWeight: "bold",
    color: "#6C63FF",
    marginLeft: 20,
    marginBottom: 10,
  },
  txt1: {
    fontSize: 20,

    fontWeight: "bold",
    color: "#fff",
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    padding: 10,
    height: 150,
    shadowColor: "#6C63FF",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  itemName: {
    fontSize: 20,
    color: "#787877",
    fontWeight: "600",
  },
}); // import {
//   View,
//   Text,
//   SafeAreaView,
//   StatusBar,
//   StyleSheet,
//   Pressable,
//   Image,
// } from "react-native";

// import React from "react";
// import { MaterialIcons } from "@expo/vector-icons";

// export default function Home({ navigation }) {
//   return (
//     <View style={{ flex: 1, backgroundColor: "#fff" }}>
//       <SafeAreaView style={styles.container}>
//         <View style={{ flex: 1 }}>
//           <Text style={styles.txt}>Hi, Farrukh Hussain!</Text>
//         </View>
//         <View style={{ flex: 1 }}>
//           <View style={styles.main}>
//             <Image
//               style={{ width: 100, height: 100 }}
//               source={require("../assets/plumber.png")}
//             />
//             <Text style={styles.main}>Plumber</Text>
//           </View>
//         </View>
//         <View
//           style={{
//             flex: 1,
//             marginHorizontal: 20,
//             marginVertical: 20,
//             backgroundColor: "red",
//             backgroundColor: "blue",
//             shadowColor: "red",
//             shadowOffset: {
//               width: 0,
//               height: 10,
//             },
//             shadowOpacity: 0.51,
//             shadowRadius: 13.16,

//             elevation: 20,
//           }}
//         >
//           <Image
//             style={{ width: 100, height: 100 }}
//             source={require("../assets/plumber.png")}
//           />
//           <Image
//             style={{ width: 100, height: 100 }}
//             source={require("../assets/plumber.png")}
//           />
//           <Image
//             style={{ width: 100, height: 100 }}
//             source={require("../assets/plumber.png")}
//           />
//         </View>
//       </SafeAreaView>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight,
//     justifyContent: "center",
//   },
//   txt: {
//     fontSize: 30,
//     marginTop: 30,
//     fontWeight: "bold",
//     color: "#6C63FF",
//     marginLeft: 20,
//   },

//   img: { width: 300, height: 300, transform: [{ rotate: "-5deg" }] },
//   main: {
//     marginHorizontal: 20,
//     marginVertical: 20,
//     shadowColor: "red",
//     shadowOffset: {
//       width: 0,
//       height: 12,
//     },
//     shadowOpacity: 0.58,
//     shadowRadius: 16.0,

//     elevation: 24,
//   },
// });
