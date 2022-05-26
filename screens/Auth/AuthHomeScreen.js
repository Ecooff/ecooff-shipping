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
  let token = '';

  useEffect(() => {

    setTimeout(() => {

      (async () => {

        const updateTokenn = async (token) => {

          try {
            await AsyncStorage.setItem("@me", token);
          } catch (e) {
            console.log(e);
          }
        };

        try {

          token = await AsyncStorage.getItem("@me");

          // IF TOKEN VALID
          AuthService.retrieveUser(token).then((response) => {

            // FILL USER WITH DATA
            setUser(response.data);

            // DISMISS LOADER
            setIsLoading(false);

            // UPDATE TOKEN STORED IN LOCALSTORAGE
            updateTokenn(user.newToken);

            // SET USER GLOBAL
            dispatch(login(user));
            navigator.navigate("Index");

          }).catch((err) => {
            setIsLoading(false);
          })

        } catch (error) {
          console.log(error);
        }

      })();

    }, 2000);

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
          source={require("../../assets/bg-auth-home.png")}
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
