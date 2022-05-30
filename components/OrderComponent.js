import React, { Component } from "react";
import { StyleSheet, View, Image, Pressable, Text, TouchableOpacity, SafeAreaView } from "react-native";
import globalStyles from "../styles/styles";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { commonFunctions } from "../utils";

export const OrderComponent = (
  order
) => {

  const navigator = useNavigation();

  return (

    <View style={[globalStyles.shadowStyle, styles.orderCard, order.order.status != 'Completada' && styles.bg_pending]}>

      <View style={[globalStyles.row, globalStyles.justifyContentBetween, globalStyles.alignItemsCenter]}>

        <View style={[globalStyles.row, globalStyles.justifyContentBetween, globalStyles.alignItemsCenter]}>

          <View>
            <MaterialIcons name="shopping-basket" size={28} color="black" />
            <View style={[globalStyles.shadowStyle, styles.budget]}><Text style={[globalStyles.textCenter]}>{order.order.bagsLength}</Text></View>
          </View>

          <Text style={[globalStyles.fontMedium, {marginStart: 16}]}>{order.order.userName}</Text>

        </View>

        <View style={[globalStyles.row, globalStyles.alignItemsCenter]}>

          <Text style={[globalStyles.fontBold, globalStyles.fontMedium, styles.colorAlert, order.order.status != 'Completada' && styles.text_pending]}>#{order.order.orderId.slice(order.order.orderId.length -6)}</Text>

        </View>

      </View>

      <View style={[globalStyles.row, globalStyles.justifyContentBetween, globalStyles.alignItemsCenter, {marginTop: 18}]}>

        <Text style={styles.addressText}>{commonFunctions.capitalize(order.order.street)} {order.order.streetNumber}, P{order.order.floor} D{order.order.door}</Text>

        <TouchableOpacity
        style={[globalStyles.row, globalStyles.alignItemsCenter]}
        onPress={() => navigator.navigate("DetailScreen", {orderId: order.order.orderId})}
        >
          <Text style={[styles.addressText, {fontSize: 12}]}>Ver detalle</Text>
          <MaterialIcons name="arrow-forward-ios" size={12} color="grey" style={{marginStart: 2}} />
        </TouchableOpacity>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({

  orderCard: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    borderLeftColor: '#4DB591',
    borderLeftWidth: 10,
    marginBottom: 15
  },

  bg_pending: {
    borderLeftColor: '#F0A718'
  },

  text_pending: {
    color: '#F0A718'
  },

  colorAlert: {
    color: '#4DB591'
  },

  budget: {
    borderRadius: 50,
    backgroundColor: 'white',
    padding: 3,
    position: 'absolute',
    top: 12,
    right: -4
  },

  addressText: {
    color: 'grey'
  }

});
