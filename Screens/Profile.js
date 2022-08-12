import React from "react";
import {
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Styles, COLORS } from "./Styles";
import { IMAGES } from "./Images";
import { Card } from "react-native-shadow-cards";
const { height, width } = Dimensions.get("screen");
import { Button } from "../Components";
export default function Profile({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <Card
          style={[
            Styles.orderCard,
            {
              width: width * 0.92,

              backgroundColor: "white",
              // justifyContent: "center",
            },
          ]}
          elevation={4}
          shadowless
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              paddingHorizontal: 10,
              backgroundColor: COLORS.primary,
              paddingVertical: 20,
              top: 0,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}
          >
            <View style={Styles.proficeView}>
              <Image style={[Styles.profilePic]} source={IMAGES.sample} />
            </View>
            <View style={{}}>
              <Text
                style={[
                  Styles.productName,
                  { textTransform: "none", color: "white" },
                ]}
              >
                Muhammad Shakeeb Hussain
              </Text>
              <Text
                numberOfLines={1}
                adjustsFontSizeToFit
                style={[
                  Styles.productName,
                  { textTransform: "none", color: "white" },
                ]}
              >
                shakeebmuhammad416@gmail.com
              </Text>
            </View>
          </View>
          <View style={{ marginVertical: 2, alignItems: "center" }}>
            <View style={styles.ViewReceipt}>
              <View style={styles.item}>
                <Text style={styles.text}>Email:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.viewText}>{"countryss"}</Text>
              </View>
            </View>
            <View style={styles.ViewReceipt}>
              <View style={styles.item}>
                <Text style={styles.text}>Contact:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.viewText}>{"citys"}</Text>
              </View>
            </View>
            <View style={styles.ViewReceipt}>
              <View style={styles.item}>
                <Text style={styles.text}>Address:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.viewText}>{"address"}</Text>
              </View>
            </View>
            <View style={styles.ViewReceipt}>
              <View style={styles.item}>
                <Text style={styles.text}>Address:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.viewText}>{"address"}</Text>
              </View>
            </View>
            <View style={styles.ViewReceipt}>
              <View style={styles.item}>
                <Text style={styles.text}>Address:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.viewText}>{"address"}</Text>
              </View>
            </View>
          </View>
          <Button
            center
            color={COLORS.primary}
            style={{ width: width * 0.8, marginBottom: 15, borderRadius: 20 }}
            // onPress={() => navigation.navigate("Edit Profile")}
          >
            <Text style={Styles.wallet}>EDIT PROFILE</Text>
          </Button>
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "white",
  },
  registerContainer: {
    width: width * 0.9,
    height: height * 0.5,
    overflow: "hidden",
    justifyContent: "center",
  },
  ViewReceipt: {
    //    flexDirection: "row",
    width: width * 0.8,
    paddingVertical: 3,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderRadius: 3,
    borderColor: "grey",
    marginVertical: 10,
  },
  productImg: {
    height: "100%",
    width: "100%",
  },
  viewText: {
    fontSize: 20,
    color: "grey",
    paddingVertical: 2,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "grey",
    paddingVertical: 2,
  },
  cardtext: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    paddingTop: 15,
    //paddingVertical: 0,
  },
  day: {
    fontSize: 22,
    fontWeight: "bold",
    color: "grey",
    paddingVertical: 5,
  },
  viewIcon: {
    fontSize: 20,
    color: "grey",
  },
  item: {
    marginRight: 3,
    flexDirection: "row",
  },
  image: {
    width: "100%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    flexDirection: "row",
  },
});
