import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { authStyles } from "../styles/authStyles";
import globalStyles from "../styles/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const FooterComponent = () => {
  const navigator = useNavigation();
  return (
    <View style={[globalStyles.primary,styles.footerContainer]}>
      <View
        style={[styles.footer, globalStyles.row, globalStyles.alignItemsCenter]}
      >
        <TouchableOpacity
          onPress={() => navigator.navigate("Home")}
          style={styles.footerIcon}
        >
          <Ionicons name="home-outline" style={styles.icon} size={24} />
          <Text style={[styles.footerLabel, globalStyles.fontXSmall]}>
            Inicio
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigator.navigate("OrderHistory")}
          style={styles.footerIcon}
        >
          <MaterialCommunityIcons
            name="shopping-outline"
            style={styles.icon}
            size={24}
          />
          <Text style={[styles.footerLabel, globalStyles.fontXSmall]}>
            Pedidos
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigator.navigate("Cart")}
          style={styles.footerIcon}
        >
          <Ionicons name="ios-cart-outline" style={styles.icon} size={24} />
          <Text style={[styles.footerLabel, globalStyles.fontXSmall]}>
            Carrito
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigator.navigate("Profile")}
          style={styles.footerIcon}
        >
          <AntDesign name="user" style={styles.icon} size={24} />
          <Text style={[styles.footerLabel, globalStyles.fontXSmall]}>
            Mi perfil
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    width: "100%",
    position: "absolute",
    bottom: 30,
    paddingHorizontal: 15,
  },

  footer: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 50,
    justifyContent: "space-around",
  },

  footerIcon: {
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    color: "rgba(255, 255, 255, 0.7)",
  },

  footerLabel: {
    marginTop: 5,
    color: "rgba(255, 255, 255, 0.7)",
  },
});
