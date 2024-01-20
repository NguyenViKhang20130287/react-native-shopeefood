import { Text, View } from "react-native";
import styles from "./HomeStore.style";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import FoodManagerScreen from "./FoodManagerScreen/FoodManagerScreen";
import OrderManagerScreen from "./OrderManagerScreen/OrderManagerScreen";
import StoreInfo from "./StoreInfo/StoreInfoScreen";
const Tab = createMaterialTopTabNavigator();

const foodManager = "Quản lý sản phẩm";
const orderManager = 'Quản lý đơn hàng';
const storeInfo = "Quản lý cửa hàng";

export default function HomeStore({ }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>StoreManager - vikang</Text>
            </View>
            <Tab.Navigator>
                <Tab.Screen name={storeInfo} component={StoreInfo}/>
                <Tab.Screen name={foodManager} component={FoodManagerScreen}/>
                <Tab.Screen name={orderManager} component={OrderManagerScreen}/>
            </Tab.Navigator>
        </View>
    )
}