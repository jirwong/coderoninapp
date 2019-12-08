import React, { Component } from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";

import { TextStyles as fontStyles } from "../styles/font-styles";

class FontDemoScreen extends Component<any, any> {
  render() {
    return (
      <SafeAreaView style={StyleSheet.absoluteFill}>
        <ScrollView style={{ paddingTop: hp(2.5) }}>
          <Text style={[fontStyles.Title1, { paddingBottom: hp(2.5) }]}>
            The moon was mad with me today.
          </Text>

          <Text style={[fontStyles.Title2, { paddingBottom: hp(2.5) }]}>
            The moon was mad with me today as well.
          </Text>

          <Text style={[fontStyles.Title3, { paddingBottom: hp(2.5) }]}>
            The moon was really really mad with me last night.
          </Text>

          <Text style={[fontStyles.Title4, { paddingBottom: hp(2.5) }]}>
            The moon was mad at me again yesterday. I wonder if it knew about
            earth.
          </Text>

          <Text style={[fontStyles.Headline, { paddingBottom: hp(2.5) }]}>
            The moon was mad at me again today. I really wonder if it knew that
            earth is actually...
          </Text>

          <Text style={[fontStyles.Body, { paddingBottom: hp(2.5) }]}>
            The moon was mad at me again today. I wonder if it knew earth was
            actually made of small stones.
          </Text>

          <Text style={[fontStyles.Callout, { paddingBottom: hp(2.5) }]}>
            The moon was mad again. It's almost time for it to come home.
          </Text>

          <Text style={[fontStyles.Footnote, { paddingBottom: hp(2.5) }]}>
            The moon was mad again. It's almost time for it to come home to the
            place.
          </Text>

          <Text style={[fontStyles.Caption1, { paddingBottom: hp(2.5) }]}>
            The moon was mad again. It's almost time for it to come home to the
            place where its' people live.
          </Text>

          <Text style={[fontStyles.Caption2, { paddingBottom: hp(2.5) }]}>
            Looks like the moon is coming home tonight. After all, we need the
            moon and the earth to merge for the darker days ahead.
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default FontDemoScreen;
