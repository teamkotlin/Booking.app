import { StyleSheet, Text, View, StatusBar } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: "center",
      headerShown: true,
      title: "Booking.com",
      headerTitleStyle: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 80,
      },
      headerRight: () => {
        return (
          <Ionicons
            name="ios-notifications-outline"
            size={24}
            color="white"
            style={{ marginRight: 12 }}
          />
        );
      },
    });
  }, []);
  return (
    <View>
      <StatusBar animated={true} backgroundColor="#003580" />
      <Header />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
