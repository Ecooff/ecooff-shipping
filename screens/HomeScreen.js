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
import { ProgressBar, Colors } from 'react-native-paper';

{ /* COMPONENTS */ }
import { MenuComponent, FooterComponent } from "../components";

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
        <View style={[styles.dateBox, styles.shadowStyle]}>

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
          <Text style={[globalStyles.fontLarge, globalStyles.widthFluid,{textAlign: 'center'}]}>39</Text>
          <Text style={[globalStyles.fontMedium, globalStyles.widthFluid,{textAlign: 'center'}]}>Ordenes</Text>
        </View>

        <View>
          <Text style={[globalStyles.fontLarge, globalStyles.widthFluid,{textAlign: 'center'}]}>14</Text>
          <Text style={[globalStyles.fontMedium, globalStyles.widthFluid,{textAlign: 'center'}]}>Comercios</Text>
        </View>

        <View>
          <Text style={[globalStyles.fontLarge, globalStyles.widthFluid,{textAlign: 'center'}]}>137</Text>
          <Text style={[globalStyles.fontMedium, globalStyles.widthFluid,{textAlign: 'center'}]}>Bolsas</Text>
        </View>

      </View>

      <View style={styles.progressBarContainer}>

        <Text style={[globalStyles.fontBold, globalStyles.fontLarge]}>Evolución</Text>

        <View style={[globalStyles.row, globalStyles.alignItemsCenter]}>

        <ProgressBar style={globalStyles.widthEightyFive} progress={0.5} color={'red'} />
        <Text style={{width:'10%'}}>90%</Text>

        </View>

      </View>

      {/* FOOTER */}
      <FooterComponent />

    </View>
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

  shadowStyle: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4,
  },

  title: {
    textAlign: 'center',
    marginVertical: 45
  },

  progressBarContainer: {
    marginTop: 60,
    paddingHorizontal: 35
  }

});
