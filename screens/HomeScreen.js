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

      {/* MENU */}
      <MenuComponent style={{ position: "absolute", top: 30 }} />

      {/* VIEW */}
      <View style={[globalStyles.row, globalStyles.justifyContentCenter]}>
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

      <View style={[globalStyles.row, globalStyles.justifyContentAround]}>

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

      <View style={styles.progressBarContainer}>

        <Text style={[globalStyles.fontBold, globalStyles.fontLarge]}>Evolución</Text>

        {/* PROGRESS BAR */}
        <Text style={[globalStyles.fontMedium, { marginTop: 20 }]}>Pedidos listos</Text>
        <ProgressBarComponent color1={'#E09B14'} color2={'#F8BC47'} percentage={62} showNumber={true} />

        <Text style={[globalStyles.fontMedium, { marginTop: 20 }]}>Pedidos recogidos</Text>
        <ProgressBarComponent color1={'#0480A9'} color2={'#26BCED'} percentage={87} showNumber={true}  />

        <Text style={[globalStyles.fontMedium, { marginTop: 20 }]}>Pedidos entregados</Text>
        <ProgressBarComponent color1={'#429C7D'} color2={'#7ECFB3'} percentage={24} showNumber={true}  />

      </View>

      {/* FOOTER */}
      <FooterComponent view={0} />

    </View >
  );
};

export default HomeScreen;

const styles = StyleSheet.create({

  homeContainer: {
    flex: 1,
  },

  dateBox: {
    width: 65,
    height: 65,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 60
  },

  title: {
    textAlign: 'center',
    marginVertical: 45
  },

  progressBarContainer: {
    marginTop: 60,
    paddingHorizontal: 35
  },

});
