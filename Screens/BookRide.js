import React, { Component, useState, useEffect, Fragment } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  TextInput,
  useWindowDimensions,
} from "react-native";
import { Input, Button } from "../Components";
import Checkbox from "expo-checkbox";
import { FontAwesome5 } from "@expo/vector-icons";
import { COLORS, Styles } from "./Styles";
import * as ImagePicker from "expo-image-picker";
import RNPickerDialog from "rn-modal-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from "date-fns";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Card } from "react-native-shadow-cards";
import { IMAGES } from "./Images";
import { api } from "../Constants/Api";
import helpers from "../helper";

export default function BookRide({ navigation }) {
  const [status, requestCameraPermissionsAsync] =
    ImagePicker.useCameraPermissions();
  useEffect(() => {
    // requestCameraPermissionsAsync();
  }, []);
  const { width, height } = useWindowDimensions();
  const [text, setText] = useState("");
  const [pickup, setpickup] = useState({ id: "", name: "" });
  const [dropoff, setdropoff] = useState({ id: "", name: "" });
  const [image, setImage] = useState(null);
  const [isChecked, setChecked] = useState(false);
  const [visibility, setvisibility] = useState(false);
  const [visibilitydropoff, setvisibilitydropoff] = useState(false);
  const pickImage = async () => {
    console.log(status);
    if (status.granted === true) {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result.uri);
      }
    } else {
      alert("camera permission not granted");
    }

    console.log(result);
  };
  const items = [
    {
      id: "1",
      name: "London Heathrow Airport - Terminal 1",
    },
    {
      id: "2",
      name: "London Heathrow Airport - Terminal 2",
    },
    {
      id: "3",
      name: "London Heathrow Airport - Terminal 3",
    },
    {
      id: "4",
      name: "London Heathrow Airport - Terminal 4",
    },
    {
      id: "5",
      name: "London Heathrow Airport - Terminal 5",
    },
    {
      id: "6",
      name: "London Stansted Airport",
    },
    {
      id: "7",
      name: "London City Airport",
    },
    {
      id: "8",
      name: "London Luton Airport",
    },
    {
      id: "9",
      name: "London Gatwick Airport - South Terminal",
    },
    {
      id: "10",
      name: "London Gatwick Airport - North Terminal",
    },
    {
      id: "11",
      name: "Southend Airport",
    },
    {
      id: "12",
      name: "E1 - WHITECHAPEL, MILE END",
    },
    {
      id: "13",
      name: "E2 - Bethnal Green, Hackney",
    },
    {
      id: "14",
      name: "E3 - BOW, BROMLEY-BY-BOW",
    },
    {
      id: "15",
      name: "E4 - CHINGFORD",
    },
    {
      id: "16",
      name: "E5 - CLAPTON",
    },
    {
      id: "17",
      name: "E6 - EAST HAM",
    },
    {
      id: "18",
      name: "E7 - UPTON PARK, FOREST GATE",
    },
    {
      id: "19",
      name: "E8 - HACKNEY, DALSTON",
    },
    {
      id: "20",
      name: "E9 - HACKNEY, HOMORTON",
    },
    {
      id: "21",
      name: "E10 - LEYTON",
    },
    {
      id: "22",
      name: "E11 - LEYTONSTONE",
    },
    {
      id: "23",
      name: "E12 - MANOR PARK",
    },
    {
      id: "24",
      name: "E13 - PLAISTOW",
    },
    {
      id: "25",
      name: "E14 - CANARY WHARF, POPLAR",
    },
    {
      id: "26",
      name: "E15 - STRATFORD",
    },
    {
      id: "27",
      name: "E16 - CANNING TOWN",
    },
    {
      id: "28",
      name: "E17 - WALTHAMSTOW",
    },
    {
      id: "29",
      name: "E18 - SOUTH WOODFORD",
    },
    {
      id: "30",
      name: "E20 - OLYMPIC PARK",
    },
    {
      id: "31",
      name: "E1W - Wapping",
    },
    {
      id: "32",
      name: "EC1 - BARBICAN",
    },
    {
      id: "33",
      name: "EC2 - MOORGATE",
    },
    {
      id: "34",
      name: "EC3 - ALDGATE, TOWER HILL",
    },
    {
      id: "35",
      name: "EC4 - St Paul",
    },
    {
      id: "36",
      name: "WC1 - BLOOMSBURY",
    },
    {
      id: "37",
      name: "WC2 - HOLBORN, COVENT GARDEN, STRAND",
    },
    {
      id: "38",
      name: "N1 - ISLIGNTON",
    },
    {
      id: "39",
      name: "N2 - EAST FINCHLEY",
    },
    {
      id: "40",
      name: "N3 - FINCHLEY CENTRAL",
    },
    {
      id: "41",
      name: "N4 - FINSBURY PARK",
    },
    {
      id: "42",
      name: "N5 - HIGHBURY",
    },
    {
      id: "43",
      name: "N6 - HIGHGATE",
    },
    {
      id: "44",
      name: "N7 - HOLLOWAY",
    },
    {
      id: "45",
      name: "N8 - CROUCH END, HORNSEY",
    },
    {
      id: "46",
      name: "N9 - LOWER EDMONTON",
    },
    {
      id: "47",
      name: "N10 - MUSWELL HILL",
    },
    {
      id: "48",
      name: "N11 - FRIEN BARNET, NEW SOUTHGATE",
    },
    {
      id: "49",
      name: "N12 - NORTH FINCHLEY",
    },
    {
      id: "50",
      name: "N13 - PALMERS GREEN",
    },
    {
      id: "51",
      name: "N14 - SOUTHGATE",
    },
    {
      id: "52",
      name: "N15 - SEVEN SISTERS",
    },
    {
      id: "53",
      name: "N16 - STAMFORD HILL, STOKE NEWINGTON",
    },
    {
      id: "54",
      name: "N17 - TOTTENHAM",
    },
    {
      id: "55",
      name: "N18 - UPPER EDMONTON",
    },
    {
      id: "56",
      name: "N19 - UPPER HOLLOWAY",
    },
    {
      id: "57",
      name: "N20 - TOTTERIDGE & WHETSTONE",
    },
    {
      id: "58",
      name: "N21 - WINCHMORE HILL",
    },
    {
      id: "59",
      name: "N22 - WOOD GREEN, ALEXANDRA PALACE",
    },
    {
      id: "60",
      name: "NW1 - CAMDEN TOWN",
    },
    {
      id: "61",
      name: "NW2 - Cricklewood, Dollis Hill",
    },
    {
      id: "62",
      name: "NW3 - HAMPSTEAD, SWISS COTTAGE",
    },
    {
      id: "63",
      name: "NW4 - HENDON",
    },
    {
      id: "64",
      name: "NW5 - KENTISH TOWN",
    },
    {
      id: "65",
      name: "NW6 - Kilburn, West Hampstead",
    },
    {
      id: "66",
      name: "NW7 - MILL HILL BROADWAY",
    },
    {
      id: "67",
      name: "NW8 - St Johns Wood",
    },
    {
      id: "68",
      name: "NW9 - Colindale, West Hendon, Kingsbury",
    },
    {
      id: "69",
      name: "NW10 - Harlesden, Willesden, North Acton",
    },
    {
      id: "70",
      name: "NW11 - GOLDERS GREEN",
    },
    {
      id: "71",
      name: "SE1 - Southwark, Elephant Castle",
    },
    {
      id: "72",
      name: "SE2 - ABBEY WOOD",
    },
    {
      id: "73",
      name: "SE3 - BLACKHEATH",
    },
    {
      id: "74",
      name: "SE4 - BROCKLEY",
    },
    {
      id: "75",
      name: "SE5 - CAMBERWELL",
    },
    {
      id: "76",
      name: "SE6 - CATFORD",
    },
    {
      id: "77",
      name: "SE7 - CHARLTON",
    },
    {
      id: "78",
      name: "SE8 - DEPTFORD",
    },
    {
      id: "79",
      name: "SE9 - ELTHAM",
    },
    {
      id: "80",
      name: "SE10 - GREENWICH",
    },
    {
      id: "81",
      name: "SE11 - LAMBETH",
    },
    {
      id: "82",
      name: "SE12 -GROVE PARK",
    },
    {
      id: "83",
      name: "SE13 - LEWISHAM",
    },
    {
      id: "84",
      name: "SE14 - NEW CROSS",
    },
    {
      id: "85",
      name: "SE15 - PECKHAM",
    },
    {
      id: "86",
      name: "SE16 - ROTHERHITHE",
    },
    {
      id: "87",
      name: "SE17 - Walworth, Elephant & Castle",
    },
    {
      id: "88",
      name: "SE18 - PLUMSTEAD",
    },
    {
      id: "89",
      name: "SE19 - CRYSTAL PALACE",
    },
    {
      id: "90",
      name: "SE20 - PENGE",
    },
    {
      id: "91",
      name: "SE21 - DULWICH",
    },
    {
      id: "92",
      name: "SE22 - EAST DULWICH",
    },
    {
      id: "93",
      name: "SE23 - FOREST HILL",
    },
    {
      id: "94",
      name: "SE24 - HERNE HILL",
    },
    {
      id: "95",
      name: "SE25 - SOUTH NOORWOOD",
    },
    {
      id: "96",
      name: "SE26 - SYDENHAM",
    },
    {
      id: "97",
      name: "SE27 - TULSE HILL",
    },
    {
      id: "98",
      name: "SE28 - THAMESMEAD",
    },
    {
      id: "99",
      name: "SW1 - VICTORIA, BELGRAVIA, PIMLICO",
    },
    {
      id: "100",
      name: "SW2 - BRIXTON",
    },
    {
      id: "101",
      name: "SW3 - CHELSEA",
    },
    {
      id: "102",
      name: "SW4 - CLAPHAM",
    },
    {
      id: "103",
      name: "SW5 - Earls Court",
    },
    {
      id: "104",
      name: "SW6 - FULHAM BROADWAY",
    },
    {
      id: "105",
      name: "SW7 - SOUTH KENSINGTON",
    },
    {
      id: "106",
      name: "SW8 - South Lambeth, Battersea",
    },
    {
      id: "107",
      name: "SW9 - STOCKWELL",
    },
    {
      id: "108",
      name: "SW10 - WEST BROMPTON",
    },
    {
      id: "109",
      name: "SW11 - CLAPHAM JUNCTION",
    },
    {
      id: "110",
      name: "SW12 - BALHAM",
    },
    {
      id: "111",
      name: "SW13 - BARNES",
    },
    {
      id: "112",
      name: "SW14 - MORTLAKE",
    },
    {
      id: "113",
      name: "SW15 - PUTNEY",
    },
    {
      id: "114",
      name: "SW16 - STREATHAM",
    },
    {
      id: "115",
      name: "SW17 - TOOTING",
    },
    {
      id: "116",
      name: "SW18 - WANDSWORTH",
    },
    {
      id: "117",
      name: "SW19 - WIMBLEDON",
    },
    {
      id: "118",
      name: "SW20 - SOUTH WIMBLEDON",
    },
    {
      id: "119",
      name: "W1 - Marble Arch, Soho, Marylebone, Mayfair",
    },
    {
      id: "120",
      name: "W2 - PADDINGTON",
    },
    {
      id: "121",
      name: "W3 - Acton",
    },
    {
      id: "122",
      name: "W4 - Chiswick",
    },
    {
      id: "123",
      name: "W5 - Ealing",
    },
    {
      id: "124",
      name: "W6 - Hammersmith",
    },
    {
      id: "125",
      name: "W7 - Hanwell",
    },
    {
      id: "126",
      name: "W8 - Kensington",
    },
    {
      id: "127",
      name: "W9 - Maida Vale",
    },
    {
      id: "128",
      name: "W10 - Ladbroke Grove",
    },
    {
      id: "129",
      name: "W11 - Notting Hill, Bayeswater",
    },
    {
      id: "130",
      name: "W12 - Shepherds Bush",
    },
    {
      id: "131",
      name: "W13 - West Ealing",
    },
    {
      id: "132",
      name: "W14 - West Kensington, Olympia",
    },
    {
      id: "133",
      name: "IG1 - ILFORD",
    },
    {
      id: "134",
      name: "IG8 - Woodford Green",
    },
    {
      id: "135",
      name: "HA7 - Stanmore",
    },
    {
      id: "136",
      name: "CM1 - Chelmsford",
    },
    {
      id: "137",
      name: "CM9 - Maldon",
    },
    {
      id: "138",
      name: "EN1 - ENFIELD",
    },
    {
      id: "139",
      name: "EN2 - ENFIELD",
    },
    {
      id: "140",
      name: "SS0 - Southend-on-Sea",
    },
    {
      id: "141",
      name: "SS1 - Southend-on-Sea",
    },
    {
      id: "142",
      name: "SS2 - Southend-on-Sea",
    },
    {
      id: "143",
      name: "SS3 - Southend-on-Sea",
    },
    {
      id: "144",
      name: "SS9 - Leigh-on-Sea",
    },
    {
      id: "145",
      name: "SS7 - Benfleet",
    },
    {
      id: "146",
      name: "SS17 - Stanford-le-Hope",
    },
    {
      id: "147",
      name: "BR2 - Bromley",
    },
    {
      id: "148",
      name: "DA1 - Dartford",
    },
    {
      id: "149",
      name: "DA2 - Dartford",
    },
    {
      id: "150",
      name: "DA7 - Bexleyheath",
    },
    {
      id: "151",
      name: "DA11 - Gravesend",
    },
    {
      id: "152",
      name: "RM1 - Romford",
    },
    {
      id: "153",
      name: "RM2 - Romford",
    },
    {
      id: "154",
      name: "RM3 - Romford",
    },
    {
      id: "155",
      name: "RM9 - Dagenham",
    },
  ];
  //const [serverData, setServerData] = useState(items);
  const [timefordp, setTimedp] = useState(new Date());

  const [time, settime] = useState(null);
  const [showtime, setShowtime] = useState(false);
  
  const onChange = (event, selectedDate) => {
    setShowtime(false);
    const currentDate = selectedDate || date;
    setTimedp(currentDate);
    let timee = format(currentDate, "HH:mm:ss");
    console.log(timee);
    settime(timee);
  };

  // const [timefordp, setTimedp] = useState(new Date(1598051730000));
  const [datefordp, setdatedp] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [datemain, setdatemain] = useState(null);
  const [showdate, setShowDate] = useState(false);
  const onChangedate = (event, selectedDate) => {
    setShowDate(false);
    //   console.log(selectedDate);
    const currentDate = selectedDate || date;
    setdatedp(currentDate);
    let datee = format(currentDate, "dd-MM-yyyy");
    //  console.log(datee);
    setdatemain(datee);
  };

  useEffect(() => {
    getCarData();
    AsyncStorage.getItem("access_key").then((results) => {
      //   console.log(results);
    });
    AsyncStorage.getItem("user").then((results) => {
      //  console.log(JSON.parse(results));
    });
  }, []);

  const [carfinalarray, setcarfinalarray] = useState([]);
  const [selectedcar, setselectedcar] = useState(null);
  const [carData, setcarData] = useState(null);
  // const carData = {
  //   0: {
  //     id: "1",
  //     name: "Saloon",
  //     passanger_capacity: "4",
  //     begs_upto_20kg: "2",
  //     begs_upto_5kg: "2",
  //     image: "Yolo_Ride_saloon.png",
  //     deascription:
  //       "Standard Saloon / Green Cars Suitable For Very Small Family",
  //     status: "active",
  //     set_price: "1",
  //     vehicle_type_id: "1",
  //     fee: "0.00",
  //   },
  //   1: {
  //     id: "2",
  //     name: "Estate",
  //     passanger_capacity: "4",
  //     begs_upto_20kg: "3",
  //     begs_upto_5kg: "3",
  //     image: "Yolo_Ride_estate.png",
  //     deascription: "Station Wagon / Estate Cars Suits To Medium Size Family",
  //     status: "active",
  //     set_price: "0",
  //     vehicle_type_id: "2",
  //     fee: "6.00",
  //   },
  //   2: {
  //     id: "3",
  //     name: "MPV",
  //     passanger_capacity: "5",
  //     begs_upto_20kg: "4",
  //     begs_upto_5kg: "3",
  //     image: "Yolo_Ride_MPVs.png",
  //     deascription:
  //       "Standard Family Car for Airport Runs Or City Nights Out with Friends",
  //     status: "active",
  //     set_price: "0",
  //     vehicle_type_id: "3",
  //     fee: "12.00",
  //   },
  //   5: {
  //     id: "6",
  //     name: "Executive",
  //     passanger_capacity: "3",
  //     begs_upto_20kg: "2",
  //     begs_upto_5kg: "1",
  //     image: "Yolo_Ride_executive.png",
  //     deascription:
  //       "Ultimate Business Class Experience, Arrive At Your Destination Style ",
  //     status: "active",
  //     set_price: "0",
  //     vehicle_type_id: "6",
  //     fee: "22.00",
  //   },
  //   6: {
  //     id: "7",
  //     name: "7 Seater",
  //     passanger_capacity: "6",
  //     begs_upto_20kg: "4",
  //     begs_upto_5kg: "4",
  //     image: "Yolo_Ride_7 Seater.png",
  //     deascription:
  //       " It is the best Luxurious Business car that suits your personality.",
  //     status: "active",
  //     set_price: "0",
  //     vehicle_type_id: "7",
  //     fee: "22.00",
  //   },
  //   7: {
  //     id: "8",
  //     name: "8 Seater",
  //     passanger_capacity: "8",
  //     begs_upto_20kg: "8",
  //     begs_upto_5kg: "6",
  //     image: "Yolo_Ride_8_Seater.png",
  //     deascription:
  //       " It is the best Luxurious Business car that suits your personality.",
  //     status: "active",
  //     set_price: "0",
  //     vehicle_type_id: "8",
  //     fee: "36.00",
  //   },
  // };

  function getCarData() {
    fetch(api.getCarData, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        return response.text();
      })
      .then(function (result_) {
        if (helpers.isJson(result_)) {
          const result = JSON.parse(result_);

          if (result.status === true) {
            setcarData(result.data);
          } else {
            alert(result.message);
          }
        }
      })
      .catch(function (error) {
        console.log("--------  error ------- " + error);
      });
  }

  useEffect(() => {
    let emptyarray = [];
    if (carData != null) {
      for (var prop in carData) {
        emptyarray.push(carData[prop]);
      }
      setcarfinalarray(emptyarray);
    }
  }, [carData]);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView
        contentContainerStyle={{
          // flexGrow: 1,
          paddingVertical: 20,
          backgroundColor: "white",
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginHorizontal: width * 0.05 }}>
          <Text style={styles.heading}>Booking Date:</Text>
          <TouchableOpacity onPress={() => setShowDate(true)}>
            <Input
              editable={false}
              value={datemain}
              placeholder="Enter Date"
              borderless
              iconContent={
                <FontAwesome5
                  size={16}
                  color={COLORS.primary}
                  name="calendar-day"
                  style={Styles.inputIcon}
                />
              }
            />
          </TouchableOpacity>
          {showdate && (
            <DateTimePicker
              testID="dateTimePicker"
              value={datefordp}
              mode={"date"}
              display="default"
              onChange={onChangedate}
            />
          )}
          {/* <Input
            placeholder="Enter Date"
            borderless
            iconContent={
              <FontAwesome5
                size={16}
                color={COLORS.primary}
                name="calendar-day"
                style={Styles.inputIcon}
              />
            }
          /> */}
          <Text style={styles.heading}>Booking Time:</Text>
          <TouchableOpacity onPress={() => setShowtime(true)}>
            <Input
              editable={false}
              //  onChangeText={setText}
              value={time}
              placeholder="Enter Time"
              borderless
              iconContent={
                <FontAwesome5
                  size={16}
                  color={COLORS.primary}
                  name="clock"
                  style={Styles.inputIcon}
                />
              }
            />
          </TouchableOpacity>
          {showtime && (
            <DateTimePicker
              //     testID="dateTimePicker"
              value={timefordp}
              mode={"time"}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
          {/* <Input
            //    onChangeText={setText}
            //    value={text}
            placeholder="Enter Time"
            borderless
            iconContent={
              <FontAwesome5
                size={16}
                color={COLORS.primary}
                name="clock"
                style={Styles.inputIcon}
              />
            }
          /> */}
          <Text style={styles.heading}>Pick Up Location:</Text>
          {visibility && (
            <RNPickerDialog
              data={items}
              pickerTitle={"Select Pick Up"}
              showSearchBar={true}
              showPickerTitle={true}
              selectedText={pickup.name}
              searchBarPlaceHolder={"Search....."}
              searchBarPlaceHolderColor={"#9d9d9d"}
              placeHolderTextColor={"grey"}
              selectedValue={(index, item) => {
                setpickup(item), setvisibility(false);
              }}
              onRequestClose={() => setvisibility(false)}
            />
          )}
          <TouchableOpacity onPress={() => setvisibility(true)}>
            <Input
              editable={false}
              //  onChangeText={setText}
              value={pickup.name}
              placeholder="Select Pick Up"
              borderless
              iconContent={
                <FontAwesome5
                  size={16}
                  color={COLORS.primary}
                  name="location-arrow"
                  style={Styles.inputIcon}
                />
              }
              //location-arrow
            />
          </TouchableOpacity>
          <Text style={styles.heading}>Drop Off Location:</Text>
          {visibilitydropoff && (
            <RNPickerDialog
              data={items}
              pickerTitle={"Select Drop Off"}
              showSearchBar={true}
              showPickerTitle={true}
              selectedText={dropoff.name}
              searchBarPlaceHolder={"Search....."}
              searchBarPlaceHolderColor={"#9d9d9d"}
              placeHolderTextColor={"grey"}
              selectedValue={(index, item) => {
                setdropoff(item), setvisibilitydropoff(false);
              }}
              onRequestClose={() => setvisibilitydropoff(false)}
            />
          )}
          <TouchableOpacity onPress={() => setvisibilitydropoff(true)}>
            <Input
              editable={false}
              //  onChangeText={setText}
              value={dropoff.name}
              placeholder="Select Drop Off"
              borderless
              iconContent={
                <FontAwesome5
                  size={16}
                  color={COLORS.primary}
                  name="location-arrow"
                  style={Styles.inputIcon}
                />
              }
              //location-arrow
            />
          </TouchableOpacity>
          <Text style={styles.heading}>Select Car:</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={carfinalarray}
            renderItem={({ item, index }) => (
              <Card
                elevation={Platform.OS === "ios" ? 2.5 : 5}
                style={[
                  Styles.itemContainer,
                  {
                    width: width * 0.4,
                    paddingVertical: 10,
                    margin: 10,
                    backgroundColor:
                      selectedcar && selectedcar.id === item.id
                        ? "rgba(10, 186, 181,0.2)"
                        : "white",
                    justifyContent: "center",
                  },
                ]}
              >
                <TouchableOpacity onPress={() => setselectedcar(item)}>
                  <View
                    style={{
                      flexDirection: "column",
                      width: width * 0.25,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      style={{ height: height * 0.05, width: width * 0.15 }}
                      resizeMode="contain"
                      source={{
                        uri: IMAGES.imageMain + item.image,
                      }}
                    />
                    <Text style={[Styles.wallet, { color: "grey" }]}>
                      {item.name}
                    </Text>
                    <View
                      style={{
                        flexDirection: "column",
                        width: width * 0.3,
                        paddingTop: 5,
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginVertical: 3,
                        }}
                      >
                        <View
                          style={{ alignItems: "center", flexDirection: "row" }}
                        >
                          <FontAwesome5
                            size={16}
                            color={COLORS.grey}
                            name="user-alt"
                          />
                          <Text
                            style={[
                              Styles.wallet,
                              { color: "grey", fontSize: 12 },
                            ]}
                          >
                            {" x"}
                            {item.passanger_capacity}
                          </Text>
                        </View>

                        <Text
                          style={[
                            Styles.wallet,
                            { color: "grey", fontSize: 10 },
                          ]}
                        >
                          Passenger
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginVertical: 3,
                        }}
                      >
                        <View
                          style={{ alignItems: "center", flexDirection: "row" }}
                        >
                          <FontAwesome5
                            size={16}
                            color={COLORS.grey}
                            name="briefcase"
                          />
                          <Text
                            style={[
                              Styles.wallet,
                              { color: "grey", fontSize: 12 },
                            ]}
                          >
                            {" x"}
                            {item.passanger_capacity}
                          </Text>
                        </View>

                        <Text
                          style={[
                            Styles.wallet,
                            { color: "grey", fontSize: 10 },
                          ]}
                        >
                          Bag Up to 20 Kg
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginVertical: 3,
                        }}
                      >
                        <View
                          style={{
                            alignItems: "center",
                            flexDirection: "row",
                          }}
                        >
                          <FontAwesome5
                            size={16}
                            color={COLORS.grey}
                            name="shopping-bag"
                          />
                          <Text
                            style={[
                              Styles.wallet,
                              { color: "grey", fontSize: 12 },
                            ]}
                          >
                            {" x"}
                            {item.passanger_capacity}
                          </Text>
                        </View>

                        <Text
                          style={[
                            Styles.wallet,
                            { color: "grey", fontSize: 10 },
                          ]}
                        >
                          Bag Up to 05 Kg
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </Card>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
          <Text style={styles.heading}>Email:</Text>
          <Input
            placeholder="Enter Email"
            borderless
            iconContent={
              <FontAwesome5
                size={16}
                color={COLORS.primary}
                name="envelope"
                style={Styles.inputIcon}
              />
            }
          />
          <Button
            center
            color={COLORS.primary}
            style={{ width: width * 0.9, marginTop: 20 }}
          >
            PROCEED
          </Button>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
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
    marginVertical: 5,
    fontSize: 22,
    color: COLORS.primary,
    fontWeight: "bold",
  },
  heading: {
    color: COLORS.primary,
    marginTop: 5,
    marginBottom: 10,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  description: {
    textAlign: "justify",
    marginBottom: 5,
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
    marginVertical: 20,
    //marginHorizontal: 30,
    width: "100%",
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
  section: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 2,
    flexWrap: "wrap",
  },
  paragraph: {
    fontSize: 15,
    color: "#696969",
    paddingLeft: 5,
  },
  checkbox: {
    marginRight: 8,
    marginVertical: 2,
  },
});
