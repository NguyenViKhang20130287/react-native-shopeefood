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

const Example = () => {
  return (
    <View style={styles.container}>
      <View style={styles.order}>
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
              <View>
                <Text style={styles.address_shop}>
                  140 Hoàng Diệu 2, P. Linh Chiểu, Tp.HCM
                </Text>
              </View>
              <View style={styles.content_price}>
                <View style={styles.price}>
                  <Text style={styles.price_text}>120.000đ</Text>
                </View>
                <View style={styles.quantity}>
                  <Text style={styles.quantity_text}>x2 (món)</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Example;
