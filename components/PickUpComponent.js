import React, { Component } from "react";
import { StyleSheet, View, Image, Pressable, Text, TouchableOpacity, SafeAreaView } from "react-native";
import globalStyles from "../styles/styles";

// COMPONENTS
import { ProgressBarComponent, BagComponent } from "../components";


export const PickUpComponent = () => {

  return (
    <View style={[globalStyles.widthFluid, globalStyles.shadowStyle, styles.providerCard]}>

      {/* PROVIDER INFO */}
      <View style={[globalStyles.row, globalStyles.alignItemsCenter]}>

        <View style={[globalStyles.row, globalStyles.alignItemsCenter, {width:'80%'}]}>

          <Image
            style={[globalStyles.shadowStyle, styles.provImg]}
            source={{ uri: "https://images.rappi.com.ar/marketplace/coto-1599858972.png?d=200x200&e=webp" }}
          />

          <Text style={[globalStyles.fontBold]}>COTO</Text>
          <Text style={{ marginLeft: 5 }}>- Av. Livertador 3982</Text>

        </View>

        <View style={styles.progBar}>

          <ProgressBarComponent color1={'#429C7D'} color2={'#7ECFB3'} percentage={78} thin={true} />

        </View>

      </View>

      {/* BAGS */}
      <View style={[{marginTop: 30}]}>

        <BagComponent />
        <BagComponent />
        <BagComponent />

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
    width: 25,
    height: 25,
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
