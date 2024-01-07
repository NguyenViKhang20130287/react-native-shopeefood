import * as React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./OrderScreen.style";

const Checkout = () => {
  return (
    <View style={styles.container}>
      <View style={styles.checkout}>
        <View style={styles.address}>
          <View style={styles.icon_location}>
            <Ionicons
              style={styles.icons}
              name="location-outline"
              color={"orange"}
            ></Ionicons>
          </View>
          <View style={styles.detail_address}>
            <View>
              <Text>Địa chỉ nhận hàng</Text>
            </View>
            <View style={styles.user}>
              <View>
                <Text>Nguyễn Trung Hiếu | </Text>
              </View>
              <View>
                <Text>(+84) 364352223</Text>
              </View>
            </View>
            <View style={styles.street}>
              <View>
                <Text>2/7C đường 106</Text>
              </View>
              <View>
                <Text>
                  Phường Tăng Nhơn Phú A, Thành Phố Thủ Đức, TP. Hồ Chí Minh
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.content_title}>
            <View style={styles.title_order}>
              <Text style={styles.id_title}>Đồ ăn #1702</Text>
            </View>
            <View style={styles.title_time}>
              <Text style={styles.time_title}>Hôm nay 18:30</Text>
            </View>
          </View>
          <View style={styles.content_details}>
            <View style={styles.content_image}>
              <Image
                style={styles.foods_image}
                source={require("../../../../assets/product/prod_1.jpeg")}
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
                  Cơm tấm Phúc Lộc Thọ - TPHCM
                </Text>
              </View>
              <View style={styles.content_price}>
                <View style={styles.price}>
                  <Text style={styles.price_text}>120.000đ</Text>
                </View>
                <View style={styles.quantity}>
                  <Text style={styles.quantity_text}>x2</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.shipping}>
          <View>
            <Text style={styles.ship_title}>Phí vận chuyển: </Text>
          </View>
          <View>
            <Text style={styles.ship_price}>Miễn phí</Text>
          </View>
        </View>
        <View style={styles.bill}>
          <View>
            <Text style={styles.bill_title}>Tổng số tiền: </Text>
          </View>
          <View>
            <Text style={styles.bill_price}>120.000đ</Text>
          </View>
        </View>
        <View style={styles.sum}>
          <View style={styles.total}>
            <Text style={styles.total_title}>Tổng thanh toán</Text>
            <Text style={styles.total_price}>120.000đ</Text>
          </View>
          <View style={styles.button_book}>
            <Button color={"#ff4400"} title="Đặt hàng" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Checkout;
