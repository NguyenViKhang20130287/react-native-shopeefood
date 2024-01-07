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
      <View style={styles.title}>
        <View style={styles.notification}>
          <Text style={styles.noti}>Thông báo</Text>
        </View>
        <View>
          <Ionicons
            name="settings-outline"
            style={styles.icon_title}
          ></Ionicons>
        </View>
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
            name="arrow-forward-outline"
            style={styles.icon_right}
          ></Ionicons>
        </View>
      </View>
      <View style={styles.tab}>
        <View>
          <Ionicons
            name="volume-off-outline"
            style={styles.icon_tab}
          ></Ionicons>
        </View>
        <View style={styles.tab_info}>
          <Text style={styles.tab_title}>Tin tức</Text>
          <Text style={styles.tab_detail}>Chưa có tin tức nào !</Text>
        </View>
        <View>
          <Ionicons
            name="arrow-forward-outline"
            style={styles.icon_right}
          ></Ionicons>
        </View>
      </View>
    </View>
  );
}
