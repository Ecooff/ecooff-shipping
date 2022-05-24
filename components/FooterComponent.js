import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { authStyles } from "../styles/authStyles";
import globalStyles from "../styles/styles";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';

// ICONS
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";


export const FooterComponent = () => {
  const navigator = useNavigation();
  return (
    <View style={styles.footerContainer}>


      <LinearGradient
        // Button Linear Gradient
        colors={['#0487B1', '#12A8D9']}
        start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
        style={[styles.footer, globalStyles.row, globalStyles.alignItemsCenter]}
      >

        {/* HOME */}
        <TouchableOpacity
          onPress={() => navigator.navigate("Home")}
          style={styles.footerIcon}
        >
          <Ionicons name="home-outline" style={styles.icon} size={24} />
          <Text style={[styles.footerLabel, globalStyles.fontXSmall]}>
            Inicio
          </Text>
        </TouchableOpacity>

        {/* PEDIDOS DEL DÍA */}
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
            Pedidos del día
          </Text>
        </TouchableOpacity>

        {/* A ENTREGAR */}
        <TouchableOpacity
          onPress={() => navigator.navigate("Cart")}
          style={styles.footerIcon}
        >
          <MaterialCommunityIcons name="truck-fast" size={24} style={styles.icon} />
          <Text style={[styles.footerLabel, globalStyles.fontXSmall]}>
            A entregar
          </Text>
        </TouchableOpacity>

      </LinearGradient>

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
    backgroundColor: "rgba(77, 181, 145, 0.97)",
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
