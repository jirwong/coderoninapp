import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export const fontFamilies = {
  AvenirNext_Light: "avenirnext-light",
  AvenirNext_Regular: "avenirnext-regular",
  AvenirNext_DemiBold: "avenirnext-demibold",
  AvenirNext_Bold: "avenirnext-bold",
  AvenirNext_Black: "avenirnext-black",
  Inter_Light: "inter-light",
  Inter_Regular: "inter-regular",
  Inter_Medium: "inter-medium",
  Inter_SemiBold: "inter-semibold",
  Inter_Bold: "inter-bold",
  Inter_ExtraBold: "inter-extrabold",
  Inter_Black: "inter-black",
  Metropolis_Light: "metropolis-light",
  Metropolis_Regular: "metropolis-regular",
  Metropolis_Medium: "metropolis-medium",
  Metropolis_Bold: "metropolis-bold",
  Metropolis_ExtraBold: "metropolis-extrabold",
  Metropolis_Black: "metropolis-black"
};

// Not in use
// const fontRatio = 0.2647;
// const calcWP = fontSize => wp(fontSize * fontRatio);

// Base largeTitle size (in percentage)
const largeTitleSize = 9;

// All font sizes here are derived from the base LargeTitle size.
// Line Heights are calculated with the following ratios:
// All titles (LargeTitle, Title 1 - 3, Headline) have a lineHeight ratio of 1.2.
// All other text (Body to Caption 2) have a lineHeight ratio of 1.3.
// Therefore, actual lineHeight value = font size value * ratio.
export const TextStyles = StyleSheet.create({
  Title1: {
    // fontSize: 34,
    fontSize: wp(largeTitleSize),
    lineHeight: wp(largeTitleSize) * 1.2,
    // fontFamily: fontFamilies.AvenirNext_Bold
    fontFamily: fontFamilies.Inter_ExtraBold
  },
  Title2: {
    // fontSize: 28,
    fontSize: wp((largeTitleSize * 28) / 34),
    lineHeight: wp((largeTitleSize * 28) / 34) * 1.2,
    // fontFamily: fontFamilies.AvenirNext_Bold
    fontFamily: fontFamilies.Inter_ExtraBold
  },
  Title3: {
    // fontSize: 22,
    fontSize: wp((largeTitleSize * 22) / 34),
    lineHeight: wp((largeTitleSize * 22) / 34) * 1.2,
    // fontFamily: fontFamilies.AvenirNext_Bold
    fontFamily: fontFamilies.Inter_ExtraBold
  },
  Title4: {
    // fontSize: 20,
    fontSize: wp((largeTitleSize * 20) / 34),
    lineHeight: wp((largeTitleSize * 20) / 34) * 1.2,
    // fontFamily: fontFamilies.AvenirNext_Regular
    fontFamily: fontFamilies.Inter_Regular
  },
  Headline: {
    // fontSize: 18,
    fontSize: wp((largeTitleSize * 18) / 34),
    lineHeight: wp((largeTitleSize * 18) / 34) * 1.2,
    // fontFamily: fontFamilies.AvenirNext_Regular
    fontFamily: fontFamilies.Inter_Regular
  },
  Body: {
    // fontSize: 17,
    fontSize: wp((largeTitleSize * 17) / 34),
    lineHeight: wp((largeTitleSize * 17) / 34) * 1.3,
    // fontFamily: fontFamilies.AvenirNext_Regular
    fontFamily: fontFamilies.Inter_Regular
  },
  Callout: {
    // fontSize: 16,
    fontSize: wp((largeTitleSize * 16) / 34),
    lineHeight: wp((largeTitleSize * 16) / 34) * 1.3,
    // fontFamily: fontFamilies.AvenirNext_Regular
    fontFamily: fontFamilies.Inter_Regular
  },
  Footnote: {
    // fontSize: 13,
    fontSize: wp((largeTitleSize * 13) / 34),
    lineHeight: wp((largeTitleSize * 13) / 34) * 1.3,
    // fontFamily: fontFamilies.AvenirNext_Regular
    fontFamily: fontFamilies.Inter_Regular
  },
  Caption1: {
    // fontSize: 12,
    fontSize: wp((largeTitleSize * 12) / 34),
    lineHeight: wp((largeTitleSize * 12) / 34) * 1.3,
    // fontFamily: fontFamilies.AvenirNext_Regular
    fontFamily: fontFamilies.Inter_Regular
  },
  Caption2: {
    // fontSize: 11,
    fontSize: wp((largeTitleSize * 11) / 34),
    lineHeight: wp((largeTitleSize * 11) / 34) * 1.3,
    // fontFamily: fontFamilies.AvenirNext_Regular
    fontFamily: fontFamilies.Inter_Regular
  }
});
