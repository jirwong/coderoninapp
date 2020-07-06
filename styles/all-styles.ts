import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
// import { wp, hp } from 'utils/responsive-screen-service';
import { Colors } from "./colors";
import { hp, wp } from "./screen-helper";

// Font weights
const FontWeights = StyleSheet.create({
  //fw_light: { fontFamily: 'avenirnext-light' },
  fw_regular: { fontFamily: "avenirnext-regular" },
  fw_demibold: { fontFamily: "avenirnext-demibold" },
  fw_bold: { fontFamily: "avenirnext-bold" }
  //fw_black: { fontFamily: 'avenirnext-black' }
});

// Base largeTitle size (in percentage) 34/375
// const largeTitleSize = wp(34);

// All font sizes here are derived from the base LargeTitle size.
// Line Heights are calculated with the following ratios:
// All titles (LargeTitle, Title 1 - 3, Headline) have a lineHeight ratio of 1.2.
// All other text (Body to Caption 2) have a lineHeight ratio of 1.3.
// Therefore, actual lineHeight value = font size value * ratio.
const FontSizes = StyleSheet.create({
  fs_34: {
    fontSize: wp(34),
    lineHeight: wp(34) * 1.2
  },
  fs_28: {
    fontSize: wp(28),
    lineHeight: wp(28) * 1.2
  },
  fs_22: {
    fontSize: wp(22),
    lineHeight: wp(22) * 1.2
  },
  fs_20: {
    fontSize: wp(20),
    lineHeight: wp(20) * 1.2
  },
  fs_18: {
    fontSize: wp(18),
    lineHeight: wp(18) * 1.3
  },
  fs_17: {
    fontSize: wp(17),
    lineHeight: wp(17) * 1.3
  },
  fs_16: {
    fontSize: wp(16),
    lineHeight: wp(16) * 1.3
  },
  fs_13: {
    fontSize: wp(13),
    lineHeight: wp(13) * 1.3
  },
  fs_12: {
    fontSize: wp(12),
    lineHeight: wp(12) * 1.3
  },
  fs_11: {
    fontSize: wp(11),
    lineHeight: wp(11) * 1.3
  }
});

// Background Colors
const Backgrounds = StyleSheet.create({
  bg_transparent: { backgroundColor: "transparent" },
  bg_white: { backgroundColor: Colors.White },
  bg_bluegrey000: { backgroundColor: Colors.BlueGrey000 },
  bg_black: { backgroundColor: Colors.Black }
});

// Paddings
const Paddings = StyleSheet.create({
  // all
  // p_none: { padding: 0 },
  // p_x2_small: { padding: 2 },
  // p_x_small: { padding: 4 },
  // p_small: { padding: 8 },
  // p_medium: { padding: 16 },
  // p_large: { padding: 24 },
  // p_x_large: { padding: 32 },
  // p_x2_large: { padding: 40 },
  // p_x3_large: { padding: 48 },
  // p_x4_large: { padding: 56 },

  // padding for layout
  ph_default: { paddingHorizontal: wp(19) },
  ph_tighter: { paddingHorizontal: wp(29) },

  ph_none: { paddingHorizontal: 0 },
  ph_x2_small: { paddingHorizontal: wp(2) },
  ph_x_small: { paddingHorizontal: wp(4) },
  ph_small: { paddingHorizontal: wp(8) },
  ph_medium: { paddingHorizontal: wp(16) },
  ph_large: { paddingHorizontal: wp(24) },
  ph_x_large: { paddingHorizontal: wp(32) },
  ph_x2_large: { paddingHorizontal: wp(40) },
  ph_x3_large: { paddingHorizontal: wp(48) },
  ph_x4_large: { paddingHorizontal: wp(56) },

  pv_none: { paddingVertical: 0 },
  pv_x2_small: { paddingVertical: hp(2) },
  pv_x_small: { paddingVertical: hp(4) },
  pv_small: { paddingVertical: hp(8) },
  pv_medium: { paddingVertical: hp(16) },
  pv_large: { paddingVertical: hp(24) },
  pv_x_large: { paddingVertical: hp(32) },
  pv_x2_large: { paddingVertical: hp(40) },
  pv_x3_large: { paddingVertical: hp(48) },
  pv_x4_large: { paddingVertical: hp(56) },

  pl_none: { paddingLeft: 0 },
  pl_x2_small: { paddingLeft: wp(2) },
  pl_x_small: { paddingLeft: wp(4) },
  pl_small: { paddingLeft: wp(8) },
  pl_medium: { paddingLeft: wp(16) },
  pl_large: { paddingLeft: wp(24) },
  pl_x_large: { paddingLeft: wp(32) },
  pl_x2_large: { paddingLeft: wp(40) },
  pl_x3_large: { paddingLeft: wp(48) },
  pl_x4_large: { paddingLeft: wp(56) },

  pr_none: { paddingRight: 0 },
  pr_x2_small: { paddingRight: wp(2) },
  pr_x_small: { paddingRight: wp(4) },
  pr_small: { paddingRight: wp(8) },
  pr_medium: { paddingRight: wp(16) },
  pr_large: { paddingRight: wp(24) },
  pr_x_large: { paddingRight: wp(32) },
  pr_x2_large: { paddingRight: wp(40) },
  pr_x3_large: { paddingRight: wp(48) },
  pr_x4_large: { paddingRight: wp(56) },

  pt_none: { paddingTop: 0 },
  pt_x2_small: { paddingTop: hp(2) },
  pt_x_small: { paddingTop: hp(4) },
  pt_small: { paddingTop: hp(8) },
  pt_medium: { paddingTop: hp(16) },
  pt_large: { paddingTop: hp(24) },
  pt_x_large: { paddingTop: hp(32) },
  pt_x2_large: { paddingTop: hp(40) },
  pt_x3_large: { paddingTop: hp(48) },
  pt_x4_large: { paddingTop: hp(56) },

  pb_none: { paddingBottom: 0 },
  pb_x2_small: { paddingBottom: hp(2) },
  pb_x_small: { paddingBottom: hp(4) },
  pb_small: { paddingBottom: hp(8) },
  pb_medium: { paddingBottom: hp(16) },
  pb_large: { paddingBottom: hp(24) },
  pb_x_large: { paddingBottom: hp(32) },
  pb_x2_large: { paddingBottom: hp(40) },
  pb_x3_large: { paddingBottom: hp(48) },
  pb_x4_large: { paddingBottom: hp(56) }
});

// Flexes
const Flexes = StyleSheet.create({
  // Flexes
  flex: { flex: 1 },
  flex_2: { flex: 2 },
  flex_3: { flex: 3 },
  flex_4: { flex: 4 },

  // Directions
  flex_row: { flexDirection: "row" },
  flex_row_reverse: { flexDirection: "row-reverse" },
  flex_column: { flexDirection: "column" },
  flex_column_reverse: { flexDirection: "column-reverse" },

  // Justify
  justify_end: { justifyContent: "flex-end" },
  justify_start: { justifyContent: "flex-start" },
  justify_center: { justifyContent: "center" },
  justify_between: { justifyContent: "space-between" },
  justify_around: { justifyContent: "space-around" },
  justify_evenly: { justifyContent: "space-evenly" },

  // Align
  align_stretch: { alignItems: "stretch" },
  align_start: { alignItems: "flex-start" },
  align_end: { alignItems: "flex-end" },
  align_center: { alignItems: "center" },
  align_baseline: { alignItems: "baseline" },

  // Align Self
  align_self_start: { alignSelf: "flex-start" },
  align_self_end: { alignSelf: "flex-end" },
  align_self_center: { alignSelf: "center" },

  // Text align
  text_align_left: { textAlign: "left" },
  text_align_center: { textAlign: "center" },
  text_align_right: { textAlign: "right" },

  // centered
  centered: { justifyContent: "center", alignItems: "center" },

  // flex wrap
  flex_wrap: { flexWrap: "wrap" }
});

// Positions
const Positions = StyleSheet.create({
  absolute: { position: "absolute" },
  relative: { position: "relative" }
});

// Borders
const Borders = StyleSheet.create({
  // All borders
  b_none: { borderWidth: 0 },
  b_small: { borderWidth: wp(1) },
  b_medium: { borderWidth: wp(2) },
  b_large: { borderWidth: wp(4) },
  b_x_large: { borderWidth: wp(6) },
  b_x2_large: { borderWidth: wp(8) },
  b_x3_large: { borderWidth: wp(10) },

  bh_none: { borderLeftWidth: 0, borderRightWidth: 0 },
  bh_small: { borderLeftWidth: wp(1), borderRightWidth: wp(1) },
  bh_medium: { borderLeftWidth: wp(2), borderRightWidth: wp(2) },
  bh_large: { borderLeftWidth: wp(4), borderRightWidth: wp(4) },
  bh_x_large: { borderLeftWidth: wp(6), borderRightWidth: wp(6) },
  bh_x2_large: { borderLeftWidth: 8, borderRightWidth: 8 },
  bh_x3_large: { borderLeftWidth: 10, borderRightWidth: 10 },

  bv_none: { borderTopWidth: 0, borderBottomWidth: 0 },
  bv_small: { borderTopWidth: 1, borderBottomWidth: 1 },
  bv_medium: { borderTopWidth: 2, borderBottomWidth: 2 },
  bv_large: { borderTopWidth: 4, borderBottomWidth: 4 },
  bv_x_large: { borderTopWidth: 6, borderBottomWidth: 6 },
  bv_x2_large: { borderTopWidth: 8, borderBottomWidth: 8 },
  bv_x3_large: { borderTopWidth: 10, borderBottomWidth: 10 },

  bt_none: { borderTopWidth: 0 },
  bt_x_small: { borderTopWidth: 0.5 },
  bt_small: { borderTopWidth: 1 },
  bt_medium: { borderTopWidth: 2 },
  bt_large: { borderTopWidth: 4 },
  bt_x_large: { borderTopWidth: 6 },
  bt_x2_large: { borderTopWidth: 8 },
  bt_x3_large: { borderTopWidth: 10 },

  bb_none: { borderBottomWidth: 0 },
  bb_small: { borderBottomWidth: 1 },
  bb_medium: { borderBottomWidth: 2 },
  bb_large: { borderBottomWidth: 4 },
  bb_x_large: { borderBottomWidth: 6 },
  bb_x2_large: { borderBottomWidth: 8 },
  bb_x3_large: { borderBottomWidth: 10 },

  bl_none: { borderLeftWidth: 0 },
  bl_small: { borderLeftWidth: 1 },
  bl_medium: { borderLeftWidth: 2 },
  bl_large: { borderLeftWidth: 4 },
  bl_x_large: { borderLeftWidth: 6 },
  bl_x2_large: { borderLeftWidth: 8 },
  bl_x3_large: { borderLeftWidth: 10 },

  br_none: { borderRightWidth: 0 },
  br_small: { borderRightWidth: 1 },
  br_medium: { borderRightWidth: 2 },
  br_large: { borderRightWidth: 4 },
  br_x_large: { borderRightWidth: 6 },
  br_x2_large: { borderRightWidth: 8 },
  br_x3_large: { borderRightWidth: 10 }
});

export default StyleSheet.create({
  ...FontWeights,
  ...FontSizes,
  ...Backgrounds,
  ...Flexes,
  ...Positions,
  ...Borders,
  ...Paddings
});
