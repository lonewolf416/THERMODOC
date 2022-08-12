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
export default function HospitalProfile({ navigation }) {
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
              width: width * 0.85,
              paddingVertical: 15,
              marginVertical: 5,
              backgroundColor: COLORS.white,
            },
          ]}
          elevation={3}
          shadowless
        >
          <View
            style={{
              flexDirection: "row",
              width: width * 0.8,
              paddingHorizontal: 10,
            }}
          >
            <View
              style={{
                overflow: "hidden",
                height: 80,
                width: 80,
                borderRadius: 80 / 2,
              }}
            >
              <Image
                resizeMode={"contain"}
                style={{ width: "100%", height: "100%" }}
                source={IMAGES.sample}
              />
            </View>
            <View style={Styles.productRow}>
              <View style={{ width: width * 0.65 }}>
                <Text
                  style={[
                    Styles.recentText,
                    {
                      fontWeight: "bold",
                      color: COLORS.primary,
                      fontSize: 20,
                    },
                  ]}
                  numberOfLines={1}
                  adjustsFontSizeToFit
                >
                  Lana Hospital
                </Text>
                <Text style={Styles.recentText}>Surgery</Text>

                <Text style={Styles.recentText}>Anambra, CA 09870</Text>
              </View>
            </View>
          </View>
        </Card>

        <Card
          style={[
            {
              width: width * 0.85,
              paddingVertical: 15,
              marginVertical: 5,
              backgroundColor: COLORS.white,
              alignSelf: "center",
              borderRadius: 15,
              //   marginTop: 10,
              //alignItems: "center",
              paddingBottom: 10,
            },
          ]}
          elevation={3}
        >
          <View
            style={{
              paddingHorizontal: 15,
              flexDirection: "column",
            }}
          >
            <Text
              style={[
                Styles.recentText,
                {
                  fontWeight: "bold",
                  color: COLORS.primary,
                  fontSize: 18,
                  paddingBottom: 20,
                  textDecorationLine: "underline",
                },
              ]}
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              Address:
            </Text>
          </View>
        </Card>
        <Card
          style={[
            {
              width: width * 0.85,
              paddingVertical: 15,
              marginVertical: 5,
              backgroundColor: COLORS.white,
              alignSelf: "center",
              borderRadius: 15,
              //   marginTop: 10,
              //alignItems: "center",
              paddingBottom: 10,
            },
          ]}
          elevation={3}
        >
          <View
            style={{
              paddingHorizontal: 15,
              flexDirection: "column",
            }}
          >
            <Text
              style={[
                Styles.recentText,
                {
                  fontWeight: "bold",
                  color: COLORS.primary,
                  fontSize: 18,
                  paddingBottom: 20,
                  textDecorationLine: "underline",
                },
              ]}
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              Lana Hospital Facilities:
            </Text>
          </View>
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  viewText: {
    fontSize: 15,
    color: "white",
    paddingVertical: 2,
    //  width: width * 0.23,

    //  textAlign: "center",
  },
  card: {
    height: height * 0.1,
    width: width * 0.26,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "black",
  },
  profileView: {
    flexDirection: "row",
    width: width * 0.8,
    justifyContent: "space-between",
    paddingVertical: 10,
  },
});
