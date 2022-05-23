import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthHomeScreen from "../screens/Auth/AuthHomeScreen";
import LoginScreen from "../screens/Auth/LoginScreen";

// SCREENS
import HomeScreen from "../screens/HomeScreen";

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

      {/* HOME */}
      {
        <StackNav.Screen
          options={{ headerShown: false, gestureEnabled: false }}
          name="Home"
          component={HomeScreen}
        />
      }
    </StackNav.Navigator>
  );
};

export default Stack;
