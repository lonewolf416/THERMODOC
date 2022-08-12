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
export default function DoctorsList({ navigation }) {
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
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => navigation.navigate("DoctorProfile")}
            >
              <Card
                key={index}
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
                            fontSize: 18,
                          },
                        ]}
                        numberOfLines={1}
                        adjustsFontSizeToFit
                      >
                        Dr.Albert Einstien
                      </Text>
                      <Text style={Styles.recentText}>Surgery</Text>

                      <Text style={Styles.recentText}>Anambra, CA 09870</Text>
                      <Text style={Styles.recentText}>
                        <FontAwesome5 name={"star"} color={COLORS.primary} />{" "}
                        4.5 (142 reviews)
                      </Text>
                    </View>
                  </View>
                </View>
              </Card>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
