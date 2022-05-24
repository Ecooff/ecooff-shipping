import React, { Component } from "react";
import { StyleSheet, View, Image, Pressable, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import globalStyles from "../styles/styles";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


export const BagComponent = () => {

  return (
    <View style={[globalStyles.shadowStyle, styles.bagCard]}>

      <View style={[globalStyles.row, globalStyles.justifyContentBetween, globalStyles.alignItemsCenter]}>

        <View style={[globalStyles.row, globalStyles.alignItemsCenter]}>

          <MaterialCommunityIcons name="shopping" style={styles.icon} size={30} />

          <Text style={[globalStyles.fontBold, { marginLeft: 10 }]}>#672GL4</Text>

        </View>

        <TouchableOpacity
          style={[globalStyles.shadowStyle, styles.button]}
        >
          {true == false ? (
            <View>
              <ActivityIndicator size="small" color="#FFF" />
            </View>
          ) : (
            <Text style={[styles.buttonText]}>
              Recoger
            </Text>
          )}
        </TouchableOpacity>

        <View>
          <MaterialIcons name="shopping-basket" size={28} color="black" />
          <View style={[globalStyles.shadowStyle, styles.budget]}><Text style={[globalStyles.textCenter]}>3</Text></View>
        </View>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({

  bagCard: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    borderLeftColor: '#4DB591',
    borderLeftWidth: 10,
    marginBottom: 10
  },

  button: {
    borderColor: '#4DB591',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8
  },

  buttonText: {
    color: '#4DB591'
  },

  budget: {
    borderRadius: 50,
    backgroundColor: 'white',
    padding: 3,
    position: 'absolute',
    top: 12,
    right: -4
  }

});
