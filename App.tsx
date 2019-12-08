import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";

import { AppLoading } from "expo";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import * as Font from "expo-font";
import FontDemoScreen from "./screens/FontDemoScreen";
import LayoutDemoScreen from "./screens/LayoutDemoScreen";
import ButtonsDemoScreen from "./screens/ButtonsDemoScreen";
import TestDatePickerScreen from "./screens/TestDatePickerScreen";

export default class App extends Component<any, any> {
  state = { isAppLoaded: false };

  loadFonts = async () => {
    await Font.loadAsync({
      // Metropolis
      "metropolis-light": require("./assets/fonts/Metropolis-Light.ttf"),
      "metropolis-regular": require("./assets/fonts/Metropolis-Regular.ttf"),
      "metropolis-medium": require("./assets/fonts/Metropolis-Medium.ttf"),
      "metropolis-bold": require("./assets/fonts/Metropolis-Bold.ttf"),
      "metropolis-extrabold": require("./assets/fonts/Metropolis-ExtraBold.ttf"),
      "metropolis-black": require("./assets/fonts/Metropolis-Black.ttf"),

      // Raleway
      "raleway-regular": require("./assets/fonts/Raleway-Regular.otf"),

      // Avenir Next
      "avenirnext-light": require("./assets/fonts/AvenirNext-Regular.ttf"),
      "avenirnext-regular": require("./assets/fonts/AvenirNext-Medium.ttf"),
      "avenirnext-demibold": require("./assets/fonts/AvenirNext-DemiBold.ttf"),
      "avenirnext-bold": require("./assets/fonts/AvenirNext-Bold.ttf"),
      "avenirnext-black": require("./assets/fonts/AvenirNext-Heavy.ttf"),

      // Inter
      "inter-light": require("./assets/fonts/Inter-Light-BETA.otf"),
      "inter-regular": require("./assets/fonts/Inter-Regular.otf"),
      "inter-medium": require("./assets/fonts/Inter-Medium.otf"),
      "inter-semibold": require("./assets/fonts/Inter-SemiBold.otf"),
      "inter-bold": require("./assets/fonts/Inter-Bold.otf"),
      "inter-extrabold": require("./assets/fonts/Inter-ExtraBold.otf"),
      "inter-black": require("./assets/fonts/Inter-Black.otf")
    });
  };

  startAsync = async () => {
    console.log("start");

    await this.loadFonts();
  };

  render() {
    if (!this.state.isAppLoaded) {
      return (
        <AppLoading
          startAsync={this.startAsync}
          onFinish={() => this.setState({ isAppLoaded: true })}
        />
      );
    } else {
      // return <TestFontView />;
      // return <TestResponsiveFontView />;
      // return <FontDemoScreen />;
      // return <LayoutDemoScreen />;
      return <ButtonsDemoScreen />;
      // return <TestDatePickerScreen />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
