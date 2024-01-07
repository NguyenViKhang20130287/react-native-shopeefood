import * as React from 'react';
import MainContainer from './src/navigation/MainContainer';
import { NavigationContainer } from '@react-navigation/native';
import Address from './src/navigation/screens/Address';
import { createStackNavigator } from '@react-navigation/stack';
import AddNewAddress from './src/navigation/screens/AddNewAddress';
import UpdateAddress from './src/navigation/screens/UpdateAddress';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}