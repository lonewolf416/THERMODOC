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
export default function Wallet({ navigation }) {
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
              height: height * 0.4,
              paddingVertical: 20,
              backgroundColor: COLORS.primary,
              justifyContent: "space-around",
            },
          ]}
          elevation={0}
          shadowless
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              paddingVertical: 20,
            }}
          >
            <Text style={styles.cardtext}>£ 300</Text>
          </View>

          {/* <Button
            center
            shadowless
            color={COLORS.white}
            style={{ width: width * 0.8, marginBottom: 15, borderRadius: 20 }}
            onPress={() => navigation.navigate("Edit Profile")}
          >
            <Text style={Styles.wallet}>CREDIT / DEBIT</Text>
          </Button> */}
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
    marginVertical: 5,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderRadius: 3,
    borderColor: "white",
    paddingVertical: 5,
  },
  productImg: {
    height: "100%",
    width: "100%",
  },
  viewText: {
    fontSize: 20,
    color: "white",
    paddingVertical: 5,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    paddingVertical: 5,
  },
  cardtext: {
    fontSize: 60,
    // textAlign: "auto",
    fontWeight: "bold",
    color: "white",
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
