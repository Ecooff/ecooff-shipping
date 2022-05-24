import React, { Component } from "react";
import { StyleSheet, View, Image, Pressable, Text, TouchableOpacity, SafeAreaView } from "react-native";
import globalStyles from "../styles/styles";

export const OrderBargsComponent = () => {

  return (
    <View style={[globalStyles.widthFluid, globalStyles.shadowStyle, styles.providerCard]}>

      {/* PROVIDER INFO */}
      <View style={[globalStyles.row, globalStyles.alignItemsCenter, {marginBottom: 30}]}>

        <View style={[globalStyles.row, globalStyles.alignItemsCenter, { width: '80%' }]}>

          <Image
            style={[globalStyles.shadowStyle, styles.provImg]}
            source={{ uri: "https://images.rappi.com.ar/marketplace/coto-1599858972.png?d=200x200&e=webp" }}
          />

          <Text style={[globalStyles.fontBold]}>COTO</Text>

        </View>

        <View style={styles.progBar}>

        </View>

      </View>

      {/* BAGS */}
      <View style={[globalStyles.row, globalStyles.justifyContentBetween, globalStyles.alignItemsCenter, styles.productList]}>

        <View style={[globalStyles.row, globalStyles.alignItemsCenter]}>

          <View style={globalStyles.shadowStyle}>
            <Image
              style={[globalStyles.shadowStyle, styles.productImg]}
              source={{ uri: "https://media.justo.mx/products/7501000111206_1.jpg" }}
            />
          </View>

          <Text style={[globalStyles.fontMedium, {marginLeft: 5}]}>Pan lactal</Text>

        </View>

        <Text style={globalStyles.fontMedium}>x4</Text>

      </View>
      
      <View style={[globalStyles.row, globalStyles.justifyContentBetween, globalStyles.alignItemsCenter, styles.productList]}>

        <View style={[globalStyles.row, globalStyles.alignItemsCenter]}>

          <View style={globalStyles.shadowStyle}>
            <Image
              style={[globalStyles.shadowStyle, styles.productImg]}
              source={{ uri: "https://media.justo.mx/products/7501000111206_1.jpg" }}
            />
          </View>

          <Text style={[globalStyles.fontMedium, {marginLeft: 5}]}>Pan lactal</Text>

        </View>

        <Text style={globalStyles.fontMedium}>x4</Text>

      </View>

      <View style={[globalStyles.row, globalStyles.justifyContentBetween, globalStyles.alignItemsCenter, styles.productList]}>

        <View style={[globalStyles.row, globalStyles.alignItemsCenter]}>

          <View style={globalStyles.shadowStyle}>
            <Image
              style={[globalStyles.shadowStyle, styles.productImg]}
              source={{ uri: "https://media.justo.mx/products/7501000111206_1.jpg" }}
            />
          </View>

          <Text style={[globalStyles.fontMedium, {marginLeft: 5}]}>Pan lactal</Text>

        </View>

        <Text style={globalStyles.fontMedium}>x4</Text>

      </View>

      <View style={[globalStyles.row, globalStyles.justifyContentBetween, globalStyles.alignItemsCenter, styles.productList]}>

        <View style={[globalStyles.row, globalStyles.alignItemsCenter]}>

          <View style={globalStyles.shadowStyle}>
            <Image
              style={[globalStyles.shadowStyle, styles.productImg]}
              source={{ uri: "https://media.justo.mx/products/7501000111206_1.jpg" }}
            />
          </View>

          <Text style={[globalStyles.fontMedium, {marginLeft: 5}]}>Pan lactal</Text>

        </View>

        <Text style={globalStyles.fontMedium}>x4</Text>

      </View>

      <Text style={styles.seeLessLabel}>Ver menos</Text>

    </View>
  );
};

const styles = StyleSheet.create({

  providerCard: {
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: 'white',
    marginBottom: 20
  },

  provImg: {
    width: 35,
    height: 35,
    borderRadius: 100,
    marginEnd: 10
  },

  productList: {
    paddingHorizontal: 30,
    paddingBottom: 20
  },

  productImg: {
    width: 30,
    height: 30,
    borderRadius: 100,
    marginEnd: 10
  },

  progBar: {
    width: '20%',
    top: -4
  },

  seeLessLabel: {
    textAlign: 'center',
    color: 'grey',
    fontSize: 12,
    marginTop: 0,
    marginBottom: 8
  }

});
