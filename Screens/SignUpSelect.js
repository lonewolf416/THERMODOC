import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView,
  useWindowDimensions,
  Dimensions,
} from "react-native";
import { Input, Button } from "../Components";
import { FontAwesome5 } from "@expo/vector-icons";
import { COLORS, Styles } from "./Styles";
import { IMAGES } from "./Images";
import { api } from "../Constants/Api";
import helpers from "../helper";
import ActivityScene from "../Components/ActivityScene";
const { width, height } = Dimensions.get("screen");
export default function SignUpSelect({ navigation }) {
  const [loading, setloading] = useState(false);
  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { paddingHorizontal: width * 0.1 },
      ]}
    >
      <View
        style={{
          overflow: "hidden",
          height: 100,
          width: 100,
          borderRadius: 100 / 2,
          borderWidth: 2,
          borderColor: COLORS.primary,
          marginVertical: 20,
        }}
      >
        <Image
          style={{ width: "100%", height: "100%" }}
          source={IMAGES.sample}
        />
      </View>

      <Button
        center
        color={COLORS.primary}
        style={{ width: width * 0.8 }}
        onPress={() => navigation.navigate("Sign Up", { name: "Patients" })}
      >
        Patients
      </Button>
      <Button
        center
        color={COLORS.primary}
        style={{ width: width * 0.8 }}
        onPress={() => navigation.navigate("Sign Up", { name: "Doctors" })}
      >
        Doctors
      </Button>
      <Button
        center
        color={COLORS.primary}
        style={{ width: width * 0.8 }}
        onPress={() => navigation.navigate("Sign Up", { name: "Hospitals" })}
      >
        Hospitals
      </Button>
      {loading && <ActivityScene />}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: height * 0.1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  inputIcon: {
    marginRight: 12,
    width: 16,
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },

  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: "white",
  },
});
