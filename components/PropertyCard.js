import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
const PropertyCard = ({
  rooms,
  childred,
  adults,
  selectedDate,
  availableRooms,
  property,
}) => {
  const route = useRoute();
  return (
    <Pressable style={{ flexDirection: "row", margin: 8, gap: 10 }}>
      {/* Image */}
      <View style={{ flex: 2 }}>
        <Image
          source={{ uri: property.image }}
          style={{ width: "100%", height: 200, borderRadius: 4 }}
        />
      </View>
      {/* Other Text Column */}
      <View style={{ flex: 4, justifyContent: "space-between" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "600" }}>
            {property.name}
          </Text>
          <AntDesign
            name="hearto"
            size={20}
            color="red"
            style={{ paddingHorizontal: 10 }}
          />
        </View>
        <View style={{ flexDirection: "row", gap: 10, marginTop: 4 }}>
          <MaterialIcons name="stars" size={24} color="green" />
          <Text>{property.rating}</Text>
          <View
            style={{
              backgroundColor: "#6cb4ee",
              borderRadius: 6,
              paddingHorizontal: 10,
              paddingVertical: 2,
            }}
          >
            <Text style={{ color: "white" }}>Genius Level</Text>
          </View>
        </View>
        {/* Address */}
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={{ fontSize: 14, fontWeight: "400" }}
        >
          {property.address}
        </Text>
        <Text style={{ marginTop: 4 }}>Price for 1 Night {adults} Adults</Text>
        {/* Price */}
        <View style={{ flexDirection: "row", gap: 6 }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "500",
              color: "red",
              textDecorationLine: "line-through",
            }}
          >
            Rs {property.oldPrice}
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "500" }}>
            {property.newPrice}
          </Text>
        </View>
        <Text style={{ fontSize: 16 }}>Deluxe Room</Text>
        <Text style={{ fontSize: 16 }}>Hotel Room :1 Bed</Text>
        {/* bottom badge */}
        <View
          style={{
            backgroundColor: "#6082b6",
            borderRadius: 6,
            width: 180,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 10,
            paddingVertical: 2,
            marginTop: 2,
          }}
        >
          <Text style={{ color: "white" }}>Limited Time Offer Deal</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PropertyCard;

const styles = StyleSheet.create({});
