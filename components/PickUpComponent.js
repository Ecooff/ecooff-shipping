import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import globalStyles from "../styles/styles";
import { commonFunctions } from "../utils";

// COMPONENTS
import ProgressBarComponent from "../components/ProgressBarComponent";
import BagComponent from "./BagComponent";

export const PickUpComponent = ({
  provider
}) => {

  const [opened, setOpened] = useState(false);

  useEffect(() => {

    console.log('Component', provider);

  }, []);

  return (
    <View style={[globalStyles.widthFluid, globalStyles.shadowStyle, styles.providerCard]}>

      <View style={!opened && styles.closed}>

        {/* PROVIDER INFO */}
        <View style={[globalStyles.row, globalStyles.alignItemsCenter]}>

          <View style={[globalStyles.row, globalStyles.alignItemsCenter, { width: '80%' }]}>

            <Image
              style={[globalStyles.shadowStyle, styles.provImg]}
              source={{ uri: provider.providerImg }}
            />

            <Text style={[globalStyles.fontBold]}>{provider.providerName}</Text>
            <Text style={{ marginLeft: 5 }}>- {commonFunctions.capitalize(provider.providerAddress.street)} {provider.streetNumber}</Text>

          </View>

          <View style={styles.progBar}>

            <ProgressBarComponent color1={'#429C7D'} color2={'#7ECFB3'} percentage={70} thin={true} />

          </View>

        </View>

        {/* BAGS */}
        <View style={[{ marginTop: 30 }]}>

          {/* {
            provider.bags.map((bag) => {
              <BagComponent key={bag.bagId} />
            })
          } */}

        </View>

      </View>

      {
        !opened ?

          <TouchableOpacity
            style={[globalStyles.row, globalStyles.justifyContentCenter, globalStyles.alignItemsCenter, { marginBottom: 10 }]}
            onPress={() => setOpened(true)}
          >
            <Text style={styles.seeLessLabel}>Ver mas</Text>
            <MaterialIcons name="keyboard-arrow-down" size={12} color="grey" style={{ marginStart: 2 }} />
          </TouchableOpacity>
          :
          <TouchableOpacity
            style={[globalStyles.row, globalStyles.justifyContentCenter, globalStyles.alignItemsCenter, { marginBottom: 10 }]}
            onPress={() => setOpened(false)}
          >
            <Text style={styles.seeLessLabel}>Ver menos</Text>
            <MaterialIcons name="keyboard-arrow-up" size={12} color="grey" style={[{ marginStart: 2 }, { marginTop: 2 }]} />
          </TouchableOpacity>
      }

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
    height: 35,
    overflow: 'hidden'
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
  }

});