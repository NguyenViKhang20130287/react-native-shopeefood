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
import { createStackNavigator } from "@react-navigation/stack";
import { useState } from "react";
import { Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import UserMangement from "./UserManagament";
import ShopMangement from "./ShopManagement";
import styles from "./Admin.style";
import { Ionicons } from "@expo/vector-icons";
import UserEdit from "./UserEdit";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
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
    <NavigationContainer independent={true}>
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
        {/* <Stack.Screen
          name="EditUserAdmin"
          component={UserEdit}
          options={{
            headerTitle: "Sửa thông tin người dùng",
            headerTintColor: "orangered",
            headerTitleStyle: {
              color: "black",
            },
          }}
        /> */}
      </Tab.Navigator>

      {/* <Stack.Navigator>
        <Stack.Screen
          name="EditUserAdmin"
          component={UserEdit}
          options={{
            headerTitle: "Sửa thông tin người dùng",
            headerTintColor: "orangered",
            headerTitleStyle: {
              color: "black",
            },
          }}
        />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default AdminContent;
