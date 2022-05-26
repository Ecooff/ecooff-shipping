import React, { useState } from "react";
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
import HomeScreen from "./HomeScreen";
import DeliveryView from "./DeliveryView";
import PickUpView from "./PickUpView";

{ /* COMPONENTS */ }
import { MenuComponent, FooterComponent, ProgressBarComponent } from "../components";

{ /* SERVICES */ }
import ordersService from "../services/OrdersService";

const IndexScreen = () => {

  const [tab, setTab] = useState(<HomeScreen />);
  const listOfViews = [
    <HomeScreen />,
    <PickUpView />,
    <DeliveryView />
  ];

  const callback = (param) => {
    setTab(listOfViews[param]);
  };

  return (
    <View style={[globalStyles.homeContainer]}>

      {/* MENU */}
      <MenuComponent style={{ position: "absolute", top: 30 }} />

      { tab }

      {/* FOOTER */}
      <FooterComponent parentCallback={callback} />

    </View >
  );
};

export default IndexScreen;

const styles = StyleSheet.create({

});
