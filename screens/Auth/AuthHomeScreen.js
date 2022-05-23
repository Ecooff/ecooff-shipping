import React, { useEffect, useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import authStyles from "../../styles/authStyles";
import globalStyles from "../../styles/styles";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../store/userSlice";

// SERVICES
import { AuthService } from "../../services";

const AuthHomeScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const navigator = useNavigation();
  const dispatch = useDispatch();

  const me = (user, token) => {
    user.token = token;
    dispatch(login(user));
    navigator.navigate("Home");
  };

  const verifyData = (data) => {
    if (data) {
      //setIsLoading(true);
    } else {
      //setIsLoading(false);
      setIsLoading(false);
    }
  };

  useEffect(async () => {
    setTimeout(() => {
      // la logica de esto es esperar a que traiga los datos en el GET, y si
      setIsLoading(false); // no trae los datos muestra los botones
    }, 2000);

    try {
      const token = await AsyncStorage.getItem("@me");
      
      AuthService.retrieveUser(user)
      .then((response) => user = setUser(response.data))
      .catch((err) => console.log("something was wrong", err));
      
      //hacer un if user.data es undefined que muestre el loading . la idea es que espere 10segs y cambie el estado
      user ? me(user.data, token) : setIsLoading(false);
      //!user ? setIsLoading(false) : setIsLoading(true);
      //user ? setIsLoading(false) : setIsLoading(true);

      //verifyData(user.data)
      //user ? setIsLoading(true) : setIsLoading(false);
      // SI isLoading es TRUE se muestra el loading
      // funcion que haga un await en data y despues verifique si es true y si es false, y a partir de eso haga cambios
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <View style={[styles.mainContaner, globalStyles.alignItemsCenter]}>
      <StatusBar barStyle="light-content" />

      {/* LOGO */}
      <Image
        style={[styles.logoBanner, styles.absolute]}
        source={require("../../assets/icon-white.png")}
      />

      {/* BANNER */}
      <View style={[styles.imgBanner, styles.absolute]}>
        <Image
          style={styles.banner}
          source={require("../../assets/bg-plants.png")}
        />
      </View>

      {/* WELCOME MESSAGE */}
      <View style={authStyles.titleContainer}>
        <Text
          style={[
            authStyles.title,
            globalStyles.fontLarge,
            globalStyles.textCenter,
          ]}
        >
          ¡Bienvenidx a Ecooff!
        </Text>
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" color="#4db591" />
      ) : (
        <View
          style={[authStyles.buttonContainer, globalStyles.widthEightyFive]}
        >
          <TouchableOpacity
            onPress={() => navigator.navigate("Login")}
            style={[
              styles.loginButton,
              globalStyles.button,
              globalStyles.primary,
              globalStyles.widthFluid,
            ]}
          >
            <Text style={globalStyles.textWhite}>Iniciar sesión</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigator.navigate("Signup")}
            style={[
              globalStyles.button,
              globalStyles.secondary,
              globalStyles.widthFluid,
            ]}
          >
            <Text style={globalStyles.textWhite}>Registrarme</Text>
          </TouchableOpacity>
        </View>
      )}
      {/* ROCIAL ROW */}
      <View
        style={[
          styles.socialRow,
          globalStyles.row,
          globalStyles.alignItemsCenter,
        ]}
      >
        <View style={styles.lines}></View>

        <AntDesign name="instagram" size={18} style={styles.socialColor} />

        <FontAwesome name="facebook-f" size={18} style={styles.socialColor} />

        <Entypo name="twitter" size={18} style={styles.socialColor} />

        <View style={styles.lines}></View>
      </View>
    </View>
  );
};

export default AuthHomeScreen;

const styles = StyleSheet.create({
  mainContaner: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 60,
  },

  loginButton: {
    marginBottom: 15,
  },

  socialRow: {
    width: "85%",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 60,
  },

  lines: {
    width: "30%",
    height: 1,
    backgroundColor: "#8ba495",
  },

  socialColor: {
    color: "#8ba495",
  },

  absolute: {
    position: "absolute",
  },

  imgBanner: {
    top: 0,
  },

  logoBanner: {
    width: 120,
    height: 120,
    top: 30,
    zIndex: 3,
    // elevation: 3,
  },

  banner: {
    top: -100,
    borderBottomLeftRadius: 500,
    borderBottomRightRadius: 500,
  },
});
