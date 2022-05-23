import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Pressable,
  Modal,
} from "react-native";
import { globalStyles } from "../styles";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";

{ /* COMPONENTS */ }
import { MenuComponent, FooterComponent } from "../components";

{ /* SERVICES */ }
import ordersService from "../services/OrdersService";

const HomeScreen = () => {
  
  const user = useSelector(selectUser);
  const navigator = useNavigation();

  // useEffect(() => {
    
  // }, []);

  // FOR CLOSEING THE MODAL
  const callback = (param) => {
  };

  return (
    <View style={[styles.homeContainer]}>

      {/* MENU */}
      <MenuComponent style={{position: "absolute", top: 30}} />

      {/* FOOTER */}
      <FooterComponent />

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  }
});
