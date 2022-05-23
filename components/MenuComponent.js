import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { globalStyles } from "../styles";
import { useNavigation } from "@react-navigation/native";
import theIcon from "../assets/theIcon.png";
import { MaterialIcons } from "@expo/vector-icons";

export const MenuComponent = ({ onPress }) => {

  const navigator = useNavigation();

  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        justifyContent: "space-between"
      }}
    >
      <Pressable onPress={() => navigator.navigate("Home")} />
      <View style={{ marginTop: "3%" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(77, 181, 145, 0.97)",
            borderRadius: 12,
            marginRight: 10,
          }}
          onPress={onPress}
        >
          <MaterialIcons
            name="arrow-back-ios"
            size={19}
            color="white"
            style={{ padding: 2, position: "relative", left: 3 }}
          />
        </TouchableOpacity>
      </View>
      <Image style={styles.menuLogo} source={theIcon} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainMenu: {
    justifyContent: "space-between",
  },

  menuLogo: {
    width: 90,
    height: 40,
    marginBottom: 20,
    marginRight: 190,
  },

  icon: {
    marginLeft: 15,
    marginRight: 10,
  },
  cartIcon: {
    marginRight: 20,
    marginTop: 3,
    position: "relative",
  },
});
