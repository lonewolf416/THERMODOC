import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Styles, COLORS } from "./Styles";
import { Card } from "react-native-shadow-cards";

export default function Product({ navigation, route }) {
  const { name, cleanings } = route.params;
  const { height, width } = useWindowDimensions();

  return (
    <>
      {cleanings && cleanings.length > 0 && (
        <FlatGrid
          showsVerticalScrollIndicator={false}
          contentContainerStyle={Styles.productflatgridContainer}
          itemDimension={width * 1}
          data={cleanings}
          style={Styles.gridView}
          spacing={10}
          renderItem={({ item }) => (
            <Pressable
              onPress={() =>
                navigation.navigate("Product Detail", { product: item })
              }
            >
              <Card
                //  onPress={() => navigation.navigate("Product Detail")}
                style={[
                  Styles.profileItemContainer,
                  { height: height * 0.15, width: width * 0.95 },
                ]}
              >
                <View style={{ width: 50, alignItems: "center" }}>
                  <FontAwesome5
                    name={item.icon}
                    size={40}
                    color={COLORS.primary}
                  />
                </View>
                <View style={Styles.productRow}>
                  <View style={{ width: width * 0.6 }}>
                    <Text style={Styles.productName}>{item.name}</Text>
                    <Text style={Styles.price}>{item.price}</Text>
                  </View>
                  <>
                    <FontAwesome5
                      name={"cart-plus"}
                      size={30}
                      color={COLORS.primary}
                    />
                  </>
                </View>
              </Card>
            </Pressable>
          )}
        />
      )}
    </>
  );
}
