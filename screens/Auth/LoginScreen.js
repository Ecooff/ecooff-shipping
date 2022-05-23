import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import authStyles from "../../styles/authStyles";
import globalStyles from "../../styles/styles";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { login } from "../../store/userSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

// SERVICES
import AuthService from "../../services/AuthService";

{
  /* COMPONENTS */
}
import AuthMenuComponent from "../../components/AuthMenuComponent";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const navigator = useNavigation();
  const dispatch = useDispatch();

  const handleLogin = () => {
    const storeData = async (value) => {
      try {
        await AsyncStorage.setItem("@me", value);
      } catch (e) {
        console.log(e);
      }
    };
    setLoader(true);

    let user = {
      email: email,
      password: password,
    };

    AuthService.login(user)
      .then((response) => {
        if (response.message) {
          createAlert(response.message);
        } else if (response.verified) {
          storeData(response.token);
          dispatch(login(response));
          navigator.navigate("Home");
        } else {
          console.log("else");
          navigator.navigate("Home");
        }
      })
      .catch((err) => {
        console.log("something was wrong", err);
        createAlert(err);
      })
      .finally(() => setLoader(false));
  };

  const createAlert = (message) =>
    Alert.alert("Acceso denegado", message, [
      { text: "OK", onPress: () => console.log() },
    ]);

  return (
    <KeyboardAvoidingView
      style={[globalStyles.scrollContainer]}
      behavior="padding"
    >
      <StatusBar barStyle="dark-content" />

      {/* BACK ARROW */}
      <AuthMenuComponent />

      {/* WELCOME MESSAGE */}
      <View style={authStyles.titleContainer}>
        <Text style={[authStyles.title, globalStyles.fontLarge]}>
          ¡Bienvenidx de vuelta!
        </Text>
        <Text
          style={[
            styles.subTitle,
            authStyles.subTitle,
            globalStyles.fontMedium,
          ]}
        >
          Accede a tu cuenta
        </Text>
      </View>

      {/* INPUTS */}
      <View style={[globalStyles.widthEightyFive, styles.containerInputs]}>
        <Text style={[globalStyles.inputLabel, globalStyles.fontSmall]}>
          EMAIL
        </Text>
        <View style={globalStyles.inputRow}>
          <AntDesign name="user" style={globalStyles.icons} />
          <TextInput
            placeholder="Email"
            value={email}
            keyboardType="email-address"
            icon="mail"
            onChangeText={(text) => setEmail(text.toLowerCase())}
            style={globalStyles.input}
          />
        </View>

        <Text style={[globalStyles.inputLabel, globalStyles.fontSmall]}>
          CONTRASEÑA
        </Text>
        <View style={globalStyles.inputRow}>
          <AntDesign name="lock" style={globalStyles.icons} />
          <TextInput
            placeholder="Contraseña"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={globalStyles.input}
            secureTextEntry
          />
        </View>
      </View>

      {/* BUTTON */}
      <View style={[authStyles.buttonContainer, globalStyles.widthEightyFive]}>
        <TouchableOpacity
          onPress={() => handleLogin()}
          style={[
            globalStyles.button,
            globalStyles.primary,
            globalStyles.widthFluid,
            styles.buttonSignIn,
          ]}
        >
          {loader == false < 2 ? (
            <View>
              <ActivityIndicator size="small" color="#FFF" />
            </View>
          ) : (
            <Text style={[styles.loginText, globalStyles.textWhite]}>
              Iniciar sesión
            </Text>
          )}
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  arrowSpace: {
    marginBottom: 28,
  },

  forgotContainer: {
    width: "80%",
    marginTop: 5,
    marginBottom: 30,
  },

  subTitle: {
    marginBottom: -5,
  },

  headerTitle: {
    fontSize: 15,
    textAlign: "right",
    color: "#121515",
  },

  socialRow: {
    width: "50%",
    justifyContent: "space-around",
    marginBottom: 25,
  },

  socialIcon: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },

  facebook: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  loginText: {
    paddingVertical: 1,
  },
  buttonSignIn: {
    marginTop: 40,
  },
  containerInputs: {
    marginTop: 5,
  },
});
