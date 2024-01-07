import * as React from 'react';

import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

//Screen
import HomeScreen from './screens/Home/HomeScreen';
import LikesScreen from './screens/LikesScreen';
import MeScreen from './screens/MeScreen';
import MyOrdersScreen from './screens/MyOrdersScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import LoginScreen from './screens/user/LoginScreen';
import RegisterScreen from './screens/user/RegisterScreen';
import ConfirmForgot from './screens/user/ConfirmForgotScreen';
import ForgotPassword from './screens/user/ForgotPasswordScreen';
import ConfirmRegister from './screens/user/ConfirmRegisterScreen';

// test
import SearchScreen from './screens/Search/SearchScreen'

const homeName = 'Home';
const likesName = "Đã thích";
const meName = 'Tôi';
const myOrdersName = 'Đơn hàng';
const notificationsName = "Thông báo";
const login = "Đăng nhập";
const register = "Đăng ký";
const forgotPassword = "Quên mật khẩu";
const confirmRegister = "Nhập Mã Xác Minh";
const confirmForgot = "Nhập mã xác minh";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'restaurant' : 'restaurant-outline'
                        } else if (rn === myOrdersName) {
                            iconName = focused ? 'clipboard' : 'clipboard-outline'
                        } else if (rn === likesName) {
                            iconName = focused ? 'heart' : 'heart-outline'
                        } else if (rn === notificationsName) {
                            iconName = focused ? 'notifications' : 'notifications-outline'
                        } else if (rn === meName) {
                            iconName = focused ? 'person' : 'person-outline'
                        }
                        return <Ionicons name={iconName} size={size} color={color} />
                    },
                    tabBarActiveTintColor: 'orangered',
                    tabBarInactiveTintColor: 'gray'
                })}
            >

                <Tab.Screen name={homeName} component={SearchScreen} options={{ headerShown: false }} />
                <Tab.Screen name={myOrdersName} component={MyOrdersScreen} options={{ headerShown: false }} />
                <Tab.Screen name={likesName} component={LikesScreen} options={{ headerShown: false }} />
                <Tab.Screen name={notificationsName} component={NotificationsScreen} options={{ headerShown: false }} />
                <Tab.Screen name={meName} component={MeStack} options={{ headerShown: false}} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}
const MeStack= () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={meName} component={MeScreen} options={{ headerShown: false }} />
            <Stack.Screen name={login} component={LoginScreen} 
                options={{ headerShown: true, 
                    headerTitleAlign: 'center', 
                    headerTintColor: 'orangered',
                    headerTitleStyle: {
                        color: 'black',
                    },
                    }} />
            <Stack.Screen name={register} component={RegisterScreen} 
                options={{ headerShown: true, 
                    headerTitleAlign: 'center', 
                    headerTintColor: 'orangered',
                    headerTitleStyle: {
                        color: 'black',
                    },
                    }} />
            <Stack.Screen name={confirmForgot} component={ConfirmForgot} 
                options={{ headerShown: true, 
                    headerTitleAlign: 'center', 
                    headerTintColor: 'orangered',
                    headerTitleStyle: {
                        color: 'black',
                    },
                    }} />
            <Stack.Screen name={forgotPassword} component={ForgotPassword} 
                options={{ headerShown: true, 
                    headerTitleAlign: 'center', 
                    headerTintColor: 'orangered',
                    headerTitleStyle: {
                        color: 'black',
                    },
                    }}/>
            <Stack.Screen name={confirmRegister} component={ConfirmRegister} 
                options={{ headerShown: true, 
                    headerTitleAlign: 'center', 
                    headerTintColor: 'orangered',
                    headerTitleStyle: {
                        color: 'black',
                    },
                    }} />
        </Stack.Navigator>
    )
}