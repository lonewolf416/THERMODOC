import React from "react";
import {
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  TouchableWithoutFeedback,
  Image,
  ImageStore,
  TouchableOpacity,
} from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Styles, COLORS } from "./Styles";
import { IMAGES } from "./Images";
import { Card } from "react-native-shadow-cards";
import { Button } from "../Components";

export default function HomeOld({ navigation }) {
  const { height, width } = useWindowDimensions();
  const data = {
    services: [
      {
        id: "1",
        name: "HVAC COMPANY 1",
        company: "Unique Code",
        icon: "home",
        cleanings: [
          {
            id: "1",
            name: "One Bedroom Home",
            price: "R150.00",
            price_checkout: "150.00",
            icon: "home",
            description:
              "All common areas are included Kitchen, Lounge, Bathroom and toilets, Dining area, Patio",
            additional: [
              {
                id: "1",
                name: "Interior windows",
                price: "R0.00",
                price_checkout: "0.00",
              },
              {
                id: "2",
                name: "Ironing",
                price: "R0.00",
                price_checkout: "0.00",
              },
              {
                id: "3",
                name: "Cleaning of Cupboards",
                price: "R0.00",
                price_checkout: "0.00",
              },
              {
                id: "4",
                name: "Wiping of interior walls",
                price: "R50.00",
                price_checkout: "50.00",
              },
              {
                id: "5",
                name: "Childminder",
                price: "R0.00",
                price_checkout: "0.00",
              },
            ],
          },
          {
            id: "2",
            name: "Two Bedroom Home",
            price: "R210.00",
            company: "HVCA company ",
            icon: "home",
            price_checkout: "210.00",
            description:
              "All common areas are included Kitchen, Lounge, Bathroom and toilets, Dining area, Patio",
            additional: [
              {
                id: "1",
                name: "Interior windows",
                price: "R0.00",
                price_checkout: "0.00",
              },
              {
                id: "2",
                name: "Ironing",
                price: "R0.00",
                price_checkout: "0.00",
              },
              {
                id: "3",
                name: "Cleaning of Cupboards",
                price: "R0.00",
                price_checkout: "0.00",
              },
              {
                id: "4",
                name: "Wiping of interior walls",
                price: "R50.00",
                price_checkout: "50.00",
              },
              {
                id: "5",
                name: "Childminder",
                price: "R0.00",
                price_checkout: "0.00",
              },
            ],
          },
          {
            id: "3",
            name: "Three Bedroom Home",
            company: "HVCA company ",
            price: "R260.00",
            icon: "home",
            price_checkout: "260.00",
            description:
              "All common areas are included Kitchen, Lounge, Bathroom and toilets, Dining area, Patio",
            additional: [
              {
                id: "1",
                name: "Interior windows",
                price: "R0.00",
                price_checkout: "0.00",
              },
              {
                id: "2",
                name: "Ironing",
                price: "R0.00",
                price_checkout: "0.00",
              },
              {
                id: "3",
                name: "Cleaning of Cupboards",
                price: "R0.00",
                price_checkout: "0.00",
              },
              {
                id: "4",
                name: "Wiping of interior walls",
                price: "R50.00",
                price_checkout: "50.00",
              },
              {
                id: "5",
                name: "Childminder",
                price: "R0.00",
                price_checkout: "0.00",
              },
            ],
          },
          {
            id: "4",
            name: "Four Bedroom Home",

            price: "R320.00",
            icon: "home",
            price_checkout: "320.00",
            description:
              "All common areas are included Kitchen, Lounge, Bathroom and toilets, Dining area, Patio",
            additional: [
              {
                id: "1",
                name: "Interior windows",
                price: "R0.00",
                price_checkout: "0.00",
              },
              {
                id: "2",
                name: "Ironing",
                price: "R0.00",
                price_checkout: "0.00",
              },
              {
                id: "3",
                name: "Cleaning of Cupboards",
                price: "R0.00",
                price_checkout: "0.00",
              },
              {
                id: "4",
                name: "Wiping of interior walls",
                price: "R50.00",
                price_checkout: "50.00",
              },
              {
                id: "5",
                name: "Childminder",
                price: "R0.00",
                price_checkout: "0.00",
              },
            ],
          },
          {
            id: "5",
            name: "Five Bedroom Home",
            price: "R380.00",
            icon: "home",
            price_checkout: "380.00",
            description:
              "All common areas are included Kitchen, Lounge, Bathroom and toilets, Dining area, Patio",
            additional: [
              {
                id: "1",
                name: "Interior windows",
                price: "R0.00",
                price_checkout: "0.00",
              },
              {
                id: "2",
                name: "Ironing",
                price: "R0.00",
                price_checkout: "0.00",
              },
              {
                id: "3",
                name: "Cleaning of Cupboards",
                price: "R0.00",
                price_checkout: "0.00",
              },
              {
                id: "4",
                name: "Wiping of interior walls",
                price: "R50.00",
                price_checkout: "50.00",
              },
              {
                id: "5",
                name: "Childminder",
                price: "R0.00",
                price_checkout: "0.00",
              },
            ],
          },
        ],
      },
      {
        id: "2",
        name: "HVAC COMPANY 2",
        company: "Unique Code",
        icon: "building",
        cleanings: [
          {
            id: "1",
            name: "Car Wash Service",
            price: "R100.00",
            price_checkout: "100.00",
            icon: "car",
            description:
              "A car , bakkie and SUV wash includes a standard wash and dry with and Vacuum and a tyre polish.Done in the convenience of your home.",
            additional: [
              {
                id: "1",
                name: "Hand wax",
                price: "R50.00",
                price_checkout: "50.00",
              },
              {
                id: "2",
                name: "Engine wash",
                price: "R50.00",
                price_checkout: "50.00",
              },
              {
                id: "3",
                name: "Mini Detail",
                price: "R250.00",
                price_checkout: "250.00",
              },
            ],
          },
          {
            id: "2",
            name: "Pool Cleaning Service",
            price: "R200.00",
            price_checkout: "200.00",
            icon: "swimming-pool",
            description:
              "Cleaning of leaf traps and filters scrubbing of walls ,basic water analysis and water treatment. NOTE : Pool must be working condition",
            additional: [],
          },
        ],
      },
      {
        id: "3",
        name: "HVAC COMPANY 3",
        company: "Unique Code",
        icon: "star",
        cleanings: [
          {
            id: "1",
            name: "One Bedroom Home",
            price: "R150.00",
            price_checkout: "150.00",
            icon: "home",
            description:
              "All common areas are included Kitchen, Lounge, Bathroom and toilets, Dining area, Patio",
            additional: [
              {
                id: "1",
                name: "Interior windows",
                price: "R0.00",
                price_checkout: "0.00",
              },
              {
                id: "2",
                name: "Ironing",
                price: "R0.00",
                price_checkout: "0.00",
              },
              {
                id: "3",
                name: "Cleaning of Cupboards",
                price: "R0.00",
                price_checkout: "0.00",
              },
              {
                id: "4",
                name: "Wiping of interior walls",
                price: "R50.00",
                price_checkout: "50.00",
              },
              {
                id: "5",
                name: "Childminder",
                price: "R0.00",
                price_checkout: "0.00",
              },
            ],
          },
          {
            id: "2",
            name: "Two Bedroom Home",
            price: "R210.00",
            icon: "home",
            price_checkout: "210.00",
            description:
              "All common areas are included Kitchen, Lounge, Bathroom and toilets, Dining area, Patio",
            additional: [
              {
                id: "1",
                name: "Interior windows",
                price: "R0.00",
                price_checkout: "0.00",
              },
              {
                id: "2",
                name: "Ironing",
                price: "R0.00",
                price_checkout: "0.00",
              },
              {
                id: "3",
                name: "Cleaning of Cupboards",
                price: "R0.00",
                price_checkout: "0.00",
              },
              {
                id: "4",
                name: "Wiping of interior walls",
                price: "R50.00",
                price_checkout: "50.00",
              },
              {
                id: "5",
                name: "Childminder",
                price: "R0.00",
                price_checkout: "0.00",
              },
            ],
          },
          {
            id: "3",
            name: "Three Bedroom Home",
            price: "R260.00",
            icon: "home",
            price_checkout: "260.00",
            description:
              "All common areas are included Kitchen, Lounge, Bathroom and toilets, Dining area, Patio",
            additional: [
              {
                id: "1",
                name: "Interior windows",
                price: "R0.00",
                price_checkout: "0.00",
              },
              {
                id: "2",
                name: "Ironing",
                price: "R0.00",
                price_checkout: "0.00",
              },
              {
                id: "3",
                name: "Cleaning of Cupboards",
                price: "R0.00",
                price_checkout: "0.00",
              },
              {
                id: "4",
                name: "Wiping of interior walls",
                price: "R50.00",
                price_checkout: "50.00",
              },
              {
                id: "5",
                name: "Childminder",
                price: "R0.00",
                price_checkout: "0.00",
              },
            ],
          },
          {
            id: "4",
            name: "Car Wash Service",
            price: "R100.00",
            price_checkout: "100.00",
            icon: "car",
            description:
              "A car , bakkie and SUV wash includes a standard wash and dry with and Vacuum and a tyre polish.Done in the convenience of your home.",
            additional: [
              {
                id: "1",
                name: "Hand wax",
                price: "R50.00",
                price_checkout: "50.00",
              },
              {
                id: "2",
                name: "Engine wash",
                price: "R50.00",
                price_checkout: "50.00",
              },
              {
                id: "3",
                name: "Mini Detail",
                price: "R250.00",
                price_checkout: "250.00",
              },
            ],
          },
          {
            id: "5",
            name: "Pool Cleaning Service",
            price: "R200.00",
            price_checkout: "200.00",
            icon: "swimming-pool",
            description:
              "Cleaning of leaf traps and filters scrubbing of walls ,basic water analysis and water treatment. NOTE : Pool must be working condition",
            additional: [],
          },
          {
            id: "6",
            name: "Garden Service",
            price: "R200.00",
            price_checkout: "200.00",
            icon: "tree",
            description:
              "Includes mowing of the lawn ,pruning of trees and plants,edging of the lawn ,sweeping of driveways and pathways.",
            additional: [
              {
                id: "1",
                name: "Fertilzation (fertilizer must be provided )",
                price: "R100.00",
                price_checkout: "100.00",
              },
              {
                id: "2",
                name: "Creation of a vegatable garden (items must be provided)",
                price: "R120.00",
                price_checkout: "120.00",
              },
              {
                id: "3",
                name: "Tree Felling (includes disposal of tree )",
                price: "R200.00",
                price_checkout: "200.00",
              },
            ],
          },
          {
            id: "7",
            name: "Moving in or Moving out Service",
            price: "R250.00",
            price_checkout: "250.00",
            icon: "truck-loading",
            description:
              "Our efficient move-out checklist covers every detail so you can focus on the future with peace of mind. Moving out of a rental? A clean home will help you get your deposit back. Selling your home? We’ll get it in tip top shape for showing. Moving into a new home? We’ll get it clean and sanitized before your move in .",
            additional: [],
          },
        ],
      },
      {
        id: "4",
        name: "HVAC COMPANY 4",
        company: "Unique Code",
        icon: "shopping-cart",
        company: "HVCA company ",
      },
      {
        id: "5",
        name: "HVAC COMPANY 5",
        company: "Unique Code",
        navigation: "About us",
        icon: "info-circle",
      },
      {
        id: "6",
        name: "HVAC COMPANY 6",
        company: "Unique Code",
        navigation: "Contact us",
        icon: "mail-bulk",
      },
    ],
  };
  const [items, setItems] = React.useState([
    { name: "Home Cleaning Services", icon: "home", navigation: "Product" },
    {
      name: "Outdoor Cleaning Services",
      icon: "building",
      navigation: "Product",
    },
    { name: "Featured Products", icon: "star", navigation: "Product" },
    { name: "Cart", icon: "shopping-cart", navigation: "Cart" },
    { name: "About Us", icon: "info", navigation: "About us" },
    { name: "Contact Us", icon: "envelope", navigation: "Contact us" },
  ]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <FlatGrid
        contentContainerStyle={Styles.flatgridContainer}
        showsVerticalScrollIndicator={false}
        itemDimension={width * 0.9}
        data={data.services}
        spacing={10}
        style={Styles.gridView}
        renderItem={({ item, index }) => (
          <Card
            elevation={5}
            style={[
              Styles.itemContainer,
              {
                width: width * 0.9,
                paddingVertical: height * 0.02,
              },
            ]}
          >
            <View
              style={{
                width: width * 0.15,
                alignItems: "center",
              }}
            >
              <FontAwesome5
                name={"trash-alt"}
                size={20}
                color={COLORS.primary}
              />
            </View>
            <View style={Styles.productRow}>
              <View style={{ width: width * 0.75 }}>
                <Text style={Styles.productName}>{item.name}</Text>
                <Text style={Styles.productName}>{item.company}</Text>
              </View>
              <View style={{ width: width * 0.15, flexDirection: "row" }}>
                <FontAwesome5
                  name={"edit"}
                  size={20}
                  style={{ paddingRight: 10 }}
                  color={COLORS.primary}
                />
                <FontAwesome5
                  name={"trash-alt"}
                  size={20}
                  color={COLORS.primary}
                />
              </View>
            </View>
          </Card>
        )}
      />
      {/* <Button
        center
        color="white"
        style={{ width: width * 0.9 }}
        onPress={() => navigation.navigate("Add Company")}
        // onPress={() => onLogin(navigation, email, password)}
      >
        ADD HVAC COMPANY
      </Button> */}
    </View>
  );
}
