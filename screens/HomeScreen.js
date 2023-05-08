import { StyleSheet, Text, View, StatusBar, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import TravelCards from "../components/TravelCards";
import BookingText from "../components/BookingText";
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
        borderBottomColor: "transparent",
        shadowColor: "transparent",
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
      <ScrollView>
        <SearchForm />
        <TravelCards />
        <BookingText />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
