import React, { Component, useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { authStyles } from "../styles/authStyles";
import globalStyles from "../styles/styles";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';

// ICONS
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";


export const FooterComponent = ({
  parentCallback
}) => {

  const [tab, setTab] = useState(0);

  const changeView = (tab) => {
    setTab(tab);
    parentCallback(tab);
  }

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
          onPress={() => changeView(0)}
          style={[styles.footerIcon, {paddingHorizontal: 15}]}
        >
          <Ionicons name="home-outline" style={[styles.icon, styles.color, tab == 0 && styles.selected]} size={24} />
          <Text style={[styles.footerLabel, globalStyles.fontXSmall, styles.color, tab == 0 && styles.selected]}>
            Inicio
          </Text>
        </TouchableOpacity>

        {/* PEDIDOS DEL DÍA */}
        <TouchableOpacity
          onPress={() => changeView(1)}
          style={styles.footerIcon}
        >
          <MaterialCommunityIcons name="shopping-outline" style={[styles.icon, styles.color, tab == 1 && styles.selected]} size={24} />
          <Text style={[styles.footerLabel, globalStyles.fontXSmall, styles.color, tab == 1 && styles.selected]}>
            A recoger
          </Text>
        </TouchableOpacity>

        {/* A ENTREGAR */}
        <TouchableOpacity
          onPress={() => changeView(2)}
          style={styles.footerIcon}
        >
          <MaterialCommunityIcons name="truck-fast" size={24} style={[styles.icon, styles.color, tab == 2 && styles.selected]} />
          <Text style={[styles.footerLabel, globalStyles.fontXSmall, styles.color, tab == 2 && styles.selected]}>
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
    width:80
  },

  icon: {
    color: "rgba(255, 255, 255, 0.7)",
  },

  color: {
    opacity: 0.7
  },

  selected: {
    opacity: 1,
    color: 'white'
  },

  footerLabel: {
    marginTop: 5,
    color: "rgba(255, 255, 255, 0.7)",
  },
});
