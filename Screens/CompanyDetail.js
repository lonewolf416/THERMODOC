import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  ScrollView,
  Image,
} from "react-native";
import { IMAGES } from "./Images";

const { width, height } = Dimensions.get("screen");

const CompanyDetail = ({ route, navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginVertical: 20, alignItems: "center" }}>
            <Image style={styles.productImg} source={IMAGES.sample} />
            <Text style={styles.day}>DAY 1</Text>
            <View style={styles.ViewReceipt}>
              <View style={styles.item}>
                <Text style={styles.text}>Name:</Text>
              </View>
              <View style={{ flex: 1, justifyContent: "flex-start" }}>
                <Text style={styles.viewText}>{"finalTime"}</Text>
              </View>
            </View>
            <View style={styles.ViewReceipt}>
              <View style={styles.item}>
                <Text style={styles.text}>Brand Name:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.viewText}>{"countryss"}</Text>
              </View>
            </View>
            <View style={styles.ViewReceipt}>
              <View style={styles.item}>
                <Text style={styles.text}>Unique HVAC Company Code:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.viewText}>{"citys"}</Text>
              </View>
            </View>
            <View style={styles.ViewReceipt}>
              <View style={styles.item}>
                <Text style={styles.text}>Media Replacement Size:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.viewText}>{"address"}</Text>
              </View>
            </View>
            <View style={styles.ViewReceipt}>
              <View style={styles.item}>
                <Text style={styles.text}>Contact:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.viewText}>asfasd</Text>
              </View>
            </View>
            <View style={styles.ViewReceipt}>
              <View style={styles.item}>
                <Text style={styles.text}>Email:</Text>
              </View>

              <View style={{ flex: 1, flexDirection: "row" }}>
                <Text
                  //   numberOfLines={1}
                  style={[styles.viewText]}
                >
                  sdadasd
                </Text>
              </View>
            </View>
            <View style={styles.ViewReceipt}>
              <View style={styles.item}>
                <Text style={styles.text}>Website:</Text>
              </View>

              <View style={{ flex: 1, flexDirection: "row" }}>
                <Text
                  //   numberOfLines={1}
                  style={[styles.viewText]}
                >
                  sdadasd
                </Text>
              </View>
            </View>
            <View style={styles.ViewReceipt}>
              <View style={styles.item}>
                <Text style={styles.text}>Address:</Text>
              </View>

              <View style={{ flex: 1, flexDirection: "row" }}>
                <Text
                  //   numberOfLines={1}
                  style={[styles.viewText]}
                >
                  sdadasd
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

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
    width: width * 0.88,
    marginVertical: 5,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderRadius: 3,
    borderColor: "rgba(128,128,128,0.3)",
    paddingVertical: 5,
  },
  productImg: {
    height: height * 0.25,
    width: width * 0.5,
  },
  viewText: {
    fontSize: 14,
    color: "grey",
    paddingVertical: 5,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "grey",
    paddingVertical: 5,
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

export default CompanyDetail;
