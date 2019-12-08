import React, { Component } from "react";
import { View, Text } from "react-native";

import DatePicker from "react-native-date-picker";

class TestDatePickerScreen extends Component<any, any> {
  state = { currentDate: new Date() };

  render() {
    return (
      <View>
        <Text>TestDatePickerScreen</Text>

        <DatePicker
          date={this.state.currentDate}
          onDateChange={date => this.setState({ currentDate: date })}
        />
      </View>
    );
  }
}

export default TestDatePickerScreen;
