import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Pressable,
  Modal,
} from "react-native";
import globalStyles from "../styles/styles";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";

{ /* COMPONENTS */ }
import { MenuComponent, FooterComponent, ProgressBarComponent } from "../components";

{ /* SERVICES */ }
import ordersService from "../services/OrdersService";

const HomeScreen = () => {

  const user = useSelector(selectUser);
  const navigator = useNavigation();
  const [month, setMonth] = useState('');

  useEffect(() => {

    switch (new Date().getMonth()) {
      case 0:
        setMonth('Ene');
        break;
      case 1:
        setMonth('Feb');
        break;
      case 2:
        setMonth('Mar');
        break;
      case 3:
        setMonth('Abr');
        break;
      case 4:
        setMonth('May');
        break;
      case 5:
        setMonth('Jun');
        break;
      case 6:
        setMonth('Jul');
        break;
      case 7:
        setMonth('Ago');
        break;
      case 8:
        setMonth('Sep');
        break;
      case 9:
        setMonth('Oct');
        break;
      case 10:
        setMonth('Nov');
        break;
      case 11:
        setMonth('Div');
        break;
    }

  }, []);

  // FOR CLOSEING THE MODAL
  const callback = (param) => {
  };

  return (
    <View style={[styles.homeContainer]}>

      {/* VIEW */}
      <View style={styles.mainContainer}>

        <View style={[globalStyles.row, globalStyles.justifyContentCenter, globalStyles.widthFluid]}>
          <View style={[styles.dateBox, globalStyles.shadowStyle]}>

            <Text style={globalStyles.fontBold}>
              {new Date().getDate()}
            </Text>

            <Text>
              {month}
            </Text>

          </View>
        </View>

        <Text style={[globalStyles.fontBold, globalStyles.fontLarge, globalStyles.widthFluid, styles.title]}>Pedidos del día</Text>

        <View style={[globalStyles.row, globalStyles.justifyContentAround, globalStyles.widthFluid]}>

          <View>
            <Text style={[globalStyles.fontLarge, globalStyles.widthFluid, globalStyles.textCenter, { marginBottom: 10 }]}>39</Text>
            <Text style={[globalStyles.fontMedium, globalStyles.widthFluid, globalStyles.textCenter, { marginBottom: 10 }]}>Ordenes</Text>
          </View>

          <View>
            <Text style={[globalStyles.fontLarge, globalStyles.widthFluid, globalStyles.textCenter, { marginBottom: 10 }]}>14</Text>
            <Text style={[globalStyles.fontMedium, globalStyles.widthFluid, globalStyles.textCenter, { marginBottom: 10 }]}>Comercios</Text>
          </View>

          <View>
            <Text style={[globalStyles.fontLarge, globalStyles.widthFluid, globalStyles.textCenter, { marginBottom: 10 }]}>137</Text>
            <Text style={[globalStyles.fontMedium, globalStyles.widthFluid, globalStyles.textCenter, { marginBottom: 10 }]}>Bolsas</Text>
          </View>

        </View>

        <View style={[styles.progressBarContainer, globalStyles.widthFluid]}>

          <Text style={[globalStyles.fontBold, globalStyles.fontLarge]}>Evolución</Text>

          {/* PROGRESS BAR */}
          <Text style={[globalStyles.fontMedium, { marginTop: 20 }]}>Pedidos listos</Text>
          <ProgressBarComponent color1={'#E09B14'} color2={'#F8BC47'} percentage={62} showNumber={true} />

          <Text style={[globalStyles.fontMedium, { marginTop: 10 }]}>Pedidos recogidos</Text>
          <ProgressBarComponent color1={'#0480A9'} color2={'#26BCED'} percentage={87} showNumber={true} />

          <Text style={[globalStyles.fontMedium, { marginTop: 10 }]}>Pedidos entregados</Text>
          <ProgressBarComponent color1={'#429C7D'} color2={'#7ECFB3'} percentage={24} showNumber={true} />

        </View>

      </View>

      {/* FOOTER */}
      <FooterComponent />

    </View >
  );
};

export default HomeScreen;

const styles = StyleSheet.create({

  homeContainer: {
    flex: 1,
  },

  mainContainer: {
    paddingBottom: 125,
    flexWrap: 'wrap',
    flex:1,
    flexDirection:'row',
    alignContent:'space-between',
    justifyContent:'center'
  },

  dateBox: {
    width: 65,
    height: 65,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 30
  },

  title: {
    textAlign: 'center',
  },

  progressBarContainer: {
    paddingHorizontal: 35
  },

});
