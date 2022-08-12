import * as React from "react";
import { View, Button, Text } from "react-native";
import { Styles } from "./Styles";

export default function Cart({ navigation }) {
  return (
    <View style={Styles.container}>
      <Text>Cart screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
