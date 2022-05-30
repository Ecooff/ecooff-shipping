import React, { Component, useState } from "react";
import { StyleSheet, View, Image, Pressable, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import globalStyles from "../styles/styles";

export const OrderBargsComponent = ({
  bag
}) => {

  const [opened, setOpened] = useState(false);

  return (
    <View style={[styles.providerCard, globalStyles.shadowStyle]}>

      <View style={[globalStyles.widthFluid, !opened && styles.closed]}>

        {/* PROVIDER INFO */}
        <View style={[globalStyles.row, globalStyles.justifyContentBetween, globalStyles.alignItemsCenter, { marginBottom: 30 }]}>

          <View style={[globalStyles.row, globalStyles.alignItemsCenter]}>

            <Image
              style={[globalStyles.shadowStyle, styles.provImg]}
              source={{ uri: bag.providerImg }}
            />

            <Text style={[globalStyles.fontBold]}>{bag.providerName}</Text>

          </View>

          {
            !opened &&
            <TouchableOpacity
              style={[globalStyles.row, globalStyles.alignItemsCenter]}
              onPress={() => setOpened(true)}
            >
              <Text style={[styles.addressText, { fontSize: 12 }, { color: 'grey' }]}>Ver detalle</Text>
              <MaterialIcons name="arrow-forward-ios" size={12} color="grey" style={{ marginStart: 2 }} />
            </TouchableOpacity>
          }

        </View>

        {/* BAGS */}

        {
          bag.productArray.map((item) => {
            return (
              <View key={item.productId} style={[globalStyles.row, globalStyles.justifyContentBetween, globalStyles.alignItemsCenter, styles.productList]}>

                <View style={[globalStyles.row, globalStyles.alignItemsCenter]}>

                  <View style={globalStyles.shadowStyle}>
                    <Image
                      style={[globalStyles.shadowStyle, styles.productImg]}
                      source={{ uri: item.img }}
                    />
                  </View>

                  <Text style={[globalStyles.fontMedium, { marginLeft: 5 }]}>{item.name}</Text>

                </View>

                <Text style={globalStyles.fontMedium}>x{item.quantity}</Text>

              </View>
            )

          })
        }

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
