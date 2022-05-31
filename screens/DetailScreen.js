import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import globalStyles from "../styles/styles";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import { commonFunctions } from "../utils";

{ /* COMPONENTS */ }
import { OrderBargsComponent } from "../components";

{ /* SERVICES */ }
import ordersService from "../services/OrdersService";

const DeliveryView = ({ route }) => {

  const user = useSelector(selectUser);
  const navigator = useNavigation();
  const defaultColor = ["#8e8e8e", "#cfcfd0"];
  const successColor = ["#3E9375", "#4DB591"];
  const [loading, setLoading] = useState(true);
  const [statusLoader, setStatusLoader] = useState(false);
  const [order, setOrder] = useState({ userAddress: '', orderId: '', bagArray: [] });

  useEffect(() => {
    setLoading(true);
    ordersService.getOrdersDetail(user, route.params.orderId).then((response) => {
      setOrder(response.data);
      setLoading(false);
    }).catch((err) => console.log('ERROR DELIVERY VIEW ', err));

  }, []);

  const changeStatus = () => {

    setStatusLoader(true);

    let status = {
      statusCode: '3',
      id: order.orderId
    };

    ordersService.changeOrderStatus(user, status).then((response) => {
      setOrder({ ...order, status: 'Completada' });
      setStatusLoader(false);
    }).catch((err) => console.log('ERROR DELIVERY VIEW ', err));

  };

  return (
    <View style={[globalStyles.homeContainer]}>

      {/* BACK BUTTON */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigator.goBack()}
      >
        <MaterialIcons name="arrow-back-ios" size={22} color="white" />
      </TouchableOpacity>

      <LinearGradient
        // Button Linear Gradient
        colors={order.status != 'Completada' ? defaultColor : successColor}
        start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }}
        style={[globalStyles.row, globalStyles.justifyContentCenter, globalStyles.alignItemsCenter, styles.mainBanner]}>

        <Text style={[globalStyles.fontBold, globalStyles.textWhite, { fontSize: 32 }]}>#{order.orderId.slice(order.orderId.length - 6)}</Text>

      </LinearGradient>

      {
        !loading ?
          <View>
            {/* PERSONAL DATA */}
            <Text style={[globalStyles.widthFluid, globalStyles.textCenter, globalStyles.fontLarge, globalStyles.fontBold, { marginTop: 25 }]}>{order.username}</Text>
            <Text style={[globalStyles.widthFluid, globalStyles.textCenter, globalStyles.fontMlarge, { color: 'grey' }, { marginTop: 10 }]}>{commonFunctions.capitalize(order.userAddress.street)} {order.userAddress.streetNumber}, P{order.userAddress.floor} D{order.userAddress.door}</Text>

            {/* BUTTON */}
            <View style={[globalStyles.row, globalStyles.justifyContentCenter, globalStyles.alignItemsCenter]}>

              <TouchableOpacity
                onPress={() => changeStatus()}
                disabled={order.status == true}
                style={[globalStyles.shadowStyle, styles.button, order.status == 'Completada' && globalStyles.secondary]}
              >

                {
                  !statusLoader ?
                  order.status == 'Completada' ?
                    <Text style={[globalStyles.fontMedium, styles.buttonText, globalStyles.textWhite]}>
                      Entregado
                    </Text>
                    :
                    <Text style={[globalStyles.fontMedium, styles.buttonText]}>
                      Entregar
                    </Text>
                    :
                    <ActivityIndicator size="small" color="grey" style={{marginHorizontal:28}} />
                }

              </TouchableOpacity>

            </View>

            <ScrollView style={[{ paddingHorizontal: 30 }, { paddingTop: 10 }, { marginTop: 20 }]}>

              {
                order.bagArray.map((bag) => {
                  return (
                    <OrderBargsComponent key={bag.provderId} bag={bag} />
                  )
                })
              }

            </ScrollView>
          </View>
          :
          <View style={[{ flex: 1 }, { marginTop: '30%' }]}>
            <ActivityIndicator size="small" color="grey" />
          </View>
      }

    </View >
  );
};

export default DeliveryView;

const styles = StyleSheet.create({

  backButton: {
    position: 'absolute',
    top: 70,
    left: 40,
    zIndex: 30
  },

  mainBanner: {
    width: '100%',
    height: '25%'
  },

  button: {
    borderColor: '#4DB591',
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 25,
  },

  buttonText: {
    color: 'grey',
    textAlign: 'center'
  },

});
