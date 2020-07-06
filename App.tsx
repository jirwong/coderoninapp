import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";

import { AppLoading } from "expo";

import * as Font from "expo-font";
import FontDemoScreen from "./screens/archived/FontDemoScreen";
import LayoutDemoScreen from "./screens/archived/LayoutDemoScreen";
import ButtonsDemoScreen from "./screens/archived/ButtonsDemoScreen";
import TestDatePickerScreen from "./screens/archived/TestDatePickerScreen";
import TestTextInputScreen from "./screens/archived/TestTextInputScreen";
import BookingListingScreen from "./screens/BookingListingScreen";
import DeviceInfoScreen from "./screens/DeviceInfoScreen";
import TestPageView from "./screens/TestPageView";

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
      // return <ButtonsDemoScreen />;
      // return <TestDatePickerScreen />;
      // return <TestTextInputScreen />;
      // return <TestLayoutScreen />;
      // return <TestFakerScreen />;
      // return <BookingListingScreen />;
      return <DeviceInfoScreen />;
      // return <TestPageView />;
    }
  }
}
