import {
  heightPercentageToDP,
  widthPercentageToDP
} from "react-native-responsive-screen";

export function hp(px: number) {
  return heightPercentageToDP(((px / 812) * 100).toFixed(2));
}

export function wp(px: number) {
  return widthPercentageToDP(((px / 375) * 100).toFixed(2));
}
