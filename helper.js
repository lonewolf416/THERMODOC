import React, { Component } from "react";

class helpers extends Component {
  static isJson(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }
}
export default helpers;
