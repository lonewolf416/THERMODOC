import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Alert,
  useWindowDimensions,
  Dimensions,
} from "react-native";
import { Input, Button } from "../Components";
import { FontAwesome5 } from "@expo/vector-icons";
import { StackActions } from "@react-navigation/native";
import { IMAGES } from "./Images";
import { COLORS } from "./Styles";
import helpers from "../helper";
import { api } from "../Constants/Api";
import ActivityScene from "../Components/ActivityScene";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Checkbox from "expo-checkbox";
const { width, height } = Dimensions.get("screen");
export default function Login({ navigation }) {
  // const { width, height } = useWindowDimensions();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  function Login() {
    console.log(password, email);
    setloading(true);
    console.log(api.login);
    fetch(api.login, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login_email: email,
        login_pass: password,
      }),
    })
      .then(function (response) {
        return response.text();
      })
      .then(function (result_) {
        setloading(false);
        if (helpers.isJson(result_)) {
          console.log(result_, "real");
          const result = JSON.parse(result_);
          if (result.status === true) {
            console.log(result);
            AsyncStorage.getItem("access_key").then((results) => {
              console.log(result);
              if (results === null) {
                AsyncStorage.setItem("access_key", result.access_key);
                AsyncStorage.setItem(
                  "user",
                  JSON.stringify(result.result_object)
                ).then((result) => {
                  setloading(false);
                  navigation.dispatch(StackActions.replace("UserStack"));
                });
              }
            });
          } else {
            console.log(result);
            setloading(false);
            alert(result.message);
          }
        }
      })
      .catch(function (error) {
        setloading(false);
        console.log("--------  error ------- " + error);
      });
  }

  return (
    <View style={[styles.container, { paddingHorizontal: width * 0.1 }]}>
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
      <View>
        <Input
          onChangeText={setemail}
          value={email}
          placeholder="EMAIL"
          borderless
          left
          iconContent={
            <FontAwesome5
              size={16}
              color={COLORS.primary}
              name="envelope"
              style={styles.inputIcon}
            />
          }
        />

        <Input
          viewPass
          password
          onChangeText={setpassword}
          value={password}
          placeholder="PASSWORD"
          borderless
          iconColor={COLORS.primary}
          iconContent={
            <FontAwesome5
              size={16}
              color={COLORS.primary}
              name="lock"
              style={styles.inputIcon}
            />
          }
        />
        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 15,
          }}
        >
          <Checkbox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={() => setToggleCheckBox(!toggleCheckBox)}
            style={{ width: 15, height: 15 }}
          />
          <Text
            color="#8898AA"
            style={{ textAlign: "center", paddingLeft: 5, fontSize: 10 }}
          >
            I agree to
          </Text>
          <TouchableOpacity
          // onPress={() => navigation.navigate("Sign Up Select")}
          >
            <Text
              color={COLORS.primary}
              style={{
                textAlign: "center",
                fontWeight: "bold",
                marginLeft: 5,
                fontSize: 12,
                textDecorationLine: "underline",
              }}
            >
              Privacy Policy
            </Text>
          </TouchableOpacity>
          <Text style={{ textAlign: "center", fontSize: 10 }}> And </Text>
          <TouchableOpacity>
            <Text
              color={COLORS.primary}
              style={{
                textAlign: "center",
                fontWeight: "bold",
                textDecorationLine: "underline",
                fontSize: 12,
              }}
            >
              Terms and Condition
            </Text>
          </TouchableOpacity>
        </View>
        <Button
          center
          color={COLORS.primary}
          style={{ width: width * 0.8 }}
          //     onPress={() => navigation.navigate("PatientsTab")}
          onPress={() =>
            email === "doctor"
              ? navigation.navigate("DoctorsTab")
              : email === "hospital"
              ? navigation.navigate("HospitalTab")
              : navigation.navigate("PatientsTab")
          }
        >
          LOGIN
        </Button>
      </View>

      <View width={width * 0.8} style={{ paddingLeft: 3, paddingVertical: 10 }}>
        <Text
          color="#1dbf73"
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginRight: 5,
            textDecorationLine: "underline",
            fontSize: 12,
          }}
        >
          Forget Password?
        </Text>
      </View>
      {/* <View width={width * 0.8} style={{ paddingLeft: 3, paddingVertical: 5 }}>
        <Text
          color="#1dbf73"
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginRight: 5,
            textDecorationLine: "underline",
            marginTop: 10,
            fontSize: 12,
          }}
        >
          Login with social account
        </Text>
      </View> */}
      {/* <View
        style={{
          paddingVertical: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: width * 0.8,
        }}
      >
        <Button
          center
          color={"#4267B2"}
          style={{ width: width * 0.35, flexDirection: "row" }}
        >
          <FontAwesome5
            size={16}
            color={"white"}
            name="facebook"
            style={styles.inputIcon}
          />
          <Text style={{ color: "white", paddingHorizontal: 5 }}>Facebook</Text>
        </Button>
        <Button
          center
          color={"#1DA1F2"}
          style={{ width: width * 0.35, flexDirection: "row" }}
        >
          <FontAwesome5
            size={16}
            color={"white"}
            name="twitter"
            style={styles.inputIcon}
          />
          <Text style={{ color: "white", paddingHorizontal: 5 }}>Twitter</Text>
        </Button>
      </View> */}
      <View
        style={{
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text color="#8898AA" size={12} style={{ textAlign: "center" }}>
          Dont have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Sign Up Select")}>
          <Text
            color={COLORS.primary}
            size={12}
            style={{
              textAlign: "center",
              fontWeight: "bold",
              marginLeft: 5,
            }}
          >
            Register Here
          </Text>
        </TouchableOpacity>
      </View>
      {loading && <ActivityScene />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  inputIcon: {
    marginRight: 10,
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
