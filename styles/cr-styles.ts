import { hp, wp } from "../styles/screen-helper";
import { Colors } from "./colors";

const fw = {
  light: { fontFamily: "inter-light" },
  regular: { fontFamily: "inter-regular" },
  medium: { fontFamily: "inter-medium" },
  semibold: { fontFamily: "inter-semibold" },
  bold: { fontFamily: "inter-bold" }
};

const f = {
  // s11: { fontSize: wp(11), lineHeight: wp(11) * 1.3 },
  // s12: { fontSize: wp(12), lineHeight: wp(12) * 1.3 },
  // s13: { fontSize: wp(13), lineHeight: wp(13) * 1.3 },
  // s16: { fontSize: wp(16), lineHeight: wp(16) * 1.3 },
  // s17: { fontSize: wp(17), lineHeight: wp(17) * 1.3 },
  // s18: { fontSize: wp(18), lineHeight: wp(18) * 1.2 },
  // s20: { fontSize: wp(20), lineHeight: wp(20) * 1.2 },
  // s22: { fontSize: wp(22), lineHeight: wp(22) * 1.2 },
  // s28: { fontSize: wp(28), lineHeight: wp(28) * 1.2 },
  // s34: { fontSize: wp(34), lineHeight: wp(34) * 1.2 },
  s11: { fontSize: wp(11), lineHeight: wp(11) * 1.3 },
  s12: { fontSize: wp(12), lineHeight: wp(12) * 1.3 },
  s13: { fontSize: wp(13), lineHeight: wp(13) * 1.3 },
  s16: { fontSize: wp(16), lineHeight: wp(16) * 1.3 },
  s17: { fontSize: wp(17), lineHeight: wp(17) * 1.3 },
  s18: { fontSize: wp(18), lineHeight: wp(18) * 1.2 },
  s20: { fontSize: wp(20), lineHeight: wp(20) * 1.2 },
  s22: { fontSize: wp(22), lineHeight: wp(22) * 1.2 },
  s28: { fontSize: wp(28), lineHeight: wp(28) * 1.2 },
  s34: { fontSize: wp(34), lineHeight: wp(34) * 1.2 }
};

const fc = {
  blue000: { color: Colors.Blue000 },
  blue400: { color: Colors.Blue400 },
  blue700: { color: Colors.Blue700 },
  blue900: { color: Colors.Blue900 },
  yellow000: { color: Colors.Yellow000 },
  yellow200: { color: Colors.Yellow200 },
  yellow400: { color: Colors.Yellow400 },
  yellow700: { color: Colors.Yellow700 },
  yellow900: { color: Colors.Yellow900 },
  secondary: { color: Colors.Grey700 },
  white: { color: Colors.White },
  tertiary: { color: Colors.Grey500 },
  lightgrey: { color: Colors.Grey300 }
};

const bg = {
  blue000: { backgroundColor: Colors.Blue000 },
  blue100: { backgroundColor: Colors.Blue100 },
  blue200: { backgroundColor: Colors.Blue200 },
  blue300: { backgroundColor: Colors.Blue300 },
  blue400: { backgroundColor: Colors.Blue400 },
  blue500: { backgroundColor: Colors.Blue500 },
  blue600: { backgroundColor: Colors.Blue600 },
  blue700: { backgroundColor: Colors.Blue700 },
  blue800: { backgroundColor: Colors.Blue800 },
  blue900: { backgroundColor: Colors.Blue900 },
  yellow000: { backgroundColor: Colors.Yellow000 },
  yellow200: { backgroundColor: Colors.Yellow200 },
  yellow400: { backgroundColor: Colors.Yellow400 },
  yellow700: { backgroundColor: Colors.Yellow700 },
  yellow900: { backgroundColor: Colors.Yellow900 },
  white: { backgroundColor: Colors.White },
  secondary: { backgroundColor: Colors.Grey100 },
  tertiary: { backgroundColor: Colors.Grey000 },
  black: { backgroundColor: Colors.Black }
};

export { fw, bg, fc, f };
