import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: "#003580",
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        paddingRight: 8,
        paddingLeft: 8,
        justifyContent: "space-around",
      }}
    >
      {/* Styes */}
      <Pressable
        style={{
          flexDirection: "row",
          borderColor: "white",
          borderWidth: 1,
          paddingHorizontal: 12,
          paddingVertical: 6,
          borderRadius: 30,
        }}
      >
        <Ionicons name="bed-outline" size={24} color="white" />
        <Text
          style={{
            color: "white",
            fontSize: 14,
            fontWeight: "bold",
            marginLeft: 8,
          }}
        >
          Stayes
        </Text>
      </Pressable>
      {/* Flights */}
      <Pressable
        style={{
          flexDirection: "row",

          paddingHorizontal: 12,
          paddingVertical: 6,
        }}
      >
        <MaterialIcons name="flight" size={24} color="white" />
        <Text
          style={{
            color: "white",
            fontSize: 14,
            fontWeight: "bold",
            marginLeft: 8,
          }}
        >
          Flights
        </Text>
      </Pressable>
      {/* Car Rental */}
      <Pressable
        style={{
          flexDirection: "row",
          paddingHorizontal: 12,
          paddingVertical: 6,
        }}
      >
        <AntDesign name="car" size={24} color="white" />
        <Text
          style={{
            color: "white",
            fontSize: 14,
            fontWeight: "bold",
            marginLeft: 8,
          }}
        >
          Car Rental
        </Text>
      </Pressable>
      {/* Taxi */}
      <Pressable
        style={{
          flexDirection: "row",
          paddingHorizontal: 12,
          paddingVertical: 6,
        }}
      >
        <Fontisto name="uber" size={24} color="white" />
        <Text
          style={{
            color: "white",
            fontSize: 14,
            fontWeight: "bold",
            marginLeft: 8,
          }}
        >
          Taxi
        </Text>
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
