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
import styles from "./Notifications.style";

export default function NotificationsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.notification}>
        <Text style={styles.noti}>Thông báo</Text>
      </View>
      <View style={styles.tab}>
        <View>
          <Ionicons name="pricetags-outline" style={styles.icon_tab}></Ionicons>
        </View>
        <View style={styles.tab_info}>
          <Text style={styles.tab_title}>Khuyến mãi</Text>
          <Text style={styles.tab_detail}>Bữa xế xịn giảm 50%</Text>
        </View>
        <View>
          <Ionicons
            name="chevron-forward-outline"
            style={styles.icon_right}
          ></Ionicons>
        </View>
      </View>
      <View style={styles.tab}>
        <View>
          <Ionicons
            name="megaphone-outline"
            style={styles.icon_tab}
          ></Ionicons>
        </View>
        <View style={styles.tab_info}>
          <Text style={styles.tab_title}>Tin tức</Text>
          <Text style={styles.tab_detail}>Chưa có tin tức nào !</Text>
        </View>
        <View>
          <Ionicons
            name="chevron-forward-outline"
            style={styles.icon_right}
          ></Ionicons>
        </View>
      </View>
      <View>
        <Text style={styles.updateNoti}>Cập nhật quan trọng</Text>
        <View style={styles.blank}>
          <View style={styles.blank_image}>
            <Image style={styles.noOrderImage} source={require('../../../../assets/order.png')}></Image>
          </View>
          <View>
            <Text style={styles.blank_heading}>Trải nghiệm ngay!</Text>
          </View>
          <View>
            <Text style={styles.blank_info}>Thông tin đơn hàng sẽ được cập nhật tại đây.</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
