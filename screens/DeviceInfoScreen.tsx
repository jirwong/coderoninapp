import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Dimensions,
  Button,
  PixelRatio,
  ScrollView
} from "react-native";

import { fc, f, bg, fw } from "../styles/cr-styles";

import * as Fonts from "@expo/vector-icons";

import { hp, wp } from "../styles/screen-helper";

function Spacer({ padding = 10 }) {
  return <View style={{ paddingTop: padding }} />;
}

class DeviceInfoScreen extends Component<any, any> {
  state = {
    safeAreaViewLayout: { height: 0, width: 0, x: 0, y: 0 },
    flexedView: { height: 0, width: 0, x: 0, y: 0 }
  };

  _onSafeAreaViewLayout = e => {
    const { layout } = e.nativeEvent;
    this.setState({ safeAreaViewLayout: layout });
  };

  render() {
    const statusBarHeight = StatusBar.currentHeight;

    const deviceWidth = Dimensions.get("window").width;
    const deviceHeight = Dimensions.get("window").height;

    const screenWidth = Dimensions.get("screen").width;
    const screenHeight = Dimensions.get("screen").height;

    return (
      <SafeAreaView
        style={[StyleSheet.absoluteFill]}
        onLayout={this._onSafeAreaViewLayout}
      >
        <ScrollView style={[{ paddingHorizontal: 19, flex: 1 }, bg.white]}>
          <Text style={[f.s22, fw.bold]}>Device Info</Text>

          {/* Device Dimensions */}
          <Spacer padding={20} />
          <Text style={[f.s17, fw.bold]}>Device Dimensions</Text>
          <Spacer />
          <Text style={[f.s17]}>Width - {deviceWidth}</Text>
          <Text style={[f.s17]}>Height - {deviceHeight}</Text>
          <Spacer padding={20} />

          {/* Screen Dimensions */}
          <Text style={[f.s17, fw.bold]}>Screen Dimensions</Text>
          <Spacer />
          <Text style={[f.s17]}>Width - {screenWidth}</Text>
          <Text style={[f.s17]}> Height - {screenHeight}</Text>
          <Spacer padding={20} />

          {/* Safe Area View Dimensions */}
          <Text style={[f.s17, fw.bold]}>Safe Area View Dimensions</Text>
          <Spacer />

          <Text style={[f.s17]}>
            Width - {this.state.safeAreaViewLayout.width}
          </Text>
          <Text style={[f.s17]}>
            {" "}
            Height - {this.state.safeAreaViewLayout.height}
          </Text>
          <Spacer padding={20} />

          {/* Pixel Ratio */}
          <Text style={[f.s17, fw.bold]}>Actual Screen Resolutions</Text>
          <Text style={[f.s17]}>Pixel Ratio - {PixelRatio.get()}</Text>
          <Text style={[f.s17]}>
            Actual Screen Height - {PixelRatio.get() * screenHeight}
          </Text>
          <Text style={[f.s17]}>
            Actual Screen Width - {PixelRatio.get() * screenWidth}
          </Text>
          <Text style={[f.s17]}>
            Actual Device Height - {PixelRatio.get() * deviceHeight}
          </Text>
          <Text style={[f.s17]}>
            Actual Device Width - {PixelRatio.get() * deviceWidth}
          </Text>
          <Spacer padding={20} />

          {/* Status Bar Heights  */}
          <Text style={[f.s17, fw.bold]}>Status Bar Info</Text>
          <Text style={[f.s17]}>
            Status Bar Height - {StatusBar.currentHeight}
          </Text>

          <Spacer padding={20} />
          <Text style={[f.s17, fw.bold]}>Responsive Resolutions</Text>
          <Text style={[f.s17]}>wp(375) = {wp(375)}</Text>
          <Text style={[f.s17]}>hp(812) = {hp(812)}</Text>
  
          <Spacer padding={400} />
          
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default DeviceInfoScreen;
