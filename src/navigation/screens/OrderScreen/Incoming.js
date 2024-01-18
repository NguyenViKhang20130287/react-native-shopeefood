import * as React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import styles from "./OrderScreen.style";
import { useState } from "react";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const Incoming = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);
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
          const response = await axios.get(`http://localhost:8080/api/user/${user_id}/orders?status=Đã đặt`);
          const data = response.data;
          setOrders(data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [])
  return (
    <ScrollView style={styles.container}>
      {orders.length > 0 && orders ?
        (
          <>{orders && orders.map((item) => (<View key={item.id} style={styles.content}>
            <View style={styles.content_title}>
              <View style={styles.title_order}>
                <Text style={styles.cate_title}>{item.store.subCategory.mainCategory.name}</Text>
                <Text style={styles.id_title}> #{1000 + item.id}</Text>
              </View>
              <View style={styles.title_time}>
                <Text style={styles.time_title}>{item.order_date}</Text>
              </View>
            </View>
            <View style={styles.content_details}>
              <View style={styles.content_image}>
                <Image
                  style={styles.foods_image}
                  source={{ uri: item.store.image }}
                />
              </View>
              <View style={styles.content_info}>
                <View style={styles.content_name}>
                  <Text style={styles.name_text}>
                    <Ionicons
                      style={styles.icons}
                      name="shield-checkmark"
                      color={"orange"}
                    ></Ionicons>{" "}
                    {item.store.name}
                  </Text>
                </View>
                <View style={styles.content_price}>
                  <View style={styles.price}>
                    <CurrencyFormatter style={styles.price_text} amount={item.order_total + item.shipping_cost} />
                  </View>
                  <View style={styles.quantity}>
                    <Text style={styles.quantity_text}> ({item.total_quantity} món)</Text>
                  </View>
                  <View style={styles.payment}>
                    <Text style={styles.payment_text}> - {item.payment_method}</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.status}>
              <View style={styles.status_now}>
                <View style={styles.now1}>
                  <Text>{item.orderStatus.name}</Text>
                </View>
                <View style={styles.now2}>
                  <Text style={styles.status_type}>Tài xế đang lấy đơn...</Text>
                </View>
              </View>
              {/* <View style={styles.status_time}>
                <View>
                  <Text style={styles.time_text}>
                    <Ionicons
                      style={styles.icons}
                      name="time-outline"
                      color={"gray"}
                    ></Ionicons>{" "}
                    Dự kiến giao hàng lúc
                  </Text>
                </View>
                <View>
                  <Text style={styles.time_text}> 19:00 Hôm nay</Text>
                </View>
              </View> */}
            </View>
          </View>))}</>
        ) :
        (<View style={styles.blank}>
          <View style={styles.blank_image}>
            <Image style={styles.noOrderImage} source={require('../../../../assets/order.png')}></Image>
          </View>
          <View>
            <Text style={styles.blank_heading}>Quên chưa đặt món rồi nè bạn ơi?</Text>
          </View>
          <View>
            <Text style={styles.blank_info}>Bạn sẽ nhìn thấy các món ăn đang được chuẩn bị hoặc giao đi tại đây để kiểm tra đơn hàng nhanh hơn!</Text>
          </View>
        </View>)
      }
      {orders.length > 0 && orders ? null : (<View style={styles.suggestion}>
        <View style={styles.title_top}>
          <Text style={styles.title_suggestion}>Có thể bạn cũng thích</Text>
        </View>
        <View style={styles.food}>
          <View style={styles.image}>
            <Image
              style={styles.foods_image}
              source={require("../../../../assets/product/prod_1.jpeg")}
            />
          </View>
          <View style={styles.details}>
            <View style={styles.food_name}>
              <Text numberOfLines={1} ellipsizeMode="tail" style={styles.food_tilte}>
                <Ionicons
                  style={styles.icons}
                  name="shield-checkmark"
                  color={"orange"}
                ></Ionicons>{" "}
                Cơm Gà Xối Mỡ 142 - Ba Đình
              </Text>
            </View>
            <View>
              <Text numberOfLines={1} style={styles.example_address}>142 Ba Đình, P. 10, Quận 8, TP. HCM</Text>
            </View>
          </View>
        </View>
        <View style={styles.food}>
          <View style={styles.image}>
            <Image
              style={styles.foods_image}
              source={require("../../../../assets/product/prod_1.jpeg")}
            />
          </View>
          <View style={styles.details}>
            <View style={styles.food_name}>
              <Text numberOfLines={1} ellipsizeMode="tail" style={styles.food_tilte}>
                <Ionicons
                  style={styles.icons}
                  name="shield-checkmark"
                  color={"orange"}
                ></Ionicons>{" "}
                Cơm Gà Xối Mỡ 142 - Ba Đình
              </Text>
            </View>
            <View>
              <Text numberOfLines={1} style={styles.example_address}>142 Ba Đình, P. 10, Quận 8, TP. HCM</Text>
            </View>
          </View>
        </View>
      </View>)}
    </ScrollView>
  );
};

export default Incoming;