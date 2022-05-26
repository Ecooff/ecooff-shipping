import React, { Component, useState } from "react";
import { StyleSheet, View, Image, Pressable, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import globalStyles from "../styles/styles";

export const OrderBargsComponent = () => {

  const [opened, setOpened] = useState(false);

  return (
    <View style={[styles.providerCard, globalStyles.shadowStyle]}>
      <View style={[globalStyles.widthFluid, !opened && styles.closed]}>

        {/* PROVIDER INFO */}
        <View style={[globalStyles.row, globalStyles.justifyContentBetween, globalStyles.alignItemsCenter, { marginBottom: 30 }]}>

          <View style={[globalStyles.row, globalStyles.alignItemsCenter]}>

            <Image
              style={[globalStyles.shadowStyle, styles.provImg]}
              source={{ uri: "https://images.rappi.com.ar/marketplace/coto-1599858972.png?d=200x200&e=webp" }}
            />

            <Text style={[globalStyles.fontBold]}>COTO</Text>

          </View>

          {
            !opened &&
            <TouchableOpacity
              style={[globalStyles.row, globalStyles.alignItemsCenter]}
              onPress={() => setOpened(true)}
            >
              <Text style={[styles.addressText, { fontSize: 12 }, {color: 'grey'}]}>Ver detalle</Text>
              <MaterialIcons name="arrow-forward-ios" size={12} color="grey" style={{ marginStart: 2 }} />
            </TouchableOpacity>
          }

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

            <Text style={[globalStyles.fontMedium, { marginLeft: 5 }]}>Pan lactal</Text>

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

            <Text style={[globalStyles.fontMedium, { marginLeft: 5 }]}>Pan lactal</Text>

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

            <Text style={[globalStyles.fontMedium, { marginLeft: 5 }]}>Pan lactal</Text>

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

            <Text style={[globalStyles.fontMedium, { marginLeft: 5 }]}>Pan lactal</Text>

          </View>

          <Text style={globalStyles.fontMedium}>x4</Text>

        </View>

        <TouchableOpacity
          onPress={() => setOpened(false)}
        >
          <Text style={styles.seeLessLabel}>Ver menos</Text>
        </TouchableOpacity>


      </View>
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

  closed: {
    height: 50,
    overflow: 'hidden'
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
