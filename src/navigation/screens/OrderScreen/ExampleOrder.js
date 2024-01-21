import * as React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  Pressable,
  RefreshControl,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./OrderScreen.style";
import { useState } from "react";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const Example = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const pullToRefresh = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 500)
  }
  const CurrencyFormatter = ({ style, amount }) => {
    const formattedAmount = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(amount);

    return <Text style={style}>{formattedAmount}</Text>;
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userStorage = JSON.parse(await AsyncStorage.getItem('user'));
        if (userStorage) {
          const user_id = userStorage.id;
          const response = await axios.get(`http://localhost:8080/api/cart/all?user_id=${user_id}`);
          const data = response.data;
          setCartItems(data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [isLoading, refresh]);

  const handleDeleteDraftOrder = async (store_id) => {
    try {
      const userStorage = JSON.parse(await AsyncStorage.getItem('user'));
      if (userStorage) {
        const user_id = userStorage.id;
        const response = await axios.delete(`http://localhost:8080/api/cart/remove_all?user_id=${user_id}&&store_id=${store_id}`);
        console.log('Đơn nháp đã được xóa:', response.data);
        setIsLoading(true);
      }

    } catch (error) {
      console.error('Lỗi khi xóa đơn nháp:', error);
    }
  }

  const groupProductsByStore = () => {
    const groupedProducts = {};
    cartItems.forEach((item) => {
      const storeId = item.product.storeCategory.store.id;
      console.log(storeId);
      if (!groupedProducts[storeId]) {
        groupedProducts[storeId] = {
          subCate: item.product.storeCategory.store.subCategory.name,
          storeId: storeId,
          storeImage: item.product.storeCategory.store.image,
          storeName: item.product.storeCategory.store.name,
          storeAddress: item.product.storeCategory.store.address,
          totalAmount: 0,
          totalQuantity: 0,
        }
      }
      const subtotal = item.quantity * item.product.current_price;
      groupedProducts[storeId].totalAmount += subtotal;
      groupedProducts[storeId].totalQuantity += item.quantity;
    });
    console.log(groupedProducts);

    return Object.values(groupedProducts);
  };
  return (
    <ScrollView refreshControl={<RefreshControl refreshing={refresh} onRefresh={() => pullToRefresh()} />} style={styles.container}>
      {cartItems.length > 0 && cartItems ? (
        <ScrollView>
          {Object.values(groupProductsByStore()).map((item, index) => (
            <Pressable key={index} onPress={() => navigation.navigate('Store', { id: item.storeId })}>
              <View style={styles.example_content}>
                <View style={styles.content_title}>
                  <View style={styles.title_order}>
                    <Text style={styles.cate_title}>{item.subCate}</Text>
                  </View>
                  <View>
                    <Ionicons onPress={() => handleDeleteDraftOrder(item.storeId)} name="trash-outline" size={21} color={'orangered'} />
                  </View>
                </View>
                <View style={styles.example_order}>
                  <View>
                    <Image
                      style={styles.foods_image}
                      source={{ uri: item.storeImage }}
                    />
                  </View>
                  <View style={styles.example_details}>
                    <View style={styles.food_name}>
                      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.food_tilte}>
                        <Ionicons
                          style={styles.icons}
                          name="shield-checkmark"
                          color={"orange"}
                        ></Ionicons>{" "}
                        {item.storeName}
                      </Text>
                    </View>
                    <View>
                      <Text numberOfLines={1} style={styles.example_address}>{item.storeAddress}</Text>
                    </View>
                    <View style={styles.example_content_price}>
                      <View style={styles.price}>
                        <CurrencyFormatter style={styles.price_text} amount={item.totalAmount} />
                      </View>
                      <View style={styles.quantity}>
                        <Text style={styles.quantity_text}> ({item.totalQuantity} món)</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </Pressable>))}
        </ScrollView>
      )
        :
        (
          <View style={styles.history_blank}>
            <View style={styles.blank_image}>
              <Image style={styles.noCartItem} source={require('../../../../assets/cart.png')}></Image>
            </View>
            <View>
              <Text style={styles.blank_heading}>"Hông" có gì trong giỏ hết! Đói quá à!</Text>
            </View>
            <View>
              <Text style={styles.blank_info}>Nhanh nhanh đặt món ngon tụi mình cùng măm nào!</Text>
            </View>
          </View>
        )}

    </ScrollView>
  );
};

export default Example;
