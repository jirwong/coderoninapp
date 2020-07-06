import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TextInput,
  ScrollView
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
// import { fontFamilies } from "../../styles/font-styles";

function pxToHp(px) {
  // console.log("px = " + px);
  // console.log("height = " + Dimensions.get("screen").height);
  console.log("hp" + hp((px / 812) * 100));
  return hp((px / 812) * 100);
}

function pxToWp(px) {
  // console.log(wp((px / 375) * 100));

  return wp((px / 375) * 100);
}

class TestTextInputScreen extends Component<any, any> {
  render() {
    return (
      <SafeAreaView style={{ marginHorizontal: pxToWp(20), height: "100%" }}>
        {/*<ScrollView style={{ flex: 1 }}>*/}
        {/*  <View style={{ marginTop: pxToHp(50) }}>*/}
        {/*    <Text*/}
        {/*      style={{*/}
        {/*        fontFamily: fontFamilies.Inter_Bold,*/}
        {/*        fontSize: pxToHp(28),*/}
        {/*        color: "#0E2A43"*/}
        {/*      }}*/}
        {/*    >*/}
        {/*      My Personal Details*/}
        {/*    </Text>*/}
        {/*  </View>*/}
        
        {/*  <View style={{ marginTop: pxToHp(30) }}>*/}
        {/*    <Text*/}
        {/*      style={{*/}
        {/*        fontFamily: fontFamilies.Inter_Bold,*/}
        {/*        fontSize: pxToHp(13),*/}
        {/*        color: "#243B53",*/}
        {/*        marginBottom: pxToHp(10)*/}
        {/*      }}*/}
        {/*    >*/}
        {/*      FIRST NAME*/}
        {/*    </Text>*/}
        
        {/*    <TextInput*/}
        {/*      placeholder="First Name..."*/}
        {/*      placeholderTextColor="#8299B1"*/}
        {/*      style={{*/}
        {/*        fontFamily: fontFamilies.Inter_Regular,*/}
        {/*        fontSize: pxToHp(17),*/}
        {/*        */}
        {/*        borderWidth: 1,*/}
        {/*        borderColor: "#BDCCDC",*/}
        {/*        borderRadius: 6,*/}
        {/*        paddingVertical: pxToHp(10),*/}
        {/*        paddingHorizontal: pxToWp(10)*/}
        {/*      }}*/}
        {/*    />*/}
        {/*  </View>*/}
        
        {/*  <View style={{ marginTop: pxToHp(40) }}>*/}
        {/*    <Text*/}
        {/*      style={{*/}
        {/*        fontFamily: fontFamilies.Inter_Bold,*/}
        {/*        fontSize: pxToHp(13),*/}
        {/*        color: "#243B53",*/}
        {/*        marginBottom: pxToHp(10)*/}
        {/*      }}*/}
        {/*    >*/}
        {/*      LAST NAME*/}
        {/*    </Text>*/}
        {/*    <TextInput*/}
        {/*      placeholder="Last Name..."*/}
        {/*      placeholderTextColor="#8299B1"*/}
        {/*      style={{*/}
        {/*        fontFamily: fontFamilies.Inter_Regular,*/}
        {/*        fontSize: pxToHp(17),*/}
        {/*        borderWidth: 1,*/}
        {/*        borderColor: "#BDCCDC",*/}
        {/*        borderRadius: 6,*/}
        {/*        paddingVertical: pxToHp(10),*/}
        {/*        paddingHorizontal: pxToHp(10)*/}
        {/*      }}*/}
        {/*    />*/}
        {/*  </View>*/}
        
        {/*  <View style={{ marginTop: pxToHp(30) }}>*/}
        {/*    <Text*/}
        {/*      style={{*/}
        {/*        fontFamily: fontFamilies.Inter_SemiBold,*/}
        {/*        fontSize: pxToHp(13),*/}
        {/*        color: "#243B53",*/}
        {/*        marginBottom: pxToHp(10)*/}
        {/*      }}*/}
        {/*    >*/}
        {/*      EMAIL ADDRESS*/}
        {/*    </Text>*/}
        {/*    <TextInput*/}
        {/*      placeholder="Enter your email here."*/}
        {/*      placeholderTextColor="#8299B1"*/}
        {/*      style={{*/}
        {/*        fontFamily: fontFamilies.Inter_Regular,*/}
        {/*        fontSize: pxToHp(17),*/}
        {/*        borderWidth: 1,*/}
        {/*        borderColor: "#BDCCDC",*/}
        {/*        borderRadius: 6,*/}
        {/*        paddingVertical: pxToWp(10),*/}
        {/*        paddingHorizontal: pxToWp(10)*/}
        {/*      }}*/}
        {/*    />*/}
        
        {/*    <Text*/}
        {/*      style={{*/}
        {/*        marginTop: pxToHp(5),*/}
        {/*        fontFamily: fontFamilies.Inter_Regular,*/}
        {/*        fontSize: pxToHp(13),*/}
        {/*        color: "#344E68"*/}
        {/*      }}*/}
        {/*    >*/}
        {/*      This will be shown in{" "}*/}
        {/*      <Text style={{ fontFamily: fontFamilies.Inter_Bold }}>*/}
        {/*        GoodHuman*/}
        {/*      </Text>{" "}*/}
        {/*      as your display name.*/}
        {/*    </Text>*/}
        {/*  </View>*/}
        
        {/*  /!*<View style={{ marginTop: pxToHp(20) }}>*!/*/}
        {/*  /!*  <Text>WP of 10 logical pixels = {pxToHp(10)}</Text>*!/*/}
        {/*  /!*  <Text>HP of 10 logical pixels = {pxToWp(10)}</Text>*!/*/}
        {/*  /!*  <Text>Test = {hp(1.23)}</Text>*!/*/}
        {/*  /!*</View>*!/*/}
        {/*</ScrollView>*/}
      </SafeAreaView>
    );
  }
}

export default TestTextInputScreen;
