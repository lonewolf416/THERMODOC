import { Image, Text, View, useWindowDimensions } from "react-native";
import React from "react";
import { COLORS } from "./Styles";
import Onboarding from "react-native-onboarding-swiper";
import { Input, Button } from "../Components";

const OnBoarding = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={{ flex: 1 }}>
      <Onboarding
        style={{ height: height * 0.7 }}
        showNext={false}
        showSkip={false}
        bottomBarHighlight={false}
        onDone={() => console.log("done")}
        imageContainerStyles={{ bottom: 50 }}
        titleStyles={{
          bottom: 200,
          color: "black",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
        subTitleStyles={{
          bottom: 200,
          color: "black",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
        pages={[
          {
            backgroundColor: "white",
            image: (
              <Image
                source={{
                  uri: "https://www.thermodoc.com.ng/newpage/assets/img/loglo.png",
                }}
                style={{ width: "50%", height: "50%" }}
                resizeMode={"contain"}
              />
            ),
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },
          {
            backgroundColor: "white",
            image: (
              <Image
                source={{
                  uri: "https://www.thermodoc.com.ng/newpage/assets/img/loglo.png",
                }}
                style={{ width: "50%", height: "50%" }}
                resizeMode={"contain"}
              />
            ),
            title: "The Title",
            subtitle: "This is the subtitle that sumplements the title.",
          },
          {
            backgroundColor: "white",
            image: (
              <Image
                source={{
                  uri: "https://www.thermodoc.com.ng/newpage/assets/img/loglo.png",
                }}
                style={{ width: "50%", height: "50%" }}
                resizeMode={"contain"}
              />
            ),
            title: "Triangle",
            subtitle: "Beautiful, isn't it?",
          },
        ]}
      />
      <View
        style={{
          height: height * 0.3,
          backgroundColor: "#00496d",
          flexDirection: "row",
          justifyContent: "space-around",
          paddingHorizontal: "15%",
        }}
      >
        <Button
          center
          color={"#5ec9f7"}
          style={{ width: width * 0.3 }}
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Button>
        <Button
          center
          color={COLORS.white}
          style={{ width: width * 0.3 }}
          onPress={() => navigation.navigate("Sign Up Select")}
        >
          <Text style={{ color: COLORS.primary }}>Sign Up</Text>
        </Button>
      </View>
    </View>
  );
};

export default OnBoarding;
