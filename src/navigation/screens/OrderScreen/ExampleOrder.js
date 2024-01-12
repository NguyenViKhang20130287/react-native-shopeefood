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
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./OrderScreen.style";
import { useState } from "react";

const Example = () => {
  const [hasData, setHasData] = useState(true);
  return (
    <View style={styles.container}>
      {hasData ? (
        <ScrollView>
          <View style={styles.example_content}>
            <View style={styles.content_title}>
              <View style={styles.title_order}>
                <Text style={styles.cate_title}>Đồ ăn</Text>
              </View>
              <View>
                <Ionicons name="trash-outline" size={22} />
              </View>
            </View>
            <View style={styles.example_order}>
              <View>
                <Image
                  style={styles.foods_image}
                  source={require("../../../../assets/product/prod_1.jpeg")}
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
                    Cơm tấm Phúc Lộc Thọ - TPHCM
                  </Text>
                </View>
                <View>
                  <Text numberOfLines={1} style={styles.example_address}>179 Lương Đình Của, P.Đông Hòa, Dĩ An, Bình Dương</Text>
                </View>
                <View style={styles.example_content_price}>
                  <View style={styles.price}>
                    <Text numberOfLines={1} style={styles.price_text}>120.000đ</Text>
                  </View>
                  <View style={styles.quantity}>
                    <Text style={styles.quantity_text}> (1 món)</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.example_content}>
            <View style={styles.content_title}>
              <View style={styles.title_order}>
                <Text style={styles.cate_title}>Đồ ăn</Text>
              </View>
              <View>
                <Ionicons name="trash-outline" size={22} />
              </View>
            </View>
            <View style={styles.example_order}>
              <View>
                <Image
                  style={styles.foods_image}
                  source={require("../../../../assets/product/prod_1.jpeg")}
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
                    Cơm tấm Phúc Lộc Thọ - TPHCM
                  </Text>
                </View>
                <View>
                  <Text numberOfLines={1} style={styles.example_address}>179 Lương Đình Của, P.Đông Hòa, Dĩ An, Bình Dương</Text>
                </View>
                <View style={styles.example_content_price}>
                  <View style={styles.price}>
                    <Text numberOfLines={1} style={styles.price_text}>120.000đ</Text>
                  </View>
                  <View style={styles.quantity}>
                    <Text style={styles.quantity_text}> (1 món)</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      ) :
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

    </View>
  );
};

export default Example;
