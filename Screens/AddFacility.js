import React, { Component, useState, useEffect } from "react";
import {
  CommonActions,
  StackActions,
  NavigationAction,
} from "@react-navigation/native";
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

import { FontAwesome5 } from "@expo/vector-icons";
import { COLORS } from "./Styles";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from "date-fns";
import { Styles } from "./Styles";

import { IMAGES } from "./Images";
export default function AddFacility({ navigation }) {
  const [status, requestCameraPermissionsAsync] =
    ImagePicker.useCameraPermissions();
  useEffect(() => {
    requestCameraPermissionsAsync();
  }, []);

  const { width, height } = useWindowDimensions();
  //form fields

  const [image, setImage] = useState(null);
  const [caption, setcaption] = useState("");

  const pickImage = async () => {
    console.log(status);
    if (status.granted === true) {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });
      if (result.cancelled === false) {
        console.log(result);
        setImage(result);
      }
    } else {
      alert("camera permission not granted");
    }
  };

  function AddCompany() {
    // setLoading(true);
    // const data = new FormData();
    // edit && data.append("id", company.id);
    // data.append("name", name);
    // data.append("unique_hvac_code", ucode);
    // data.append("brand_name", bname);
    // data.append("contact", contact);
    // data.append("email", email);
    // data.append("website", web);
    // data.append("address", address);
    // data.append("city", city);
    // data.append("zip", zip);
    // data.append("state", state);
    // image &&
    //   data.append("logo_file", {
    //     uri: image.uri,
    //     type: "image/jpeg",
    //     name: "avatar",
    //   });
    // console.log(data);
    // fetch(api.AddCompany, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //     Authorization: "Bearer " + token,
    //   },
    //   body: data,
    // })
    //   .then(function (response) {
    //     return response.text();
    //   })
    //   .then(function (result_) {
    //     if (helpers.isJson(result_)) {
    //       const result = JSON.parse(result_);
    //       console.log(result);
    //       setLoading(false);
    //       if (result.success == true) {
    //         Alert.alert("Succesful", result.message, [
    //           {
    //             text: "OK",
    //             onPress: () =>
    //               navigation.dispatch(
    //                 CommonActions.reset({
    //                   index: 0,
    //                   routes: [{ name: "Home" }],
    //                 })
    //               ),
    //           },
    //         ]);
    //       } else alert("Something Went Wrong");
    //     } else {
    //       console.log(result_);
    //       alert(result_);
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log("--------  error ------- " + error);
    //     alert("result:" + error);
    //     setLoading(false);
    //   });
  }
  //   const _pickDocument = async () => {
  //     let result = await DocumentPicker.getDocumentAsync({
  //       type: "text/comma-separated-values",
  //     });
  //     console.log(result);
  //     const data = new FormData();
  //     data.append("uploaded_file", {
  //       uri: result.uri,
  //       type: "text/csv",
  //       name: result.name,
  //     });
  //     console.log(data);

  //     if (result.type == "success") {
  //       setLoading(true);
  //       fetch(api.uploadCompanies, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //           Authorization: "Bearer " + token,
  //         },
  //         body: data,
  //       })
  //         .then(function (response) {
  //           return response.text();
  //         })
  //         .then(function (result_) {
  //           if (helpers.isJson(result_)) {
  //             const result = JSON.parse(result_);
  //             console.log(result);
  //             setLoading(false);
  //             if (result.success == true) {
  //               Alert.alert("Succesful", result.message, [
  //                 {
  //                   text: "OK",
  //                   onPress: () =>
  //                     navigation.dispatch(
  //                       CommonActions.reset({
  //                         index: 0,
  //                         routes: [{ name: "Home" }],
  //                       })
  //                     ),
  //                 },
  //               ]);
  //             } else alert("Something Went Wrong");
  //           } else {
  //             console.log(result_);
  //             alert(result_);
  //           }
  //         })
  //         .catch(function (error) {
  //           console.log("--------  error ------- " + error);
  //           alert("result:" + error);
  //           setLoading(false);
  //         });
  //     }
  //   };

  const [datefordp, setdatedp] = useState(new Date());

  const [date, setDate] = useState(new Date());

  // const [timefordp, setTimedp] = useState(new Date(1598051730000));
  const [datemain, setdatemain] = useState(null);
  const [showdate, setShowDate] = useState(false);
  const onChangedate = (event, selectedDate) => {
    setShowDate(false);
    //   console.log(selectedDate);
    const currentDate = selectedDate || date;
    setdatedp(currentDate);
    let datee = format(currentDate, "dd-MM-yyyy");
    //  console.log(datee);
    setdatemain(datee);
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView
        contentContainerStyle={{
          paddingVertical: 20,
          backgroundColor: "white",
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginHorizontal: width * 0.05 }}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 50,
                overflow: "hidden",
                width: 100,
                height: 100,
                alignSelf: "center",
              }}
            >
              <Image
                resizeMode="stretch"
                source={{
                  uri: image
                    ? image.uri
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHIUNyf97xyXJJFoSG4nORMjeff_hHQCOQ1g&usqp=CAU",
                }}
                style={{ width: "100%", height: "100%" }}
              />
            </View>

            <View
              style={{
                backgroundColor: COLORS.primary,
                flex: 1,
                bottom: 30,
                left: 35,
                borderRadius: 18,
                padding: 4,
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={pickImage}>
                <FontAwesome5 name="edit" size={18} color={"white"} />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.heading}>Date:</Text>
          <TouchableOpacity onPress={() => setShowDate(true)}>
            <Input
              editable={false}
              value={datemain}
              placeholder="Enter Date"
              borderless
              iconContent={
                <FontAwesome5
                  size={16}
                  color={COLORS.primary}
                  name="calendar-day"
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
          <Text style={styles.heading}>Caption:</Text>
          <Input
            onChangeText={(bname) => setcaption(bname)}
            value={caption}
            placeholder="Enter your Brand name"
            borderless
            multiline
          />
        </View>
      </ScrollView>

      <Button
        center
        color={COLORS.primary}
        style={{ width: width * 0.9 }}
        onPress={() => AddCompany()}
      >
        Add Facility
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
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
