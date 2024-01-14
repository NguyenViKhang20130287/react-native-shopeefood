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
      <View style={styles.history_blank}>
        <View style={styles.blank_image}>
          <Image style={styles.noOrderImage} source={require('../../../../assets/dinner.png')}></Image>
        </View>
        <View>
          <Text style={styles.blank_heading}>Chưa có đơn để đánh giá</Text>
        </View>
        <View>
          <Text style={styles.blank_info}>Đặt món ngay để thêm đánh giá mới bạn nhé!</Text>
        </View>
      </View>
    </View>
  );
};

export default Rate;