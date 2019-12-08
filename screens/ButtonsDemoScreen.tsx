import React, { Component } from "react";
import { View, Text, Dimensions, Image, ScrollView } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { fontFamilies, TextStyles } from "../styles/font-styles";

const sampleObject = require("../assets/images/sample-object.png");

function pxToHp(px) {
  return hp((px / Dimensions.get("screen").height) * 100);
}

function pxToWp(px) {
  return wp((px / Dimensions.get("screen").width) * 100);
}

class ButtonsDemoScreen extends Component<any, any> {
  render() {
    console.log(wp(5));

    return (
      <ScrollView
        style={{
          // marginTop: pxToHp(40),
          // marginBottom: pxToHp(40),
          paddingTop: hp(6),
          paddingBottom: hp(6),
          marginHorizontal: pxToWp(19),
          // backgroundColor: "red",
          flex: 1
          // justifyContent: "space-between"
        }}
        contentContainerStyle={{ justifyContent: "space-between", flex: 1 }}
      >
        <View>
          <View
            style={{
              paddingVertical: hp(1),
              flexDirection: "row",
              // justifyContent: "space-between",
              alignItems: "flex-start"
            }}
          >
            <View style={{ flex: 1 }}>
              <Text
                style={[
                  TextStyles.Body,
                  { fontFamily: fontFamilies.Inter_SemiBold, color: "#0F609B" }
                ]}
              >
                Back
              </Text>
            </View>
            <View style={{ flex: 3, alignItems: "center" }}>
              <Text
                style={[
                  TextStyles.Body,
                  { fontFamily: fontFamilies.Inter_SemiBold }
                ]}
              >
                The quick brown fox
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Text>
                <MaterialCommunityIcons name="dots-horizontal" size={18} />
              </Text>
            </View>
          </View>
          <View
            style={{
              height: hp(20),
              backgroundColor: "red",
              alignItems: "flex-start"
            }}
          >
            <Image
              source={sampleObject}
              resizeMode={"cover"}
              style={{ width: "100%", height: hp(20) }}
            />
          </View>
          <View
            style={{
              // backgroundColor: "green"
              paddingVertical: pxToHp(10),
              paddingHorizontal: pxToWp(9)
            }}
          >
            <Text
              style={[
                TextStyles.Caption2,
                { fontFamily: fontFamilies.Inter_SemiBold, color: "#7E7E7E" }
              ]}
            >
              PUBLISHED ON 5 SEPT 2019
            </Text>
          </View>

          <View>
            <Text
              style={[TextStyles.Callout, { paddingHorizontal: pxToWp(9) }]}
            >
              Had a great day at the park today! Didn’t expect to see such a hot
              sun in the spring time, but such a beauty to behold against the
              beautiful mountain scapes...
            </Text>
          </View>
          <View
            style={{ paddingHorizontal: pxToWp(5), paddingTop: pxToHp(20) }}
          >
            <View
              style={{
                backgroundColor: "#CECECE",
                paddingTop: TextStyles.Body.fontSize / 2,
                paddingBottom: TextStyles.Body.fontSize / 2,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10
              }}
            >
              <Text
                style={[
                  TextStyles.Footnote,
                  { fontFamily: fontFamilies.Inter_Bold }
                ]}
              >
                READ MORE
              </Text>
            </View>
          </View>
          <View style={{ paddingTop: pxToHp(20), paddingHorizontal: wp(2.5) }}>
            <Text
              style={[
                TextStyles.Caption1,
                { fontFamily: fontFamilies.Inter_Bold, color: "#7E7E7E" }
              ]}
            >
              COMMENTS
            </Text>
          </View>
        </View>
        <View>
          <View
            style={{
              borderWidth: 2,
              borderColor: "#0F609B",
              alignItems: "center",
              // height: pxToHp(50),
              paddingTop: TextStyles.Body.fontSize / 2,
              paddingBottom: TextStyles.Body.fontSize / 2,
              justifyContent: "center",
              borderRadius: 10
            }}
          >
            <Text
              style={[
                TextStyles.Body,
                { fontFamily: fontFamilies.Inter_SemiBold, color: "#0F609B" }
              ]}
            >
              Mark for moderation
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default ButtonsDemoScreen;
