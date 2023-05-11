import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import SearchResults from "../components/SearchResults";
import { useRoute } from "@react-navigation/native";

const SearchScreen = () => {
  const [input, setInput] = useState();

  return (
    <View>
      <Pressable
        style={{
          flexDirection: "row",
          padding: 10,
          margin: 16,
          gap: 10,
          alignItems: "center",
          justifyContent: "space-between",
          borderColor: "#ffc72c",
          borderRadius: 8,
          borderWidth: 4,
        }}
      >
        <TextInput
          placeholder="Search here"
          value={input}
          onChangeText={setInput}
        />
        <Feather name="search" size={22} color="black" />
      </Pressable>
      <SearchResults input={input} setInput={setInput} />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
