import * as React from 'react';
import MainContainer from './src/navigation/MainContainer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UpdateAddress from './src/navigation/screens/Address/UpdateAddress';
import Address from './src/navigation/screens/Address/Address';
import AddNewAddress from './src/navigation/screens/Address/AddNewAddress';
import OrderConfirmation from './src/navigation/screens/OrderConfirmation';
import LoginScreen from './src/navigation/screens/user/LoginScreen';
import RegisterScreen from './src/navigation/screens/user/RegisterScreen';
import ConfirmForgotScreen from './src/navigation/screens/user/ConfirmForgotScreen';
import ForgotPassword from './src/navigation/screens/user/ForgotPasswordScreen';
import ConfirmRegisterScreen from './src/navigation/screens/user/ConfirmRegisterScreen';
import Setting from './src/navigation/screens/Setting/Setting';
import DeleteAccount from './src/navigation/screens/Setting/DeleteAccount';
import UserDetail from './src/navigation/screens/user/UserDetail';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainContainer} options={{ headerShown: false }} />
        <Stack.Screen name="Address" component={Address} options={{
          headerTitle: 'Địa chỉ giao hàng',
          headerBackTitleVisible: false,
          headerTintColor: 'orangered',
          headerTitleStyle: {
            color: 'black',
          },
        }} />
        <Stack.Screen name="AddAddress" component={AddNewAddress}
          options={{
            headerTitle: 'Thêm địa chỉ mới',
            headerBackTitleVisible: false,
            headerTintColor: 'orangered',
            headerTitleStyle: {
              color: 'black',
            },
          }} />
        <Stack.Screen name="UpdateAddress" component={UpdateAddress}
          options={{
            headerTitle: 'Sửa địa chỉ',
            headerBackTitleVisible: false,
            headerTintColor: 'orangered',
            headerTitleStyle: {
              color: 'black',
            },
          }} />
        <Stack.Screen name="Setting" component={Setting}
          options={{
            headerTitle: 'Cài đặt',
            headerBackTitleVisible: false,
            headerTintColor: 'orangered',
            headerTitleStyle: {
              color: 'black',
            },
          }} />
        <Stack.Screen name="DeleteAccount" component={DeleteAccount}
          options={{
            headerTitle: 'Xoá tài khoản',
            headerBackTitleVisible: false,
            headerTintColor: 'orangered',
            headerTitleStyle: {
              color: 'black',
            },
          }} />
        <Stack.Screen name="OrderConfirmation" component={OrderConfirmation}
          options={{
            headerTitle: 'Xác nhận thanh toán',
            headerBackTitleVisible: false,
            headerTintColor: 'orangered',
            headerTitleStyle: {
              color: 'black',
            },
          }} />
        <Stack.Screen name="Login" component={LoginScreen}
          options={{
            headerTitle: 'Đăng nhập',
            headerTintColor: 'orangered',
            headerTitleStyle: {
              color: 'black',
            },
          }} />
        <Stack.Screen name="Register" component={RegisterScreen}
          options={{
            headerTitle: 'Đăng ký',
            headerTintColor: 'orangered',
            headerTitleStyle: {
              color: 'black',
            },
          }} />
        <Stack.Screen name="ConfirmForgot" component={ConfirmForgotScreen}
          options={{
            headerTitle: 'Xác nhận quên mật khẩu',
            headerTintColor: 'orangered',
            headerTitleStyle: {
              color: 'black',
            },
          }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}
          options={{
            headerTitle: 'Quên mật khẩu',
            headerTintColor: 'orangered',
            headerTitleStyle: {
              color: 'black',
            },
          }} />
        <Stack.Screen name="ConfirmRegister" component={ConfirmRegisterScreen}
          options={{
            headerTitle: 'Xác nhận đăng ký',
            headerTintColor: 'orangered',
            headerTitleStyle: {
              color: 'black',
            },
          }} />
          <Stack.Screen name="UserDetail" component={UserDetail}
          options={{
            headerTitle: 'Sửa hồ sơ',
            headerTintColor: 'orangered',
            headerTitleStyle: {
              color: 'black',
            },
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}