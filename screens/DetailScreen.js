import React, { useEffect, useState } from "react";
import { ScrollView, StatusBar, StyleSheet, Image, Text, View, TextInput, TouchableOpacity, SafeAreaView, Pressable, Modal } from "react-native";
import globalStyles from "../styles/styles";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";

{ /* COMPONENTS */ }
import { OrderBargsComponent } from "../components";

{ /* SERVICES */ }
import ordersService from "../services/OrdersService";

const DeliveryView = () => {

  const user = useSelector(selectUser);
  const navigator = useNavigation();
  const defaultColor = ["#8e8e8e", "#cfcfd0"];
  const successColor = ["#3E9375", "#4DB591"];

  return (
    <View style={[globalStyles.homeContainer]}>

      {/* BACK BUTTON */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigator.goBack()}
      >
        <MaterialIcons name="arrow-back-ios" size={22} color="white" />
      </TouchableOpacity>

      <LinearGradient
        // Button Linear Gradient
        colors={defaultColor}
        start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }}
        style={[globalStyles.row, globalStyles.justifyContentCenter, globalStyles.alignItemsCenter, styles.mainBanner]}>

        <Text style={[globalStyles.fontBold, globalStyles.textWhite, { fontSize: 32 }]}>#4DB591</Text>

      </LinearGradient>

      {/* PERSONAL DATA */}
      <Text style={[globalStyles.widthFluid, globalStyles.textCenter, globalStyles.fontLarge, globalStyles.fontBold, { marginTop: 40 }]}>Manuel Gonzales</Text>
      <Text style={[globalStyles.widthFluid, globalStyles.textCenter, globalStyles.fontMlarge, { color: 'grey' }, { marginTop: 10 }]}>Cabildo 1928, P1 DE</Text>

      {/* BUTTON */}
      <View style={[globalStyles.row, globalStyles.justifyContentCenter, globalStyles.alignItemsCenter]}>

        <TouchableOpacity
          style={[globalStyles.shadowStyle, styles.button]}
        >

          <Text style={[globalStyles.fontMedium, styles.buttonText, styles.selected]}>
            Entregar
          </Text>

        </TouchableOpacity>

      </View>

      <ScrollView style={[{ paddingHorizontal: 30 }, { paddingTop: 10 }, { marginTop: 20 }]}>

        <OrderBargsComponent />
        <OrderBargsComponent />
        <OrderBargsComponent />
        <OrderBargsComponent />

        <SafeAreaView style={{ height: 100 }}></SafeAreaView>

      </ScrollView>

    </View>
  );
};

export default DeliveryView;

const styles = StyleSheet.create({

  backButton: {
    position: 'absolute',
    top: 70,
    left: 40,
    zIndex: 30
  },

  mainBanner: {
    width: '100%',
    height: 250
  },

  button: {
    borderColor: '#4DB591',
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 40,
  },

  buttonText: {
    color: 'grey',
    textAlign: 'center'
  },

});
