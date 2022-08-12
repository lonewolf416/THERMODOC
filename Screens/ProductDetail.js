import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  TextInput,
  useWindowDimensions,
} from "react-native";
import { Input, Button } from "../Components";
import Checkbox from "expo-checkbox";
import { FontAwesome5 } from "@expo/vector-icons";
import { COLORS } from "./Styles";

export default function ProductDetail({ navigation, route }) {
  const { width, height } = useWindowDimensions();
  const { product } = route.params;
  function clickEventListener() {
    Alert.alert("Success", "Product has beed added to cart");
  }
  const [text, setText] = useState("");
  const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        <View style={{ marginHorizontal: width * 0.05 }}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>{product.price}</Text>
          <View style={{ paddingVertical: 5 }}>
            {product.additional && product.additional.length > 0 && (
              <Text style={styles.heading}>Additional:</Text>
            )}
            {product.additional &&
              product.additional.map((item, index) => {
                return (
                  <View
                    style={[
                      styles.section,
                      {
                        widht: width * 0.9,
                      },
                    ]}
                  >
                    <View style={{ flex: 1 }}>
                      <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? COLORS.primary : undefined}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        width: width * 0.8,
                      }}
                    >
                      <Text style={styles.paragraph}>
                        {item.name}
                        <Text style={[styles.paragraph, { color: "#BEBEBE" }]}>
                          ({item.price})
                        </Text>
                      </Text>
                    </View>
                  </View>
                );
              })}
          </View>
          <Text style={styles.heading}>Product Description:</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.heading}>Special request from client:</Text>
          <Input
            onChangeText={setText}
            value={text}
            placeholder="Enter your text"
            borderless
            multiline={true}
          />
          <Text style={styles.heading}>Starting time:</Text>
          <Input
            onChangeText={setText}
            value={text}
            placeholder="Enter your text"
            borderless
          />
          <Text style={styles.heading}>Booking:</Text>
          <Input
            onChangeText={setText}
            value={text}
            placeholder="Please choose a date"
            borderless
          />
          <View style={styles.separator}></View>
          <Button
            center
            color="white"
            style={{ width: width * 0.9 }}
            // onPress={() => navigation.navigate("App")}
            // onPress={() => onLogin(navigation, email, password)}
          >
            ADD TO BAG
          </Button>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "white",
  },
  productImg: {
    width: 200,
    height: 200,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "bold",
  },
  price: {
    marginVertical: 5,
    fontSize: 22,
    color: COLORS.primary,
    fontWeight: "bold",
  },
  heading: {
    marginTop: 5,
    marginBottom: 10,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  description: {
    textAlign: "justify",
    marginBottom: 5,
    color: "#696969",
  },
  star: {
    width: 40,
    height: 40,
  },
  btnColor: {
    height: 30,
    width: 30,
    borderRadius: 30,
    marginHorizontal: 3,
  },
  btnSize: {
    height: 40,
    width: 40,
    borderRadius: 40,
    borderColor: "#778899",
    borderWidth: 1,
    marginHorizontal: 3,
    backgroundColor: "white",

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  starContainer: {
    justifyContent: "center",
    marginHorizontal: 30,
    flexDirection: "row",
    marginTop: 20,
  },
  contentColors: {
    justifyContent: "center",
    marginHorizontal: 30,
    flexDirection: "row",
    marginTop: 20,
  },
  contentSize: {
    justifyContent: "center",
    marginHorizontal: 30,
    flexDirection: "row",
    marginTop: 20,
  },
  separator: {
    height: 2,
    backgroundColor: "#eeeeee",
    marginVertical: 20,
    //marginHorizontal: 30,
    width: "100%",
  },
  shareButton: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
  shareButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  addToCarContainer: {
    marginHorizontal: 30,
  },
  section: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 2,
    flexWrap: "wrap",
  },
  paragraph: {
    fontSize: 15,
    color: "#696969",
    paddingLeft: 5,
  },
  checkbox: {
    marginRight: 8,
    marginVertical: 2,
  },
});
