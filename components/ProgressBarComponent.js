import React, { Component } from "react";
import { StyleSheet, View, Image, Pressable, Text, TouchableOpacity, SafeAreaView } from "react-native";
import globalStyles from "../styles/styles";
import { LinearGradient } from 'expo-linear-gradient';

export const ProgressBarComponent = ({
  color1,
  color2,
  percentage,
  showNumber,
  thin
}) => {

  return (
    <View style={[globalStyles.row, globalStyles.alignItemsCenter]}>

        <View style={showNumber ? globalStyles.widthEightyFive : globalStyles.widthFluid}>

          <View style={[globalStyles.widthFluid, globalStyles.baseColor, styles.progressBar, thin ? styles.thin : styles.fat]}></View>
          <LinearGradient
            // Button Linear Gradient
            colors={[color1, color2]}
            start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }}
            style={[globalStyles.baseColor, { width: percentage + '%' }, styles.progressBar, thin ? styles.thin : styles.fat]}
          ></LinearGradient>

        </View>

        {
          showNumber && <Text style={[styles.progressPorcentage, { marginTop: 12 }]}>{percentage}%</Text>
        } 

      </View>
  );
};

const styles = StyleSheet.create({

  progressBar: {
    borderRadius: 100,
    position: 'absolute'
  },

  fat: {
    height: 14,
  },

  thin: {
    height: 7,
  },

  progressPorcentage: {
    width: '15%',
    textAlign: 'right'
  }

});
