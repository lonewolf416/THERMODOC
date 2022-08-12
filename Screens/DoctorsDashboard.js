// // 7 Type of Graph using React Native Chart Kit
// // https://aboutreact.com/react-native-chart-kit/

// // import React in our code
// import React from "react";

// // import all the components we are going to use
// import {
//   SafeAreaView,
//   Text,
//   View,
//   StyleSheet,
//   Dimensions,
//   ScrollView,
// } from "react-native";

// //import React Native chart Kit for different kind of Chart
// import { LineChart } from "expo-chart-kit";

// const MyBezierLineChart = () => {
//   return (
//     <LineChart
//       data={{
//         labels: [
//           "Jan",
//           "Feb",
//           "Mar",
//           "Apr",
//           "May",
//           "Jun",
//           "Jul",
//           "Aug",
//           "Sep",
//           "Oct",
//           "Nov",
//           "Dec",
//         ],
//         datasets: [
//           {
//             data: [
//               Math.random() * 100,
//               Math.random() * 100,
//               Math.random() * 100,
//               Math.random() * 100,
//               Math.random() * 100,
//               Math.random() * 100,
//               Math.random() * 100,
//               Math.random() * 100,
//               Math.random() * 100,
//               Math.random() * 100,
//               Math.random() * 100,
//               Math.random() * 100,
//             ],
//           },
//         ],
//       }}
//       width={Dimensions.get("screen").width * 0.96} // from react-native
//       height={220}
//       yAxisLabel={"Rs"}
//       chartConfig={{
//         backgroundGradientFrom: "#12adf3",
//         backgroundGradientFromOpacity: 1,
//         backgroundGradientTo: "#5ec9f7",
//         backgroundGradientToOpacity: 0.5,
//         color: (opacity = 0.5) => `rgba(255, 255, 255, ${opacity})`,
//         strokeWidth: 2, // optional, default 3
//         barPercentage: 0.5,
//         useShadowColorFromDataset: false, // optional
//       }}
//       bezier
//       style={{
//         borderRadius: 16,
//         margin: 0,
//         padding: 0,
//         marginHorizontal: Dimensions.get("screen").width * 0.01,
//       }}
//     />
//   );
// };

// const DoctorsDashboard = () => {
//   return (
//     <View style={{ flex: 1, alignContent: "center" }}>
//       <MyBezierLineChart />
//     </View>
//   );
// };

// export default DoctorsDashboard;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     justifyContent: "center",
//     alignItems: "center",
//     textAlign: "center",
//     padding: 10,
//   },
//   header: {
//     textAlign: "center",
//     fontSize: 18,
//     padding: 16,
//     marginTop: 16,
//   },
// });

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
export default function DoctorsDashboard({ navigation }) {
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
