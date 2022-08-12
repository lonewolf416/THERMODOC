import React, { useState } from "react";
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
import { Input } from "../Components";
const { height, width } = Dimensions.get("screen");
import { Button } from "../Components";
export default function PatientDashboard({ navigation }) {
  const [visible, setvisible] = useState(false);
  const data = [1, 2];
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {data.map((item, index) => {
          return (
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
                      <Ionicons
                        name={"star"}
                        color={COLORS.primary}
                        size={20}
                      />
                      <Ionicons
                        name={"star"}
                        color={COLORS.primary}
                        size={20}
                      />
                      <Ionicons
                        name={"star"}
                        color={COLORS.primary}
                        size={20}
                      />
                      <Ionicons
                        name={"star"}
                        color={COLORS.primary}
                        size={20}
                      />
                      <Ionicons
                        name={"star"}
                        color={COLORS.primary}
                        size={20}
                      />
                    </Text>
                    <Text style={[Styles.recentText, { fontWeight: "bold" }]}>
                      John Doe
                    </Text>
                    <Text
                      style={{
                        width: "80%",
                        fontSize: 13,
                        color: COLORS.black,
                      }}
                    >
                      Surgery Anambra, CA 09870 Anambra, CA 09870Anambra, CA
                      09870 Anambra, CA 09870
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
