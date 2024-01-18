import * as React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

//Screen
import HomeScreen from "./screens/Home/HomeScreen";
import ProductsScreen from './screens/Product/ProductsScreen';
import LikesScreen from "./screens/Likes/LikesScreen";
import MeScreen from "./screens/Me/MeScreen";
import MyOrdersScreen from "./screens/OrderScreen/MyOrdersScreen";
import NotificationsScreen from "./screens/Notifications/NotificationsScreen";

// test
import SearchScreen from "./screens/Search/SearchScreen";
import ProductDetail from "./screens/Product/ProductDetail";
// import ProductsScreen from './screens/Product/ProductDetail';

const homeName = "Home";
const produtcName = 'Sản phẩm';
const likesName = "Đã thích";
const meName = "Tôi";
const myOrdersName = "Đơn hàng";
const notificationsName = "Thông báo";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? "restaurant" : "restaurant-outline";
                    } else if (rn === produtcName) {
                        iconName = focused ? 'heart' : 'heart-outline'
                    } else if (rn === myOrdersName) {
                        iconName = focused ? "clipboard" : "clipboard-outline";
                    } else if (rn === likesName) {
                        iconName = focused ? "heart" : "heart-outline";
                    } else if (rn === notificationsName) {
                        iconName = focused ? "notifications" : "notifications-outline";
                    } else if (rn === meName) {
                        iconName = focused ? "person" : "person-outline";
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "orangered",
                tabBarInactiveTintColor: "gray",
            })}
        >
            <Tab.Screen
                name={homeName}
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name={myOrdersName}
                component={ProductsScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name={likesName}
                component={LikesScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name={notificationsName}
                component={NotificationsScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name={meName}
                component={MeScreen}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
}

