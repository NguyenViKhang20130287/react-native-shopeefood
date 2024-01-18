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
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import UserMangement from "./UserManagament";
import ShopMangement from "./ShopManagement";
import styles from "./Admin.style";
import { Ionicons } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();
import { FontAwesome } from "@expo/vector-icons";

const Action = ({ icon, title, color, screen }) => {
  return (
    <View style={styles.action}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={styles.iconContainer}>
          <FontAwesome name={icon} size={22} color={color} />
        </View>
        <Text style={styles.actionTitle}>{title}</Text>
      </View>
    </View>
  );
};

const AdminContent = () => {
  return (
    <NavigationContainer>
      <View>
        <View style={styles.header}>
          <Action
            style={styles.icon_header}
            icon={"user"}
            color={"orange"}
          ></Action>
          <Text style={styles.header_text}>ADMIN</Text>
          <Action
            style={styles.icon_header}
            icon={"key"}
            color={"orange"}
          ></Action>
        </View>
      </View>
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
          component={UserMangement}
          name="Quản lý tài khoản"
        />
        <Tab.Screen
          style={styles.navigator}
          component={ShopMangement}
          name="Quản lý cửa hàng"
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AdminContent;
