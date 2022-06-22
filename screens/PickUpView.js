import React, { useEffect, useState } from "react";
import { ScrollView, StatusBar, StyleSheet, Image, Text, View, TextInput, TouchableOpacity, ActivityIndicator, Pressable, Modal } from "react-native";
import globalStyles from "../styles/styles";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

{ /* COMPONENTS */ }
import { PickUpComponent, ProgressBarComponent } from "../components";

{ /* SERVICES */ }
import ordersService from "../services/OrdersService";
import { SafeAreaView } from "react-native-safe-area-context";
import { List } from "react-native-paper";

const PickUpView = () => {

  const user = useSelector(selectUser);
  const [filter, setFilter] = useState(0);
  const [loading, setLoading] = useState(false);
  const [listOfPickUps, setListOfPickUps] = useState({});

  const buttongradient = ['#0986AF', '#28A5CE'];
  const whitegradient = ['#FFF', '#FFF'];

  useEffect(() => {

    getOrderList(filter);

  }, []);

  const changeFilter = (newFilter) => {
    if (filter != newFilter) {
      setFilter(newFilter);
      getOrderList(newFilter);
    }
  }

  const getOrderList = (newFilter) => {
    setLoading(true);
    ordersService.getOrdersToPickUp(user, newFilter).then((response) => {
      setLoading(false);
      setListOfPickUps(response.data);
    }).catch((err) => console.log('ERROR PICKUP VIEW ', err));
  }

  return (
    <View style={[globalStyles.homeContainer]}>

      {/* VIEW */}
      <View style={[globalStyles.row, styles.viewTitle]}>
        <Text style={[globalStyles.fontBold, globalStyles.fontLarge]}>Pedidos a recoger</Text>
        <Text style={[globalStyles.fontMedium, { margin: 6 }]}>({listOfPickUps.bagsReady})</Text>
      </View>

      <View style={styles.progressBarCont}>
        <ProgressBarComponent color1={'#037AA0'} color2={'#67D4F8'} percentage={listOfPickUps.bagsReady} thin={true} />
        <Text style={[globalStyles.fontMain, styles.progresLabel]}>{listOfPickUps.bagsReady}% de los productos listos</Text>
      </View>

      <View style={[globalStyles.row, globalStyles.justifyContentAround, globalStyles.alignItemsCenter, styles.buttonsRow]}>

        <TouchableOpacity
          onPress={() => changeFilter(0)}
          disabled={loading || listOfPickUps.length > 0}
          style={filter != 0 && [globalStyles.shadowStyle, styles.button]}
        >

          <LinearGradient
            // Button Linear Gradient
            colors={filter == 0 ? buttongradient : whitegradient}
            start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }}
            style={filter == 0 && [globalStyles.shadowStyle, styles.button]}
          >

            <Text style={[styles.buttonText, styles.selected, filter == 0 && globalStyles.textWhite]}>
              Todos
            </Text>

          </LinearGradient>

        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => changeFilter(1)}
          disabled={loading || listOfPickUps.length > 0}
          style={filter != 1 && [globalStyles.shadowStyle, styles.button]}
        >

          <LinearGradient
            // Button Linear Gradient
            colors={filter == 1 ? buttongradient : whitegradient}
            start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }}
            style={filter == 1 && [globalStyles.shadowStyle, styles.button]}
          >

            <Text style={[styles.buttonText, styles.selected, filter == 1 && globalStyles.textWhite]}>
              Pedidos listos
            </Text>

          </LinearGradient>

        </TouchableOpacity
        >

        <TouchableOpacity
          onPress={() => changeFilter(2)}
          disabled={loading || listOfPickUps.length > 0}
          style={filter != 2 && [globalStyles.shadowStyle, styles.button]}
        >

          <LinearGradient
            // Button Linear Gradient
            colors={filter == 2 ? buttongradient : whitegradient}
            start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }}
            style={filter == 2 && [globalStyles.shadowStyle, styles.button]}
          >

            <Text style={[styles.buttonText, styles.selected, filter == 2 && globalStyles.textWhite]}>
              Recogidas
            </Text>

          </LinearGradient>

        </TouchableOpacity>

      </View>

      <ScrollView style={styles.scrollContainer}>

        {
          // IF LOADING
          !loading ?
            // IF THERES DATA
            listOfPickUps.finalArray != null && listOfPickUps.finalArray.length > 0 ?
              listOfPickUps.finalArray.map((provider) => {
                return (
                  <PickUpComponent key={provider.orderId} provider={provider}  />
                )
              })
              :
              <View style={globalStyles.emptyListContainer}>
                <MaterialIcons name="remove-shopping-cart" size={100} color="lightgrey" />
                <Text style={[globalStyles.textCenter, globalStyles.fontMedium, globalStyles.fontBold, globalStyles.emptyListText]}>Sin ordenes para mostrar</Text>
              </View>
            :
            <ActivityIndicator size="large" style={globalStyles.loaders} />
        }

        <SafeAreaView style={{ height: 120 }}></SafeAreaView>

      </ScrollView>

    </View>
  );
};

export default PickUpView;

const styles = StyleSheet.create({

  progressBarCont: {
    paddingHorizontal: 20,
    marginTop: 20
  },

  viewTitle: {
    paddingHorizontal: 20,
    marginTop: 25
  },

  progresLabel: {
    textAlign: 'center',
    marginTop: 15,
    color: 'grey'
  },

  buttonsRow: {
    paddingHorizontal: 20,
    marginTop: 20,
    zIndex: 30,

    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 10,

  },

  button: {
    borderColor: '#4DB591',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6
  },

  buttonText: {
    color: 'grey'
  },

  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  }

});