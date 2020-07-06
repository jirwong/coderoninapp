import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Platform,
  ScrollView
} from "react-native";

import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import { wp, hp } from "../styles/screen-helper";

import { f, fw, bg, fc } from "../styles/cr-styles";

import { name, future, department } from "../utils/fake-utils";

import {
  heightPercentageToDP,
  widthPercentageToDP
} from "react-native-responsive-screen";
import { Colors } from "../styles/colors";

function FauxButton({ children }) {
  return (
    <TouchableOpacity
      style={[
        bg.blue400,
        {
          paddingVertical: wp(15),
          paddingHorizontal: hp(15),
          borderRadius: 8,
          width: widthPercentageToDP(90)
        }
      ]}
    >
      <Text
        style={[{ color: "#FFFFFF", textAlign: "center" }, f.s18, fw.semibold]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const deviceTopMargins = { paddingTop: Platform.OS === "android" ? 24 : 0 };
// const additionalMargins = { marginTop: Platform.OS === "android" ? 26 : 6 };
const additionalMargins = { marginTop: 10 };

function BookingTabs() {
  return (
    <View style={[{ paddingTop: hp(30), flexDirection: "row" }]}>
      <View
        style={[
          {
            width: "50%",
            borderBottomWidth: 3,
            paddingBottom: hp(10),
            borderBottomColor: Colors.Blue500
          }
        ]}
      >
        <Text style={[{ textAlign: "center" }, f.s16, fc.blue700, fw.semibold]}>
          My Bookings
        </Text>
      </View>
      <View
        style={[
          {
            width: "50%",
            borderBottomWidth: 0.5,
            paddingBottom: hp(10),
            borderBottomColor: Colors.Grey300
          }
        ]}
      >
        <Text style={[{ textAlign: "center" }, f.s16, fw.regular, fc.tertiary]}>
          Available Shifts
        </Text>
      </View>
    </View>
  );
}

function SecondaryNav() {
  return (
    <View
      style={[
        {
          paddingTop: hp(20),
          paddingHorizontal: wp(20),
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end"
        }
      ]}
    >
      <Text style={[f.s17, fw.bold, fc.blue900]}>Calendar</Text>

      {/* Tag */}
      <View
        style={[
          bg.blue700,
          {
            paddingHorizontal: wp(10),
            paddingVertical: hp(3),
            borderRadius: 100,
            flexDirection: "row",
            alignItems: "center"
          }
        ]}
      >
        <Text style={[f.s13, fc.white, fw.regular]}>
          Showing <Text style={[fw.semibold]}>UPCOMING</Text>
        </Text>
        <AntDesign
          name="down"
          style={[{ color: "white", paddingLeft: wp(6) }]}
        />
      </View>
    </View>
  );
}

function BookingItem() {
  return (
    <View style={[{ paddingHorizontal: wp(20), paddingBottom: hp(15) }]}>
      <View
        style={[
          {
            paddingVertical: hp(15),
            paddingHorizontal: wp(10),
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: Colors.Grey000
          }
          // bg.tertiary
        ]}
      >
        <View style={[{ flexDirection: "row" }]}>
          <View style={{ paddingRight: wp(15) }}>
            <Text
              style={[{ textAlign: "right" }, f.s13, fc.secondary, fw.regular]}
            >
              10:30 AM
            </Text>
            <Text
              style={[{ textAlign: "right" }, f.s13, fc.secondary, fw.regular]}
            >
              3:30 PM
            </Text>
          </View>
          <View>
            <Text style={[f.s16, fw.semibold, { color: Colors.Black }]}>
              Liam Smith
            </Text>
            <Text style={[f.s13, fw.regular, fc.secondary]}>
              Youth Jobs Now
            </Text>
          </View>
        </View>

        <MaterialCommunityIcons name="chevron-right" size={wp(24)} />
      </View>
    </View>
  );
}

class BookingItemsList extends Component {
  render() {
    return (
      <View>
        <View style={{ paddingHorizontal: wp(20), paddingBottom: hp(10) }}>
          <Text style={[fw.semibold, f.s13, fc.secondary]}>
            Monday, 20 February 2020
          </Text>
        </View>

        {/* Booking Items */}
        <View style={[{ paddingBottom: hp(30) }]}>
          <BookingItem />
          <BookingItem />
          <BookingItem />
          <BookingItem />
        </View>

        <View style={{ paddingHorizontal: wp(20), paddingBottom: hp(10) }}>
          <Text style={[fw.semibold, f.s13, fc.secondary]}>
            Monday, 20 February 2020
          </Text>
        </View>

        {/* Booking Items */}
        <View style={[{ paddingBottom: hp(30) }]}>
          <BookingItem />
          <BookingItem />
          <BookingItem />
          <BookingItem />
          <BookingItem />
          <BookingItem />
        </View>
      </View>
    );
  }
}

class BookingListingScreen extends Component<any, any> {
  render() {
    return (
      <SafeAreaView
        style={[StyleSheet.absoluteFill, bg.white, deviceTopMargins]}
      >
        <View style={[{ flex: 1 }, bg.white, additionalMargins]}>
          {/* Everything inside here is relative */}
          {/*<View*/}
          {/*  style={[*/}
          {/*    {*/}
          {/*      position: "absolute",*/}
          {/*      bottom: hp(30),*/}
          {/*      zIndex: 999,*/}
          {/*      paddingHorizontal: wp(20)*/}
          {/*    }*/}
          {/*  ]}*/}
          {/*>*/}
          {/*  <View*/}
          {/*    style={{*/}
          {/*      width: wp(335),*/}
          {/*      backgroundColor: Colors.Blue700,*/}
          {/*      paddingVertical: hp(15),*/}
          {/*      borderRadius: 10*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    <Text style={[{ textAlign: "center" }, fc.white, f.s18]}>*/}
          {/*      + Add New Booking*/}
          {/*    </Text>*/}
          {/*  </View>*/}
          {/*</View>*/}

          {/* Header */}
          <View
            style={[
              {
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: wp(20),
                paddingTop: hp(10)
              }
            ]}
          >
            <Text style={[fw.bold, f.s22]}>Bookings</Text>
            <AntDesign name="search1" size={wp(28)} style={[fc.blue700]} />
          </View>

          {/* Calendar */}
          {/*<View*/}
          {/*  style={[*/}
          {/*    {*/}
          {/*      paddingBottom: hp(20),*/}
          {/*      borderBottomWidth: hp(5),*/}
          {/*      borderBottomColor: Colors.Grey000*/}
          {/*    }*/}
          {/*  ]}*/}
          {/*>*/}
          <SecondaryNav />
          {/*</View>*/}

          <BookingTabs />

          <ScrollView style={[{}]}>
            <View
              style={[{ paddingHorizontal: wp(20), paddingVertical: hp(20) }]}
            >
              <Text style={[fc.tertiary, fw.regular, f.s13]}>
                <Text style={[fw.bold, f.s13]}>10 upcoming</Text> bookings
                found.
              </Text>
            </View>

            <BookingItemsList />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

export default BookingListingScreen;
