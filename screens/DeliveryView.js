import React, { useEffect, useState } from "react";
import { useIsFocused } from '@react-navigation/native';
import { ScrollView, ActivityIndicator, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import globalStyles from "../styles/styles";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';


{ /* COMPONENTS */ }
import { OrderComponent, ProgressBarComponent } from "../components";

{ /* SERVICES */ }
import ordersService from "../services/OrdersService";
import { SafeAreaView } from "react-native-safe-area-context";

const DeliveryView = ({ navigation }) => {

  const user = useSelector(selectUser);
  const [listOfOrders, setListOfOrders] = useState({});
  const [filter, setFilter] = useState('Recogida');
  const [loading, setLoading] = useState(false);
  const buttongradient = ['#0986AF', '#28A5CE'];
  const whitegradient = ['#FFF', '#FFF'];
  const isFocused = useIsFocused();

  useEffect(() => {

    getOrderList(filter);

  }, []);

  useEffect(() => {

      isFocused && getOrderList(filter);

  }, [isFocused]);

  const changeFilter = (newFilter) => {
    if (filter != newFilter) {
      setFilter(newFilter);
      getOrderList(newFilter);
    }
  }

  const getOrderList = (newFilter) => {
    setLoading(true);
    ordersService.getOrdersToDeliver(user, newFilter).then((response) => {
      setListOfOrders(response.data);
      setLoading(false);
    }).catch((err) => console.log('ERROR DELIVERY VIEW ', err));
  }

  return (
    <View style={[globalStyles.homeContainer]}>

      {/* VIEW */}
      <View style={[globalStyles.row, styles.viewTitle]}>
        <Text style={[globalStyles.fontBold, globalStyles.fontLarge]}>Pedidos a recoger</Text>
        <Text style={[globalStyles.fontMedium, { margin: 6 }]}>({listOfOrders.ordersLength})</Text>
      </View>

      <View style={styles.progressBarCont}>
        <ProgressBarComponent color1={'#037AA0'} color2={'#67D4F8'} percentage={listOfOrders.ordersCompleted} thin={true} />
        <Text style={[globalStyles.fontMain, styles.progresLabel]}>{listOfOrders.ordersCompleted}% de los productos listos</Text>
      </View>

      <View style={[globalStyles.row, globalStyles.justifyContentAround, globalStyles.alignItemsCenter, styles.buttonsRow]}>

        <TouchableOpacity
          style={filter != 'Recogida' && [globalStyles.shadowStyle, styles.button]}
          disabled={loading || listOfOrders.length > 0}
          onPress={() => changeFilter('Recogida')}
        >

          <LinearGradient
            // Button Linear Gradient
            colors={filter == 'Recogida' ? buttongradient : whitegradient}
            start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }}
            style={filter == 'Recogida' && [globalStyles.shadowStyle, styles.button]}
          >

            <Text style={filter == 'Recogida' && [styles.buttonText, styles.selected, globalStyles.textWhite]}>
              A entregar
            </Text>

          </LinearGradient>

        </TouchableOpacity>

        <TouchableOpacity
          style={filter != 'Completada' && [globalStyles.shadowStyle, styles.button]}
          disabled={loading || listOfOrders.length > 0}
          onPress={() => changeFilter('Completada')}
        >

          <LinearGradient
            // Button Linear Gradient
            colors={filter == 'Completada' ? buttongradient : whitegradient}
            start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }}
            style={filter == 'Completada' && [globalStyles.shadowStyle, styles.button]}
          >

            <Text style={filter == 'Completada' && [styles.buttonText, styles.selected, globalStyles.textWhite]}>
              Entregados
            </Text>

          </LinearGradient>

        </TouchableOpacity>

        <TouchableOpacity
          style={filter != 'All' && [globalStyles.shadowStyle, styles.button]}
          disabled={loading || listOfOrders.length > 0}
          onPress={() => changeFilter('All')}
        >

          <LinearGradient
            // Button Linear Gradient
            colors={filter == 'All' ? buttongradient : whitegradient}
            start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }}
            style={filter == 'All' && [globalStyles.shadowStyle, styles.button]}
          >

            <Text style={filter == 'All' && [styles.buttonText, styles.selected, globalStyles.textWhite]}>
              Todos
            </Text>

          </LinearGradient>

        </TouchableOpacity>

      </View>

      <ScrollView style={styles.scrollContainer}>

        {
          // IF LOADING
          !loading ?
            // IF THERES DATA
            listOfOrders.orderArray != null && listOfOrders.orderArray.length > 0 ?
              listOfOrders.orderArray.map((order) => {
                return (
                  <OrderComponent key={order.orderId} order={order} />
                )
              })
              :
              <View style={globalStyles.emptyListContainer}>
                <MaterialCommunityIcons name="basket-remove" size={100} color="lightgrey" />
                <Text style={[globalStyles.textCenter, globalStyles.fontMedium, globalStyles.fontBold, globalStyles.emptyListText]}>Sin ordenes para mostrar</Text>
              </View>
            :
            <ActivityIndicator size="large" style={globalStyles.loaders} />
        }

        <SafeAreaView style={{ height: 110 }}></SafeAreaView>

      </ScrollView>

    </View>
  );
};

export default DeliveryView;

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
