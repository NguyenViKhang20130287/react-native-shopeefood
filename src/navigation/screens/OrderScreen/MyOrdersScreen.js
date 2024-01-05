import * as React from "react";
import {
  StyleSheet,
  TabView,
  TouchableOpacity,
  View,
  useWindowDimensions,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import TopTabMenu from "./TopTabMenu";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function MyOrdersScreen({ navigation }) {
  return <TopTabMenu />;
}
