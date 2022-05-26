import React, { useEffect, useState } from "react";
import { ScrollView, StatusBar, StyleSheet, Image, Text, View, TextInput, TouchableOpacity, ActivityIndicator, Pressable, Modal } from "react-native";
import globalStyles from "../styles/styles";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";
import { LinearGradient } from 'expo-linear-gradient';

{ /* COMPONENTS */ }
import { MenuComponent, FooterComponent, PickUpComponent, ProgressBarComponent } from "../components";

{ /* SERVICES */ }
import ordersService from "../services/OrdersService";
import { SafeAreaView } from "react-native-safe-area-context";

const PickUpView = () => {

  const user = useSelector(selectUser);
  const navigator = useNavigation();

  const buttongradient = ['#0986AF', '#28A5CE'];
  const whitegradient = ['#FFF', '#FFF'];

  return (
    <View style={[globalStyles.homeContainer]}>

      {/* VIEW */}
      <View style={[globalStyles.row, styles.viewTitle]}>
        <Text style={[globalStyles.fontBold, globalStyles.fontLarge]}>Pedidos a recoger</Text>
        <Text style={[globalStyles.fontMedium, { margin: 6 }]}>(30)</Text>
      </View>

      <View style={styles.progressBarCont}>
        <ProgressBarComponent color1={'#037AA0'} color2={'#67D4F8'} percentage={78} thin={true} />
        <Text style={[globalStyles.fontMain, styles.progresLabel]}>40% de los productos listos</Text>
      </View>

      <View style={[globalStyles.row, globalStyles.justifyContentAround, globalStyles.alignItemsCenter, styles.buttonsRow]}>

        <TouchableOpacity
        >

          <LinearGradient
            // Button Linear Gradient
            colors={buttongradient}
            start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }}
            style={[globalStyles.shadowStyle, styles.button]}
          >

            <Text style={[styles.buttonText, styles.selected, globalStyles.textWhite]}>
              Todos
            </Text>

          </LinearGradient>

        </TouchableOpacity>

        <TouchableOpacity
          style={[globalStyles.shadowStyle, styles.button]}
        >

          <LinearGradient
            // Button Linear Gradient
            colors={whitegradient}
            start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }}
          >

            <Text style={[styles.buttonText, styles.selected]}>
              Pedidos listos
            </Text>

          </LinearGradient>

        </TouchableOpacity>

        <TouchableOpacity
          style={[globalStyles.shadowStyle, styles.button]}
        >

          <LinearGradient
            // Button Linear Gradient
            colors={whitegradient}
            start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }}
          >

            <Text style={[styles.buttonText, styles.selected]}>
              En preparación
            </Text>

          </LinearGradient>

        </TouchableOpacity>

      </View>

      <ScrollView style={styles.scrollContainer}>

        <PickUpComponent />
        <PickUpComponent />
        <PickUpComponent />

        <SafeAreaView style={{ height: 100 }}></SafeAreaView>

      </ScrollView>

    </View>
  );
};

export default PickUpView;

const styles = StyleSheet.create({

  progressBarCont: {
    paddingHorizontal: 20,
    marginTop: 20
  },

  viewTitle: {
    paddingHorizontal: 20,
    marginTop: 25
  },

  progresLabel: {
    textAlign: 'center',
    marginTop: 15,
    color: 'grey'
  },

  buttonsRow: {
    paddingHorizontal: 20,
    marginTop: 20,
    zIndex: 30,
    
    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 10,

  },

  button: {
    borderColor: '#4DB591',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6
  },

  buttonText: {
    color: 'grey'
  },
  
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  }

});
