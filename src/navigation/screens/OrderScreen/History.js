import * as React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  SafeAreaView,
  RefreshControl,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./OrderScreen.style";
import { ScrollView } from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const History = () => {
  const [orders, setOrders] = useState([]);
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
          const response = await axios.get(`http://localhost:8080/api/user/${user_id}/orders?status=Hoàn thành`);
          const data = response.data;
          setOrders(data);
          // setIsLoading(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [refresh])
  return (
    <ScrollView refreshControl={<RefreshControl refreshing={refresh} onRefresh={() => pullToRefresh()} />} style={styles.container}>
      {orders.length > 0 && orders ? (
        <ScrollView>
          <View style={styles.order}>
            <View style={styles.rate_noti}>
              <View style={styles.rate_title_container}>
                <Ionicons
                  size={22}
                  name="heart-circle-outline"
                  color={"#FFC813"}
                ></Ionicons>
                <Text style={styles.rate_title}>
                  {" "}Đánh giá quán, nhận ngay 500 Xu
                </Text>
              </View>
              <Ionicons name="arrow-forward-outline"></Ionicons>
            </View>
            {orders && orders.map((item) => (<View key={item.id} style={styles.content}>
              <View style={styles.content_title}>
                <View style={styles.title_order}>
                  <Text style={styles.cate_title}>{item.store.subCategory.mainCategory.name}</Text>
                  <Text style={styles.id_title}> #{1000 + item.id}</Text>
                </View>
                <View style={styles.title_time}>
                  <Text style={styles.time_title}>{item.order_date}</Text>
                </View>
              </View>
              <View style={styles.history_content_details}>
                <View style={styles.content_name}>
                  <Text numberOfLines={1} ellipsizeMode="tail" style={styles.history_name_text}>
                    <Ionicons
                      style={styles.icons}
                      name="shield-checkmark"
                      color={"orange"}
                    ></Ionicons>{" "}
                    {item.store.name}
                  </Text>
                </View>
                <View style={styles.history_content_info}>
                  <View style={styles.content_image}>
                    <Image
                      style={styles.foods_image}
                      source={{ uri: item.store.image }}
                    />
                  </View>
                  <View style={styles.history_content_price}>
                    <View style={styles.price}>
                      <CurrencyFormatter style={styles.price_text} amount={item.order_total + item.shipping_cost} />
                    </View>
                    <View style={styles.quantity}>
                      <Text style={styles.quantity_text}>{item.total_quantity} món</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.status_now_complete}>
                <View style={styles.now1_complete}>
                  <Text style={styles.complete_text}>{item.orderStatus.name}</Text>
                </View>
                <View style={styles.now2_complete}>
                  <View style={styles.reorder_button}>
                    <Button color={"#EE4E2E"} title="Đặt lại" />
                  </View>
                </View>
              </View>
            </View>))}
          </View>
        </ScrollView>
      ) :
        (
          <View style={styles.history_blank}>
            <View style={styles.blank_image}>
              <Image style={styles.noOrderImage} source={require('../../../../assets/order.png')}></Image>
            </View>
            <View>
              <Text style={styles.blank_heading}>Cùng chúng tôi tạo thật nhiều kỷ niệm ăn uống tưng bừng bạn nhé!</Text>
            </View>
            <View>
              <Text style={styles.blank_info}>Bạn sẽ nhìn thấy các món đã đặt tại đây để có thể thưởng thức lại món ăn yêu thích bất cứ lúc nào!</Text>
            </View>
          </View>
        )}

    </ScrollView>
  );
};

export default History;