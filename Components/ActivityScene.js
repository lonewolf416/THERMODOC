import React from "react";
import { View, Dimensions, Image } from "react-native";
import LottieLoader from "react-native-lottie-loader";

export default class ActivityScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  componentDidMount() {
    //const context = this;
  }

  render() {
    //  const { visible } = this.state;
    const Logo = require("../assets/animation.json");
    const windowHeight = Dimensions.get("window").height;
    const windowWidth = Dimensions.get("window").width;

    return (
      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <LottieLoader
          visible={true}
          source={Logo}
          autoSize={true}
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        />
      </View>
    );
  }
}
