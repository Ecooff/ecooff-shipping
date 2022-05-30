import React, { Component, useEffect, useState } from "react";
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

  const [stat, setStat] = useState(0);

  useEffect(() => {

    incrementAnimmation(0, percentage);

  }, [percentage]);

  const incrementAnimmation = (i, maxLength) => {

    if (maxLength > 0) {

      setTimeout(function () {
        setStat(i);
        i++;
        i <= maxLength && incrementAnimmation(i, maxLength);
      }, 50 / maxLength);

    }


  };

  return (
    <View style={[globalStyles.row, globalStyles.alignItemsCenter]}>

      <View style={showNumber ? globalStyles.widthEightyFive : globalStyles.widthFluid}>

        <View style={[globalStyles.widthFluid, globalStyles.baseColor, styles.progressBar, thin ? styles.thin : styles.fat]}></View>
        <LinearGradient
          // Button Linear Gradient
          colors={[color1, color2]}
          start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }}
          style={[globalStyles.baseColor, { width: stat + '%' }, styles.progressBar, thin ? styles.thin : styles.fat]}
        ></LinearGradient>

      </View>

      {
        showNumber && <Text style={[styles.progressPorcentage, { marginTop: 12 }]}>{stat}%</Text>
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
