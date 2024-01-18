import { Text, View } from "react-native";
import styles from "./HomeStore.style";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FoodManagerScreen from "./foodManagerScreen/foodManagerScreen";
import OrderManagerScreen from "./OrderManagerScreen/OrderManagerScreen";
import StoreInfo from "./StoreInfo/StoreInfoScreen";

const Tab = createBottomTabNavigator();

export default function HomeStore({ }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>StoreManager - vikang</Text>
            </View>
            <Tab.Navigator>
                <Tab.Screen name="foodManager" component={FoodManagerScreen}/>
                <Tab.Screen name="orderManager" component={OrderManagerScreen}/>
                <Tab.Screen name="storeInfo" component={StoreInfo}/>
            </Tab.Navigator>
        </View>
    )
}