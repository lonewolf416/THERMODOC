import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
} from "react-native";

export default function AboutUs({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: "center", marginHorizontal: 30 }}>
          <Image
            style={styles.productImg}
            source={{
              uri: "https://d1howb1wwyap5o.cloudfront.net/startersite/default/owner.png",
            }}
          />
          <Text style={styles.name}>Julian Pillay</Text>
          <Text style={styles.name}>Owner</Text>
          <Text style={styles.description}>
            The inspiration behind the business is simple, to provide
            professional, efficient and easy to use app for our clients while
            keeping exemplary high standard in the work we carry out .Our
            services are tailored to each client’s requirements and we count our
            services ‘satisfactory’ only when our client is satisfied with our
            services.
          </Text>
        </View>

        {/* <View style={styles.separator}></View>
        <View style={styles.addToCarContainer}>
          <TouchableOpacity
            style={styles.shareButton}
            onPress={() => this.clickEventListener()}
          >
            <Text style={styles.shareButtonText}>Add To Cart</Text>
          </TouchableOpacity>
        </View> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
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
    marginTop: 10,
    fontSize: 18,
    color: "green",
    fontWeight: "bold",
  },
  description: {
    textAlign: "center",
    marginTop: 10,
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
    marginTop: 20,
    marginHorizontal: 30,
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
});
