import React, { Component, useState, useEffect, useRef } from "react";
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
} from "react-native";
import { Input, Button } from "../Components";
import { FontAwesome5 } from "@expo/vector-icons";
import { COLORS, Styles } from "./Styles";
import { IMAGES } from "./Images";
import { api } from "../Constants/Api";
import helpers from "../helper";
import RNPickerDialog from "rn-modal-picker";
import ActivityScene from "../Components/ActivityScene";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from "date-fns";

import { TouchableOpacity } from "react-native-gesture-handler";
export default function SignUp({ route, navigation }) {
  const { name } = route.params;
  const { width, height } = useWindowDimensions();
  const [fname, setfname] = useState(null);
  const [lname, setlname] = useState(null);
  const [email, setemail] = useState(null);
  const [phone, setphone] = useState(null);
  const [visibility, setvisibility] = useState(false);
  const [statevisibility, setstatevisibility] = useState(false);
  const [type, settype] = useState();
  const [descriptionvisibility, setdescriptionvisibility] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [loading, setloading] = useState(false);
  const [countrycode, setcountrycode] = useState(null);
  const [gender, setGender] = useState();
  const [state, setstate] = useState();
  const [description, setdescription] = useState();
  const [datefordp, setdatedp] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [datemain, setdatemain] = useState(null);
  const [showdate, setShowDate] = useState(false);
  const [typevisibility, settypevisibility] = useState(false);
  const onChangedate = (event, selectedDate) => {
    setShowDate(false);
    //   console.log(selectedDate);
    const currentDate = selectedDate || date;
    setdatedp(currentDate);
    let datee = format(currentDate, "dd-MM-yyyy");
    //  console.log(datee);
    setdatemain(datee);
  };
  const items = [
    {
      id: "1",
      name: "Male",
    },
    {
      id: "2",
      name: "Female",
    },
  ];
  const states = [
    {
      id: "1",
      name: "Adamawa",
    },
    {
      id: "2",
      name: "Akwa Ibom",
    },
    {
      id: "3",
      name: "Anambra",
    },
    {
      id: "4",
      name: "Abia",
    },
  ];
  const descriptions = [
    {
      id: "1",
      name: "Allergist",
    },
    {
      id: "2",
      name: "Anesthesiologist",
    },
    {
      id: "3",
      name: "Cardiologist",
    },
    {
      id: "4",
      name: "Cosmetologist",
    },
  ];
  const types = [
    {
      id: "1",
      name: "General",
    },
    {
      id: "2",
      name: "Private",
    },
  ];

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
  function RegisterSubmit({}) {
    setloading(true);
    console.log(api.register);
    fetch(api.register, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        f_name: fname,
        l_name: lname,
        email: email,
        mobile: phone,
        country_code: countrycode,
      }),
    })
      .then(function (response) {
        return response.text();
      })
      .then(function (result_) {
        setloading(false);
        if (helpers.isJson(result_)) {
          const result = JSON.parse(result_);
          if (result.status === true) {
            Alert.alert("Successfull", result.message, [
              { text: "OK", onPress: () => navigation.goBack() },
            ]);
          } else {
            alert(result.message);
          }
        }
      })
      .catch(function (error) {
        setloading(false);
        console.log("--------  error ------- " + error);
      });
  }
  if (name === "Patients") {
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
        <Input
          onChangeText={setfname}
          value={fname}
          placeholder="First Name"
          borderless
          iconContent={
            <FontAwesome5
              size={16}
              color={COLORS.primary}
              name="user"
              style={styles.inputIcon}
            />
          }
        />
        <Input
          // onChangeText={setlname}
          // value={lname}
          placeholder="Last Name"
          borderless
          iconContent={
            <FontAwesome5
              size={16}
              color={COLORS.primary}
              name="user"
              style={styles.inputIcon}
            />
          }
        />
        <Input
          onChangeText={setlname}
          value={lname}
          placeholder="Username"
          borderless
          iconContent={
            <FontAwesome5
              size={16}
              color={COLORS.primary}
              name="user"
              style={styles.inputIcon}
            />
          }
        />

        <Input
          onChangeText={setemail}
          value={email}
          placeholder="EMAIL"
          borderless
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
          onChangeText={setphone}
          value={phone}
          placeholder="MOBILE NUMBER"
          borderless
          iconColor={COLORS.primary}
          iconContent={
            <FontAwesome5
              size={16}
              color={COLORS.primary}
              name="phone"
              style={styles.inputIcon}
            />
          }
        />
        {visibility && (
          <RNPickerDialog
            data={items}
            pickerTitle={"Select Gender"}
            showSearchBar={true}
            showPickerTitle={true}
            selectedText={gender}
            searchBarPlaceHolder={"Search....."}
            searchBarPlaceHolderColor={"#9d9d9d"}
            placeHolderTextColor={"grey"}
            selectedValue={(index, item) => {
              setGender(item.name), setvisibility(false);
            }}
            onRequestClose={() => setvisibility(false)}
          />
        )}
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => setvisibility(true)}
        >
          <Input
            editable={false}
            style={{
              shadowColor: "black",
              shadowOffset: { width: 0, height: 1 },
              shadowRadius: 2,
              shadowOpacity: 0.2,
              elevation: 3,
              borderRadius: 15,
              width: width * 0.8,
              marginHorizontal: 5,
            }}
            value={gender}
            placeholder="Select Gender"
            borderless
            iconContent={
              <FontAwesome5
                size={16}
                color={COLORS.primary}
                name="user"
                style={Styles.inputIcon}
              />
            }
            //location-arrow
          />
        </TouchableOpacity>

        <Input
          viewPass
          password
          // onChangeText={setpassword}
          // value={password}
          placeholder="Password"
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
        <Input
          viewPass
          password
          // onChangeText={setpassword}
          // value={password}
          placeholder="Confirm Password"
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
        <Button
          center
          color={COLORS.primary}
          style={{ width: width * 0.8 }}
          // onPress={() => navigation.navigate("App")}
          // onPress={() => RegisterSubmit()}
        >
          REGISTER
        </Button>
        {loading && <ActivityScene />}
      </ScrollView>
    );
  } else if (name === "Doctors") {
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
        <Input
          onChangeText={setfname}
          value={fname}
          placeholder="FIRST NAME"
          borderless
          iconContent={
            <FontAwesome5
              size={16}
              color={COLORS.primary}
              name="user"
              style={styles.inputIcon}
            />
          }
        />
        <Input
          onChangeText={setlname}
          value={lname}
          placeholder="LAST NAME"
          borderless
          iconContent={
            <FontAwesome5
              size={16}
              color={COLORS.primary}
              name="user"
              style={styles.inputIcon}
            />
          }
        />
        <Input
          onChangeText={setemail}
          value={email}
          placeholder="EMAIL"
          borderless
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
          onChangeText={setphone}
          value={phone}
          placeholder="MOBILE NUMBER"
          borderless
          iconColor={COLORS.primary}
          iconContent={
            <FontAwesome5
              size={16}
              color={COLORS.primary}
              name="phone"
              style={styles.inputIcon}
            />
          }
        />
        <TouchableOpacity activeOpacity={0.9} onPress={() => setShowDate(true)}>
          <Input
            style={{
              shadowColor: "black",
              shadowOffset: { width: 0, height: 1 },
              shadowRadius: 2,
              shadowOpacity: 0.2,
              elevation: 3,
              borderRadius: 15,
              width: width * 0.8,
              marginHorizontal: 5,
            }}
            editable={false}
            value={datemain}
            placeholder="Year of Graduation"
            borderless
            iconContent={
              <FontAwesome5
                size={16}
                color={COLORS.primary}
                name="graduation-cap"
                style={Styles.inputIcon}
              />
            }
          />
        </TouchableOpacity>
        {showdate && (
          <DateTimePicker
            testID="dateTimePicker"
            value={datefordp}
            mode={"date"}
            display="default"
            onChange={onChangedate}
          />
        )}
        <Input
          onChangeText={setphone}
          value={phone}
          placeholder="Medical School Attended"
          borderless
          iconColor={COLORS.primary}
          iconContent={
            <FontAwesome5
              size={16}
              color={COLORS.primary}
              name="building"
              style={styles.inputIcon}
            />
          }
        />
        <Input
          onChangeText={setphone}
          value={phone}
          placeholder="MDCN Number"
          borderless
          iconColor={COLORS.primary}
          iconContent={
            <FontAwesome5
              size={16}
              color={COLORS.primary}
              name="phone"
              style={styles.inputIcon}
            />
          }
        />
        <Input
          onChangeText={setphone}
          value={phone}
          placeholder="Place of Work"
          borderless
          iconColor={COLORS.primary}
          iconContent={
            <FontAwesome5
              size={16}
              color={COLORS.primary}
              name="location-arrow"
              style={styles.inputIcon}
            />
          }
        />
        {visibility && (
          <RNPickerDialog
            data={items}
            pickerTitle={"Select Gender"}
            showSearchBar={true}
            showPickerTitle={true}
            selectedText={gender}
            searchBarPlaceHolder={"Search....."}
            searchBarPlaceHolderColor={"#9d9d9d"}
            placeHolderTextColor={"grey"}
            selectedValue={(index, item) => {
              setGender(item.name), setvisibility(false);
            }}
            onRequestClose={() => setvisibility(false)}
          />
        )}
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => setvisibility(true)}
        >
          <Input
            editable={false}
            style={{
              shadowColor: "black",
              shadowOffset: { width: 0, height: 1 },
              shadowRadius: 2,
              shadowOpacity: 0.2,
              elevation: 3,
              borderRadius: 15,
              width: width * 0.8,
              marginHorizontal: 5,
            }}
            value={gender}
            placeholder="Select Gender"
            borderless
            iconContent={
              <FontAwesome5
                size={16}
                color={COLORS.primary}
                name="user"
                style={Styles.inputIcon}
              />
            }
            //location-arrow
          />
        </TouchableOpacity>
        {statevisibility && (
          <RNPickerDialog
            data={states}
            pickerTitle={"Select State"}
            showSearchBar={true}
            showPickerTitle={true}
            selectedText={state}
            searchBarPlaceHolder={"Search....."}
            searchBarPlaceHolderColor={"#9d9d9d"}
            placeHolderTextColor={"grey"}
            selectedValue={(index, item) => {
              setstate(item.name), setstatevisibility(false);
            }}
            onRequestClose={() => setstatevisibility(false)}
          />
        )}
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => setstatevisibility(true)}
        >
          <Input
            editable={false}
            style={{
              shadowColor: "black",
              shadowOffset: { width: 0, height: 1 },
              shadowRadius: 2,
              shadowOpacity: 0.2,
              elevation: 3,
              borderRadius: 15,
              width: width * 0.8,
              marginHorizontal: 5,
            }}
            value={state}
            placeholder="Select State"
            borderless
            iconContent={
              <FontAwesome5
                size={16}
                color={COLORS.primary}
                name="city"
                style={Styles.inputIcon}
              />
            }
            //location-arrow
          />
        </TouchableOpacity>
        {descriptionvisibility && (
          <RNPickerDialog
            data={descriptions}
            pickerTitle={"Select Description"}
            showSearchBar={true}
            showPickerTitle={true}
            selectedText={description}
            searchBarPlaceHolder={"Search....."}
            searchBarPlaceHolderColor={"#9d9d9d"}
            placeHolderTextColor={"grey"}
            selectedValue={(index, item) => {
              setdescription(item.name), setdescriptionvisibility(false);
            }}
            onRequestClose={() => setdescriptionvisibility(false)}
          />
        )}
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => setdescriptionvisibility(true)}
        >
          <Input
            editable={false}
            style={{
              shadowColor: "black",
              shadowOffset: { width: 0, height: 1 },
              shadowRadius: 2,
              shadowOpacity: 0.2,
              elevation: 3,
              borderRadius: 15,
              width: width * 0.8,
              marginHorizontal: 5,
            }}
            value={description}
            placeholder="Practice Description"
            borderless
            iconContent={
              <FontAwesome5
                size={16}
                color={COLORS.primary}
                name="stream"
                style={Styles.inputIcon}
              />
            }
            //location-arrow
          />
        </TouchableOpacity>
        <Input
          viewPass
          password
          // onChangeText={setpassword}
          // value={password}
          placeholder="Password"
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
        <Input
          viewPass
          password
          // onChangeText={setpassword}
          // value={password}
          placeholder="Confirm Password"
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
        <Button
          center
          color={COLORS.primary}
          style={{ width: width * 0.8 }}
          // onPress={() => navigation.navigate("App")}
          onPress={() => RegisterSubmit()}
        >
          REGISTER
        </Button>
        {loading && <ActivityScene />}
      </ScrollView>
    );
  } else if (name === "Hospitals") {
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

        <Input
          onChangeText={setlname}
          value={lname}
          placeholder="Hospital Name"
          borderless
          iconContent={
            <FontAwesome5
              size={16}
              color={COLORS.primary}
              name="user"
              style={styles.inputIcon}
            />
          }
        />
        <Input
          onChangeText={setemail}
          value={email}
          placeholder="EMAIL"
          borderless
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
          onChangeText={setphone}
          value={phone}
          placeholder="MOBILE NUMBER"
          borderless
          iconColor={COLORS.primary}
          iconContent={
            <FontAwesome5
              size={16}
              color={COLORS.primary}
              name="phone"
              style={styles.inputIcon}
            />
          }
        />
        <Input
          onChangeText={setphone}
          value={phone}
          placeholder="Address"
          borderless
          iconColor={COLORS.primary}
          iconContent={
            <FontAwesome5
              size={16}
              color={COLORS.primary}
              name="location-arrow"
              style={styles.inputIcon}
            />
          }
        />
        {/* <TouchableOpacity activeOpacity={0.9} onPress={() => setShowDate(true)}>
          <Input
            style={{
              shadowColor: "black",
              shadowOffset: { width: 0, height: 1 },
              shadowRadius: 2,
              shadowOpacity: 0.2,
              elevation: 3,
              borderRadius: 15,
              width: width * 0.8,
              marginHorizontal: 5,
            }}
            editable={false}
            value={datemain}
            placeholder="Year of Graduation"
            borderless
            iconContent={
              <FontAwesome5
                size={16}
                color={COLORS.primary}
                name="graduation-cap"
                style={Styles.inputIcon}
              />
            }
          />
        </TouchableOpacity> */}
        {/* {showdate && (
          <DateTimePicker
            testID="dateTimePicker"
            value={datefordp}
            mode={"date"}
            display="default"
            onChange={onChangedate}
          />
        )} */}
        {/* <Input
          onChangeText={setphone}
          value={phone}
          placeholder="Medical School Attended"
          borderless
          iconColor={COLORS.primary}
          iconContent={
            <FontAwesome5
              size={16}
              color={COLORS.primary}
              name="building"
              style={styles.inputIcon}
            />
          }
        /> */}

        {typevisibility && (
          <RNPickerDialog
            data={types}
            pickerTitle={"Select Type"}
            showSearchBar={true}
            showPickerTitle={true}
            selectedText={description}
            searchBarPlaceHolder={"Search....."}
            searchBarPlaceHolderColor={"#9d9d9d"}
            placeHolderTextColor={"grey"}
            selectedValue={(index, item) => {
              settype(item.name), settypevisibility(false);
            }}
            onRequestClose={() => settypevisibility(false)}
          />
        )}
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => settypevisibility(true)}
        >
          <Input
            editable={false}
            style={{
              shadowColor: "black",
              shadowOffset: { width: 0, height: 1 },
              shadowRadius: 2,
              shadowOpacity: 0.2,
              elevation: 3,
              borderRadius: 15,
              width: width * 0.8,
              marginHorizontal: 5,
            }}
            value={type}
            placeholder="Select Type"
            borderless
            iconContent={
              <FontAwesome5
                size={16}
                color={COLORS.primary}
                name="stream"
                style={Styles.inputIcon}
              />
            }
            //location-arrow
          />
        </TouchableOpacity>

        {statevisibility && (
          <RNPickerDialog
            data={states}
            pickerTitle={"Select State"}
            showSearchBar={true}
            showPickerTitle={true}
            selectedText={state}
            searchBarPlaceHolder={"Search....."}
            searchBarPlaceHolderColor={"#9d9d9d"}
            placeHolderTextColor={"grey"}
            selectedValue={(index, item) => {
              setstate(item.name), setstatevisibility(false);
            }}
            onRequestClose={() => setstatevisibility(false)}
          />
        )}
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => setstatevisibility(true)}
        >
          <Input
            editable={false}
            style={{
              shadowColor: "black",
              shadowOffset: { width: 0, height: 1 },
              shadowRadius: 2,
              shadowOpacity: 0.2,
              elevation: 3,
              borderRadius: 15,
              width: width * 0.8,
              marginHorizontal: 5,
            }}
            value={state}
            placeholder="Select State"
            borderless
            iconContent={
              <FontAwesome5
                size={16}
                color={COLORS.primary}
                name="city"
                style={Styles.inputIcon}
              />
            }
            //location-arrow
          />
        </TouchableOpacity>

        <Input
          viewPass
          password
          // onChangeText={setpassword}
          // value={password}
          placeholder="Password"
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
        <Input
          viewPass
          password
          // onChangeText={setpassword}
          // value={password}
          placeholder="Confirm Password"
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
        <Button
          center
          color={COLORS.primary}
          style={{ width: width * 0.8 }}
          // onPress={() => navigation.navigate("App")}
          onPress={() => RegisterSubmit()}
        >
          REGISTER
        </Button>
        {loading && <ActivityScene />}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
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
