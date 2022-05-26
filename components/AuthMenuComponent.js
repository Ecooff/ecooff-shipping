import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import authStyles from "../styles/authStyles";
import globalStyles from "../styles/styles";

const AuthMenuComponent = () => {
    const navigator = useNavigation();
  {
    return (
      <View
        style={[
          styles.arrowSpace,
          globalStyles.arrowContainer,
          globalStyles.row,
          globalStyles.alignItemsCenter,
        ]}
      >

        <Image
          style={[authStyles.logoInline, globalStyles.menuLogo]}
          source={require("../assets/theIcon.png")}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  arrowSpace: {
    marginBottom: 28,
  },
});

export default AuthMenuComponent;
