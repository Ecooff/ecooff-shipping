import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthHomeScreen from "../screens/Auth/AuthHomeScreen";
import LoginScreen from "../screens/Auth/LoginScreen";

// SCREENS
import IndexScreen from "../screens/IndexScreen";
import HomeScreen from "../screens/HomeScreen";
import PickUpView from "../screens/PickUpView";
import DeliveryView from "../screens/DeliveryView";
import DetailScreen from "../screens/DetailScreen";

import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";

const StackNav = createNativeStackNavigator();

const Stack = () => {
  const user = useSelector(selectUser);
  return (
    <StackNav.Navigator>
      {/* <StackNav.Navigator initialRouteName="List"> */}

      {/* AUTH */}
      <StackNav.Screen
        options={{ headerShown: false }}
        name="AuthHome"
        component={AuthHomeScreen}
      />
      {/* {!user && ( */}
      <StackNav.Screen
        options={{ headerShown: false, gestureEnabled: false }}
        name="Login"
        component={LoginScreen}
      />

      {/* INDEX */}
      {
        <StackNav.Screen
          options={{ headerShown: false, gestureEnabled: false }}
          name="Index"
          component={IndexScreen}
        />
      }
      
      {/* PICK UP */}
      {
        <StackNav.Screen
          options={{ headerShown: false, gestureEnabled: false }}
          name="DetailScreen"
          component={DetailScreen}
        />
      }
      
    </StackNav.Navigator>
  );
};

export default Stack;
