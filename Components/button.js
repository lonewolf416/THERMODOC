import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import PropTypes from "prop-types";
import { Button } from "galio-framework";
import { COLORS } from "../Screens/Styles";

class ArButton extends React.Component {
  render() {
    const { small, shadowless, children, color, style, ...props } = this.props;

    const colorStyle = color;

    const buttonStyles = [
      small && styles.smallButton,
      color && { backgroundColor: colorStyle },
      !shadowless && styles.shadow,
      { ...style },
    ];

    return (
      <Button
        style={buttonStyles}
        shadowless
        textStyle={{ fontSize: 12, fontWeight: "700" }}
        {...props}
      >
        {children}
      </Button>
    );
  }
}

const styles = StyleSheet.create({
  smallButton: {
    width: 75,
    height: 28,
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 3,
    // backgroundColor: COLORS.primary,
    margin: 0,
    padding: 0,
    marginVertical: 10,
    alignSelf: "center",
    borderRadius: 15,
  },
});

export default ArButton;
