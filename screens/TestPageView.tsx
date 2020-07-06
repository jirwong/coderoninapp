import React, { Component } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

import { hp, wp } from "../styles/screen-helper";
import { Colors } from "../styles/colors";

class TestPageView extends Component<any, any> {
  render() {
    return (
      <SafeAreaView style={StyleSheet.absoluteFill}>
        <View style={{ backgroundColor: Colors.Blue000, flex: 1 }}>
          <Text>This is a test</Text>

          <Text>{hp(812)}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default TestPageView;
