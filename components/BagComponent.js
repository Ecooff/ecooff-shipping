import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import globalStyles from "../styles/styles";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";

{ /* SERVICES */ }
import ordersService from "../services/OrdersService";

export const BagComponent = ({
  param
}) => {

  const [bag, setBag] = useState(param);
  const [loading, setLoader] = useState(false);
  const user = useSelector(selectUser);

  const retriveBag = () => {

    setLoader(true);

    ordersService.changeBagStatus(user, {
statusCode: "2",
      orderId: bag.orderId,
      bagId: bag._id
    }).then((response) => {
      setLoader(false);
      setBag({ ...bag, status: 'Recogida' });
    }).catch((err) => console.log('ERROR PICKUP VIEW ', err));

  }

  return (
    <View style={[globalStyles.shadowStyle, styles.bagCard, bag.status == 'Pendiente' && styles.pending]}>

      <View style={[globalStyles.row, globalStyles.justifyContentBetween, globalStyles.alignItemsCenter]}>

        <View style={[globalStyles.row, globalStyles.alignItemsCenter]}>

          <MaterialCommunityIcons name="shopping" style={bag.status == 'Recogida' && styles.iconSuccess} size={30} />

          <Text style={[globalStyles.fontBold, { marginLeft: 10 }]}>#{bag.orderId.slice(bag.orderId.length - 6)}</Text>

        </View>

        {
          bag.status != 'Pendiente' &&
          <TouchableOpacity
            disabled={bag.status == 'Recogida'}
            onPress={() => retriveBag()}
            style={[globalStyles.shadowStyle, styles.button, bag.status == 'Recogida' && globalStyles.secondary]}
          >
            {
              loading ?
                <View>
                  <ActivityIndicator size={16} style={{ paddingHorizontal: 16 }} color="#000" />
                </View>
                :
                bag.status != 'Recogida' ?
                  <Text style={[styles.buttonText]}>
                    Recoger
                  </Text>
                  :
                  <Text style={[styles.buttonText, globalStyles.textWhite]}>
                    Recogida
                  </Text>
            }
          </TouchableOpacity>
        }

        <View>

          <MaterialIcons name="shopping-basket" size={28} color="black" />

          <View style={[globalStyles.shadowStyle, styles.budget]}>
            <Text style={[globalStyles.textCenter]}>{bag.products.length}</Text>
          </View>

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

  pending: {
    borderLeftColor: '#F0A718'
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
  },

  iconSuccess: {
    color: '#4DB591'
  }

});
