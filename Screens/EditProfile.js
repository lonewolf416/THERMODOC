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
import { IMAGES } from "./Images";
import { COLORS, Styles } from "./Styles";
import * as ImagePicker from "expo-image-picker";

export default function EditProfile({ navigation }) {
  const [status, requestCameraPermissionsAsync] =
    ImagePicker.useCameraPermissions();
  useEffect(() => {
    // requestCameraPermissionsAsync();
  }, []);
  const { width, height } = useWindowDimensions();
  const [text, setText] = useState("");

  const [image, setImage] = useState(null);
  const [isChecked, setChecked] = useState(false);
  const pickImage = async () => {
    console.log(status);
    if (status.granted === true) {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result.uri);
      }
    } else {
      alert("camera permission not granted");
    }

    console.log(result);
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
        <View
          style={{
            overflow: "hidden",
            height: 100,
            width: 100,
            borderRadius: 100 / 2,
            borderWidth: 3,
            borderColor: "black",
            alignSelf: "center",
          }}
        >
          <Image
            style={{ width: "100%", height: "100%" }}
            source={IMAGES.sample}
          />
        </View>
        <View style={{ marginHorizontal: width * 0.05 }}>
          <Text style={styles.heading}>First NAME:</Text>
          <Input
            placeholder="Enter First Name"
            borderless
            iconContent={
              <FontAwesome5
                size={16}
                color={COLORS.primary}
                name="user"
                style={Styles.inputIcon}
              />
            }
          />
          <Text style={styles.heading}>LAST TIME:</Text>
          <Input
            //    onChangeText={setText}
            //    value={text}
            placeholder="Enter Last Name"
            borderless
            iconContent={
              <FontAwesome5
                size={16}
                color={COLORS.primary}
                name="user"
                style={Styles.inputIcon}
              />
            }
          />
          <Text style={styles.heading}>EMAIL:</Text>
          <Input
            //  onChangeText={setText}
            //  value={text}
            placeholder="Enter Email"
            borderless
            iconContent={
              <FontAwesome5
                size={16}
                color={COLORS.primary}
                name="envelope"
                style={Styles.inputIcon}
              />
            }

            //location-arrow
          />
          <Text style={styles.heading}>CONTACT:</Text>
          <Input
            //    onChangeText={setText}
            //    value={text}
            placeholder="Enter Contact"
            borderless
            iconContent={
              <FontAwesome5
                size={16}
                color={COLORS.primary}
                name="phone"
                style={Styles.inputIcon}
              />
            }
          />
          <Text style={styles.heading}>ADDRESS:</Text>
          <Input
            //    onChangeText={setText}
            //    value={text}
            placeholder="Enter Address"
            borderless
            iconContent={
              <FontAwesome5
                size={16}
                color={COLORS.primary}
                name="location-arrow"
                style={Styles.inputIcon}
              />
            }
          />
          <Button
            center
            color={COLORS.primary}
            style={{ width: width * 0.9, marginTop: 20 }}
          >
            SAVE
          </Button>
        </View>
      </ScrollView>
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
    color: COLORS.primary,
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
