import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import DatePicker from "react-native-date-ranges";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import {
  BottomModal,
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";
import { useNavigation, useRoute } from "@react-navigation/native";

const SearchForm = () => {
  const route = useRoute();
  const navigator = useNavigation();
  const [room, setRoom] = useState(1);
  const [adult, setAdult] = useState(2);
  const [child, setChild] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState();
  customButton = (onConfirm) => (
    <Button
      onPress={onConfirm}
      style={{
        container: { width: "80%", marginHorizontal: "3%" },
        text: { fontSize: 20 },
      }}
      primary
      text="Submit"
    />
  );
  return (
    <View
      style={{
        borderColor: "#ffc72c",
        borderWidth: 4,
        margin: 16,
        borderRadius: 4,
      }}
    >
      {/* Destination */}
      <Pressable
        onPress={() => navigator.navigate("Search")}
        style={{
          flexDirection: "row",
          padding: 8,
          alignItems: "center",
          borderColor: "#ffc72c",
          borderWidth: 3,
          gap: 10,
          paddingHorizontal: 8,
        }}
      >
        <Feather name="search" size={22} color="black" />
        <TextInput
          placeholder={
            route?.params ? route.params.input : "Enter your destination"
          }
          style={{ paddingLeft: 0 }}
        />
      </Pressable>
      {/* Date */}
      <Pressable
        style={{
          flexDirection: "row",
          padding: 8,
          gap: 10,
          alignItems: "center",
          borderColor: "#ffc72c",
          borderWidth: 3,
        }}
      >
        <MaterialIcons name="date-range" size={22} color="black" />
        <DatePicker
          style={{
            width: 350,
            height: 30,
            borderColor: "transparent",
            borderRadius: 0,
            borderWidth: 0,
          }}
          customStyles={{
            placeholderText: {
              fontSize: 15,
              flexDirection: "row",
              marginRight: "auto",
              alignItems: "center",
            },
            headerStyle: { backgroundColor: "#003580" },
            headerMarkTitle: {},
            headerDateTitle: {},
            contentInput: {
              selectedBgColor: "#0047ab",
            },
            contentText: {
              fontSize: 15,
              flexDirection: "row",
              marginRight: "auto",
              alignItems: "center",
            },
          }}
          centerAlign
          allowFontScaling={false}
          placeholder={"Apr 27, 2018 → Jul 10, 2018"}
          onConfirm={(startDate, endDate) =>
            setSelectedDate(startDate, endDate)
          }
          mode={"range"}
        />
      </Pressable>

      {/* Rooms */}
      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
        style={{
          flexDirection: "row",
          padding: 8,
          alignItems: "center",
          borderColor: "#ffc72c",
          borderWidth: 3,
        }}
      >
        <AntDesign name="user" size={22} color="black" />
        <Text style={{ color: "red", fontSize: 14, paddingLeft: 6 }}>
          {room} room * {adult} Adult {child} childred
        </Text>
      </Pressable>
      {/* Search Button */}
      <Pressable
        style={{
          padding: 8,
          alignItems: "center",
          borderColor: "#ffc72c",
          borderWidth: 3,
          paddingVertical: 15,
          backgroundColor: "#2a52be",
        }}
      >
        <Text
          style={{
            flexDirection: "row",
            color: "white",
            fontSize: 15,
            fontWeight: "500",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          Search
        </Text>
      </Pressable>
      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={["up", "down"]}
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(!modalVisible)}
        modalTitle={<ModalTitle title="Select Rooms and guests" />}
        footer={
          <ModalFooter>
            <ModalButton
              text="Apply"
              style={{
                margin: 20,
                color: "white",
                backgroundColor: "#003580",
                borderRadius: 16,
              }}
              onPress={() => setModalVisible(!modalVisible)}
            />
          </ModalFooter>
        }
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
      >
        <ModalContent style={{ width: "100%", height: 200 }}>
          {/* Rooms */}
          <View
            style={{
              padding: 12,
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "600" }}>Rooms</Text>
            <Pressable
              style={{
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              {/* Minus icon */}
              <Pressable
                onPress={() => setRoom(Math.max(1, room - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#bebebe",
                  backgroundColor: "#e0e0e0",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                >
                  -
                </Text>
              </Pressable>
              {/* Quantity  text */}
              <Pressable style={{ gap: 10 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "500",
                    marginHorizontal: 12,
                  }}
                >
                  {room}
                </Text>
              </Pressable>
              {/* Add icon */}
              <Pressable
                onPress={() => setRoom((c) => c + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#bebebe",
                  backgroundColor: "#e0e0e0",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
          {/* Adults */}
          <View
            style={{
              padding: 12,
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "600" }}>Adults</Text>
            <Pressable
              style={{
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              {/* Minus icon */}
              <Pressable
                onPress={() => setAdult(Math.max(1, adult - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#bebebe",
                  backgroundColor: "#e0e0e0",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                >
                  -
                </Text>
              </Pressable>
              {/* Quantity  text */}
              <Pressable style={{ gap: 10 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "500",
                    marginHorizontal: 12,
                  }}
                >
                  {adult}
                </Text>
              </Pressable>
              {/* Add icon */}
              <Pressable
                onPress={() => setAdult((c) => c + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#bebebe",
                  backgroundColor: "#e0e0e0",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
          {/* Childrens */}
          <View
            style={{
              padding: 12,
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "600" }}>Childrens</Text>
            <Pressable
              style={{
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              {/* Minus icon */}
              <Pressable
                onPress={() => setChild(Math.max(0, child - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#bebebe",
                  backgroundColor: "#e0e0e0",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                >
                  -
                </Text>
              </Pressable>
              {/* Quantity  text */}
              <Pressable style={{ gap: 10 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "500",
                    marginHorizontal: 12,
                  }}
                >
                  {child}
                </Text>
              </Pressable>
              {/* Add icon */}
              <Pressable
                onPress={() => setChild((c) => c + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#bebebe",
                  backgroundColor: "#e0e0e0",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>
    </View>
  );
};

export default SearchForm;

const styles = StyleSheet.create({});
