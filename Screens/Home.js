import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  Linking,
  Platform,
  ScrollView,
} from "react-native";
import { StackActions } from "@react-navigation/native";
import { FlatGrid } from "react-native-super-grid";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Styles, COLORS } from "./Styles";
import { IMAGES } from "./Images";
import { Card } from "react-native-shadow-cards";
import HomeOld from "./HomeOld";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";
import { Button } from "../Components";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Home({ navigation }) {
  const { height, width } = useWindowDimensions();
  const data = [
    {
      name: "Airport Transfer",
      link: "mailto:Relax.Southafrica@gmail.com",
      icon: "plane",
    },
    {
      name: "Location To Location",
      link: "https://twitter.com/Relax_Safrica",
      icon: "map-pin",
    },
    {
      name: "Delivery Service",
      link: "https://www.facebook.com/Relax-101359268985174",
      icon: "shipping-fast",
    },
    {
      name: "LMT Tour",
      link: "tel:+27 83 514 1138",
      icon: "car",
    },
  ];

  function logout() {
    AsyncStorage.getAllKeys()
      .then((keys) => AsyncStorage.multiRemove(keys))
      .then(() => navigation.dispatch(StackActions.replace("Login")));
  }
  const [user, setuser] = useState({});
  useEffect(() => {
    AsyncStorage.getItem("user").then((results) => {
      //  console.log(JSON.parse(results));
      setuser(JSON.parse(results));
    });
  }, []);
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Card
        elevation={Platform.OS === "ios" ? 2 : 5}
        style={[
          Styles.itemContainer,
          {
            width: width,
            paddingVertical: height * 0.02,
          },
        ]}
      >
        <View style={Styles.productRow}>
          <View
            style={{
              flexDirection: "row",
              width: width * 0.8,
            }}
          >
            <TouchableOpacity
              activeOpacity={0.95}
              onPress={() => navigation.navigate("Profile")}
            >
              <View style={Styles.proficeView}>
                <Image
                  style={Styles.profilePic}
                  source={{
                    uri: IMAGES.imageProfile + user.pic,
                  }}
                />
              </View>
            </TouchableOpacity>
            <View style={{}}>
              <Text style={Styles.productName}>{user && user.full_name}</Text>
              <Text style={Styles.productName}>{user && user.email}</Text>
            </View>
          </View>

          <View style={{ marginRight: 10 }}>
            <Menu
              style={{ height: 100 }}
              visible={visible}
              anchor={
                <TouchableOpacity onPress={() => setVisible(true)}>
                  <FontAwesome5
                    name={"ellipsis-v"}
                    size={20}
                    style={{ paddingRight: 0, paddingHorizontal: 30 }}
                    color={COLORS.primary}
                  />
                </TouchableOpacity>
              }
              onRequestClose={hideMenu}
            >
              <MenuItem
                onPress={() => {
                  hideMenu(), navigation.navigate("Profile");
                }}
              >
                Profile
              </MenuItem>
              <MenuDivider />
              <MenuItem
                onPress={() => {
                  hideMenu(), logout();
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </View>
        </View>
      </Card>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <Card
          elevation={Platform.OS === "ios" ? 2.5 : 5}
          style={[
            Styles.itemContainer,
            {
              width: width * 0.9,
              paddingVertical: height * 0.02,
              marginTop: 15,
              marginBottom: 8,
            },
          ]}
        >
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("History", { name: "Ride History" })
            }
          >
            <View
              style={{
                flexDirection: "row",
                width: width * 0.4,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome5
                name={"list-alt"}
                size={20}
                style={{ paddingRight: 10 }}
                color={COLORS.primary}
              />
              <Text style={Styles.wallet}>History</Text>
            </View>
          </TouchableOpacity>
          <View style={{ width: width * 0.1, height: 30 }}>
            <View style={Styles.verticleLine}></View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Wallet")}>
            <View
              style={{
                flexDirection: "row",
                width: width * 0.4,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome5
                name={"money-bill-alt"}
                size={20}
                style={{ paddingRight: 10 }}
                color={COLORS.primary}
              />
              <Text style={Styles.wallet}>Wallet</Text>
            </View>
          </TouchableOpacity>
        </Card>
        {/* <FlatGrid
        //  contentContainerStyle={Styles.flatgridContainer}
        showsVerticalScrollIndicator={false}
        itemDimension={width * 0.45}
        data={data.services}
        spacing={0}
        style={Styles.gridView} */}
        <View
          style={{
            height: height * 0.36,
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          {data.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                activeOpacity={0.95}
                onPress={() => navigation.navigate("Book ride")}
              >
                <Card
                  elevation={Platform.OS === "ios" ? 2.5 : 5}
                  style={[
                    Styles.homeItemContainer,
                    {
                      height: height * 0.15,
                      width: width * 0.44,
                      paddingVertical: height * 0.03,
                      // marginLeft: index % 2 == 0 ? width * 0.02 : 0,
                      // marginRight: index % 2 == 0 ? 0 : width * 0.02,
                    },
                  ]}
                >
                  <FontAwesome5
                    name={item.icon}
                    size={30}
                    color={COLORS.primary}
                  />
                  <Text
                    style={[Styles.itemName, { width: width * 0.44 }]}
                    numberOfLines={1}
                    adjustsFontSizeToFit
                  >
                    {item.name}
                  </Text>
                </Card>
              </TouchableOpacity>
            );
          })}
        </View>

        <Card
          style={[
            Styles.orderCard,
            {
              width: width * 0.92,
              height: height * 0.35,
              backgroundColor: COLORS.primary,
              justifyContent: "space-around",
            },
          ]}
          elevation={Platform.OS === "ios" ? 2.5 : 5}
          shadowless
        >
          <Text style={Styles.recentOrder}>LIVE BOOKINGS</Text>
          <View style={{ width: width * 0.8, height: 1, marginBottom: 20 }}>
            <View style={Styles.horizontalLine}></View>
          </View>
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
                  <FontAwesome5 name={"location-arrow"} color={COLORS.white} />
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
          <Button
            center
            shadowless
            color={COLORS.white}
            style={{ width: width * 0.8, marginBottom: 15, borderRadius: 20 }}
            onPress={() =>
              navigation.navigate("History", { name: "Live Bookings" })
            }
          >
            <Text style={Styles.wallet}>Show more</Text>
          </Button>
        </Card>
      </ScrollView>
    </View>
  );
}
