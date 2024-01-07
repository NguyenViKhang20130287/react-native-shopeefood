import * as React from 'react';
import MainContainer from './src/navigation/MainContainer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UpdateAddress from './src/navigation/screens/Address/UpdateAddress';
import Address from './src/navigation/screens/Address/Address';
import AddNewAddress from './src/navigation/screens/Address/AddNewAddress';
import OrderConfirmation from './src/navigation/screens/OrderConfirmation';

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
          headerStyle: {
            backgroundColor: 'white',
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
            headerStyle: {
              backgroundColor: 'white',
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
            headerStyle: {
              backgroundColor: 'white',
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
            headerStyle: {
              backgroundColor: 'white',
            },
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}