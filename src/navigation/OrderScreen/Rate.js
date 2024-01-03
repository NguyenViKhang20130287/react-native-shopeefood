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

const Rate = () => {
  return (
    <View style={styles.container}>
      <View style={styles.order}>
        <View style={styles.rate_noti}>
          <Text style={styles.rate_title}>
            <Ionicons
              style={styles.icons}
              name="heart-circle-outline"
            ></Ionicons>{" "}
            Đánh giá quán, nhận ngay 500 Xu{" "}
            <Ionicons name="arrow-forward-outline"></Ionicons>
          </Text>
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
                source={require("../../../assets/product/prod_1.jpeg")}
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
          <View style={styles.status_complete}>
            <View style={styles.status_now_complete}>
              <View style={styles.now1_complete}>
                <Text style={styles.complete_text}>Hoàn thành</Text>
              </View>
              <View style={styles.now2_complete}>
                <View style={styles.rate_button}>
                  <Button color={"#ff4400"} title="Đánh giá" />
                </View>
                <View style={styles.reorder_button}>
                  <Button color={"#ff4400"} title="Đặt lại" />
                </View>
              </View>
            </View>
            <View style={styles.rate_info}>
              <Text style={styles.rate_text}>
                <Ionicons
                  style={styles.icons}
                  name="alert-circle-outline"
                  color={"orange"}
                ></Ionicons>{" "}
                Đánh giá ngay để nhận thêm 500 Shopee Xu
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Rate;
