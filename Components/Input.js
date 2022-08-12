import React from "react";
import { StyleSheet } from "react-native";
import { Input } from "galio-framework";
import { FontAwesome5 } from "@expo/vector-icons";

class InputField extends React.Component {
  render() {
    const { shadowless, success, error, multiline } = this.props;

    const inputStyles = [
      styles.input,
      !shadowless && styles.shadow,
      success && styles.success,
      error && styles.error,
      multiline && styles.shadowmultiline,
      { ...this.props.style },
    ];

    return (
      <Input
        placeholder="write something here"
        placeholderTextColor={"#c7c7c7"}
        style={inputStyles}
        color={"black"}
        iconContent={<FontAwesome5 size={14} />}
        {...this.props}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 17,
    //   borderColor: argonTheme.COLORS.BORDER,
    height: 44,
    backgroundColor: "#FFFFFF",
    elevation: 5,
  },
  success: {
    //   borderColor: argonTheme.COLORS.INPUT_SUCCESS,
  },
  error: {
    //   borderColor: argonTheme.COLORS.INPUT_ERROR,
    borderWidth: 1,
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.2,
    elevation: 3,
    borderRadius: 15,
  },
  shadowmultiline: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.2,
    elevation: 3,
    borderRadius: 5,
    height: 80,
    paddingTop: 10,
    alignItems: "flex-start",
  },
});

export default InputField;
