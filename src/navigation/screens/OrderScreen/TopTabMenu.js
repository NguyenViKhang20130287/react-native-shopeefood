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
import styles from "./OrderScreen.style";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Incoming from "./Incoming";
import History from "./History";
import Rate from "./Rate";
import Example from "./ExampleOrder";

const Tab = createMaterialTopTabNavigator();

const TopTabMenu = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;
        },
        tabBarActiveTintColor: "orangered",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        style={styles.navigator}
        component={Incoming}
        name="Đang đến"
      />
      <Tab.Screen style={styles.navigator} component={History} name="Lịch sử" />
      <Tab.Screen style={styles.navigator} component={Rate} name="Đánh giá" />
      <Tab.Screen
        style={styles.navigator}
        component={Example}
        name="Đơn nháp"
      />
    </Tab.Navigator>
  );
};

export default TopTabMenu;
