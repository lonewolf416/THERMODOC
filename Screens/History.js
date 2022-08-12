import React from "react";
import {
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Styles, COLORS } from "./Styles";
import { IMAGES } from "./Images";
import { Card } from "react-native-shadow-cards";

import { Button } from "../Components";
export default function Hisotry({ navigation }) {
  const { height, width } = useWindowDimensions();
  const data = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 5 },
    { number: 6 },
  ];
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {data.map((item, index) => {
          return (
            <Card
              key={index}
              style={[
                Styles.orderCard,
                {
                  width: width * 0.92,
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
                  alignItems: "center",
                  //   paddingHorizontal: 10,
                  width: width * 0.84,
                }}
              >
                <View
                  style={{
                    width: width * 0.17,
                    //  height: "100%",
                    height: height * 0.14,
                    justifyContent: "center",
                    alignItems: "center",
                    borderColor: "white",
                    borderRightWidth: 1,
                    paddingRight: 15,
                    //  backgroundColor: "green",
                  }}
                >
                  <FontAwesome5 name={"car"} size={30} color={COLORS.white} />
                  <Text style={[Styles.recentText, { fontSize: 15 }]}>
                    <FontAwesome5
                      name={"pound-sign"}
                      size={16}
                      color={COLORS.white}
                    />{" "}
                    300
                  </Text>
                </View>
                <View style={Styles.productRow}>
                  <View style={{ width: width * 0.65 }}>
                    <Text
                      style={Styles.recentText}
                      numberOfLines={1}
                      adjustsFontSizeToFit
                    >
                      <FontAwesome5
                        name={"location-arrow"}
                        color={COLORS.white}
                      />
                      {"   "}
                      LONDON AIRPORT - HEATRO AIRPORT
                    </Text>
                    <Text style={Styles.recentText}>
                      <FontAwesome5 name={"clock"} color={COLORS.white} />
                      {"   "}
                      20/02/2022 12:30 am
                    </Text>
                    <Text style={Styles.recentText}>
                      <FontAwesome5 name={"car"} color={COLORS.white} />
                      {"   "}
                      Saloon
                    </Text>
                    <Text style={Styles.recentText}>
                      <FontAwesome5 name={"car"} color={COLORS.white} />
                      {"   "}
                      Excecutive
                    </Text>
                  </View>
                </View>
              </View>
            </Card>
          );
        })}
      </ScrollView>
    </View>
  );
}
