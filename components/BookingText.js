import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BookingText = () => {
  return (
    <View
      style={{
        marginVertical: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 26, fontWeight: "bold", color: "#003588" }}>
        Booking
      </Text>
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "#6FD3F2" }}>
        .com
      </Text>
    </View>
  );
};

export default BookingText;

const styles = StyleSheet.create({});
