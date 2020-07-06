import React, { Component } from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
// import { TextStyles, fontFamilies } from "@styles/font-styles";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";

const welcomeImg = require("../../assets/images/welcome.png");

const padding_medium = wp(2.5);

class LayoutDemoScreen extends Component<any, any> {
  render() {
    return (
      <SafeAreaView style={{ paddingTop: hp(10), height: "100%" }}>
        {/*<View style={{ flex: 1, justifyContent: "center" }}>*/}
        {/*  <Image*/}
        {/*    source={welcomeImg}*/}
        {/*    style={{ width: wp(100), height: hp(33) }}*/}
        {/*    resizeMode={"contain"}*/}
        {/*  />*/}
        
        {/*  <Text*/}
        {/*    style={[*/}
        {/*      TextStyles.Title2,*/}
        {/*      {*/}
        {/*        // fontFamily: fontFamilies.Metropolis_Bold,*/}
        {/*        // fontFamily: fontFamilies.Inter_Black,*/}
        {/*        fontFamily: fontFamilies.Inter_ExtraBold,*/}
        {/*        paddingHorizontal: wp(3.5)*/}
        {/*      }*/}
        {/*    ]}*/}
        {/*  >*/}
        {/*    Welcome to GoodHuman*/}
        {/*  </Text>*/}
        
        {/*  <Text*/}
        {/*    style={[*/}
        {/*      TextStyles.Body,*/}
        {/*      {*/}
        {/*        fontFamily: fontFamilies.Inter_Regular,*/}
        {/*        paddingTop: hp(2.5),*/}
        {/*        paddingHorizontal: wp(3.5),*/}
        {/*        // letterSpacing: 0 - TextStyles.Body.fontSize * 0.01 * 2*/}
        {/*      }*/}
        {/*    ]}*/}
        {/*  >*/}
        {/*    Track your NDIS payments, get organised, and manage your life easier*/}
        {/*    today.*/}
        {/*    {0 - TextStyles.Body.fontSize * 0.1}*/}
        {/*  </Text>*/}
        
        {/*  <View*/}
        {/*    style={{*/}
        {/*      marginTop: hp(5),*/}
        {/*      backgroundColor: "black",*/}
        {/*      marginHorizontal: wp(5),*/}
        {/*      marginBottom: hp(2.5),*/}
        {/*      // paddingVertical: hp(1.75),*/}
        {/*      paddingVertical: TextStyles.Body.fontSize,*/}
        {/*      paddingHorizontal: wp(5),*/}
        {/*      borderRadius: wp(2.5),*/}
        {/*      alignItems: "center"*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    <Text style={[TextStyles.Body, { color: "white" }]}>*/}
        {/*      Get Started*/}
        {/*    </Text>*/}
        {/*  </View>*/}
        {/*</View>*/}
      </SafeAreaView>
    );
  }
}

export default LayoutDemoScreen;
