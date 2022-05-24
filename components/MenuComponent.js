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
import globalStyles from "../styles/styles";
import { useNavigation } from "@react-navigation/native";
import theIcon from "../assets/theIcon.png";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';

import AsyncStorage from "@react-native-async-storage/async-storage";
import { logout } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";

export const MenuComponent = ({ onPress }) => {

  const navigator = useNavigation();
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
    AsyncStorage.removeItem("@me");
    navigator.navigate("AuthHome");
  }

  return (
    <SafeAreaView style={styles.mainMenu} >

      <View style={{ marginTop: "3%" }}>

        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigator.navigate("Home")}
        >
          <MaterialIcons
            name="arrow-back-ios"
            size={22}
            color="grey"
          />
        </TouchableOpacity>
      </View>

      <Image style={globalStyles.menuLogo} source={theIcon} />

      <TouchableOpacity
        onPress={() => logOut()}
      >
        <Entypo name="log-out" size={22} color="gray" />
      </TouchableOpacity>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    marginHorizontal: 20
  },

  backIcon: {
    borderRadius: 12,
    marginRight: 10,
  }

});
