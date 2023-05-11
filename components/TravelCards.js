import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const TravelCards = () => {
  return (
    <View style={{ paddingHorizontal: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "grey" }}>
        Travel More Spend less
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingVertical: 12 }}
      >
        {/* Genius Card */}
        <Pressable
          style={{
            height: 120,
            width: 200,
            borderRadius: 12,
            borderColor: "#003580",
            backgroundColor: "#003580",
            padding: 16,
            marginRight: 12,
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
            Genius
          </Text>
          <Text style={{ color: "white", fontSize: 16 }}>
            You are ate genius level one in our loyalty program.
          </Text>
        </Pressable>
        {/* Discount Card */}
        <Pressable
          style={{
            height: 120,
            width: 200,
            borderRadius: 12,
            borderColor: "#003580",
            borderWidth: 1,
            backgroundColor: "white",
            padding: 16,
            marginRight: 12,
          }}
        >
          <Text style={{ color: "#003580", fontSize: 16, fontWeight: "600" }}>
            10% Discount
          </Text>
          <Text style={{ color: "#003580", fontSize: 16 }}>
            Complete 5 stays to unlock your level.
          </Text>
        </Pressable>
        {/* Genius Card */}
        <Pressable
          style={{
            height: 120,
            width: 200,
            borderRadius: 12,
            borderColor: "#003580",
            backgroundColor: "#003580",
            padding: 16,
            marginRight: 12,
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
            Genius
          </Text>
          <Text style={{ color: "white", fontSize: 16 }}>
            You are ate genius level one in our loyalty program.
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default TravelCards;

const styles = StyleSheet.create({});
