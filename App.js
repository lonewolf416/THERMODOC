import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
//Pages Import
//import Home from "./Screens/Home";
import Profile from "./Screens/Profile";
import Product from "./Screens/Product";
import Cart from "./Screens/Cart";
import AboutUs from "./Screens/AboutUs";
import ContactUs from "./Screens/Home";
import Login from "./Screens/Login";
import Register from "./Screens/SignUp";
import ProductDetail from "./Screens/ProductDetail";
import AddCompany from "./Screens/BookRide";
import BookRide from "./Screens/BookRide";
import CompanyDetail from "./Screens/CompanyDetail";
import EditProfile from "./Screens/EditProfile";
import Hisotry from "./Screens/History";
import { SafeAreaView, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Home from "./Screens/Home";
import Wallet from "./Screens/Wallet";
import OnBoarding from "./Screens/OnBoadring";
import SignUp from "./Screens/SignUp";
import SignUpSelect from "./Screens/SignUpSelect";
import DoctorsList from "./Screens/DoctorsList";
const Stack = createStackNavigator();
import { COLORS } from "./Screens/Styles";
import DoctorProfile from "./Screens/DoctorProfile";
import RateReview from "./Screens/RateReview";
import HospitalList from "./Screens/HospitalList";
import HospitalProfile from "./Screens/HospitalProfile";
import DoctorsDashboard from "./Screens/DoctorsDashboard";
import PatientDashboard from "./Screens/PatientDashboard";
import HospitalDashboard from "./Screens/HospitalDashboard";
import HospitalFacility from "./Screens/HospitalFacility";
import AddFacility from "./Screens/AddFacility";

function UserStack() {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen
        name="Book ride"
        component={BookRide}
        options={{
          headerShown: true,
          headerTitle: "Book a Ride",
        }}
      />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen
        name="History"
        component={Hisotry}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen name="Edit Profile" component={EditProfile} />
      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="About us" component={AboutUs} />
      <Stack.Screen name="Contact us" component={ContactUs} />
      <Stack.Screen name="Product Detail" component={ProductDetail} />
    </Stack.Navigator>
  );
}

function LoginStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="On Boarding"
        component={OnBoarding}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Sign Up Select"
        component={SignUpSelect}
        options={{
          headerTitle: "Sign Up",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Sign Up"
        component={SignUp}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Doctors List"
        component={DoctorsList}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="PatientsTab"
        component={PatientsTab}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DoctorProfile"
        component={DoctorProfile}
        options={{
          headerShown: true,
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="HospitalProfile"
        component={HospitalProfile}
        options={{
          headerShown: true,
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="RateReview"
        component={RateReview}
        options={{
          headerShown: true,
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="AddFacility"
        component={AddFacility}
        options={{
          headerShown: true,
          headerTitle: "Add a Facility",
        }}
      />
      <Stack.Screen name="UserStack" component={UserStack} />
      <Stack.Screen name="DoctorsTab" component={DoctorsTab} />
      <Stack.Screen name="HospitalTab" component={HospitalTab} />
    </Stack.Navigator>
  );
}

function LoggedInStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="UserStack" component={UserStack} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function PatientsTab() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={PatientDashboard}
        options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="chart-pie" color={color} size={size} />
          ),
          headerShown: true,
          headerTitle: "All Ratings",
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="Doctors"
        component={DoctorsList}
        options={{
          tabBarLabel: "Doctors",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-md" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Hospitals"
        component={HospitalList}
        options={{
          tabBarLabel: "Hospitals",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="hospital" color={color} size={size} />
          ),
          //   tabBarBadge: 3,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Consult Room"
        component={DoctorsList}
        options={{
          tabBarLabel: "Consult Room",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="ios-chatbox-ellipses-outline"
              color={color}
              size={size}
            />
          ),
          //   tabBarBadge: 3,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-circle" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

function DoctorsTab() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DoctorsDashboard}
        options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="briefcase" color={color} size={size} />
          ),
          headerShown: true,
          headerTitle: "Your Ratings",
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-circle" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Consult Room"
        component={DoctorsList}
        options={{
          tabBarLabel: "Consult Room",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="ios-chatbox-ellipses-outline"
              color={color}
              size={size}
            />
          ),
          //   tabBarBadge: 3,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Hospitals"
        component={HospitalList}
        options={{
          tabBarLabel: "Hospitals",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="hospital" color={color} size={size} />
          ),
          //   tabBarBadge: 3,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
function HospitalTab() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={HospitalDashboard}
        options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="briefcase" color={color} size={size} />
          ),
          headerShown: true,
          headerTitle: "Dashboard",
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-circle" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Facilities"
        component={HospitalFacility}
        options={{
          tabBarLabel: "Facilities",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="tools" color={color} size={size} />
          ),
          //   tabBarBadge: 3,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Hospitals"
        component={HospitalList}
        options={{
          tabBarLabel: "Hospitals",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="hospital" color={color} size={size} />
          ),
          //   tabBarBadge: 3,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [signIn, setsignIn] = useState(false);
  useEffect(() => {
    AsyncStorage.getItem("access_key").then((results) => {
      if (results != null) {
        setsignIn(true);
      } else {
        setsignIn(false);
      }
    });
  }, []);
  return (
    <NavigationContainer>
      <StatusBar
        style={Platform.OS === "android" ? "dark" : "dark"}
        backgroundColor="#ffffff"
      />
      <SafeAreaView
        style={{ flex: 1, marginTop: Platform.OS === "android" ? 30 : 0 }}
      >
        <LoginStack />
      </SafeAreaView>
    </NavigationContainer>
  );
}
