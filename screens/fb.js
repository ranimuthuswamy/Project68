import * as React from "react";
import { View, Text } from "react-native";

export default class Facebook extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            color: "blue",
            fontWeight: "bold",
          }}
        >
          FACEBOOK
        </Text>
      </View>
    );
  }
}
