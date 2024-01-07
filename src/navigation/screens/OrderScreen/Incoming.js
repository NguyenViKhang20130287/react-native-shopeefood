import * as React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import styles from "./OrderScreen.style";

const Incoming = () => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.blank}>
                <View style={styles.blank_image}>
                    <Image></Image>
                </View>
                <View style={styles.blank_heading}>
                    <Text>Quên chưa đặt món rồi nè bạn ơi?</Text>
                </View>
                <View style={styles.blank_info}>
                    <Text>Bạn sẽ nhìn thấy các món ăn đang được chuẩn bị hoặc giao đi tại đây để kiểm tra đơn hàng nhanh hơn!</Text>
                </View>
          </View> */}
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
              <View style={styles.payment}>
                <Text style={styles.payment_text}> - Tiền mặt</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.status}>
          <View style={styles.status_now}>
            <View style={styles.now1}>
              <Text>Đã đặt</Text>
            </View>
            <View style={styles.now2}>
              <Text style={styles.status_type}>Tài xế đang lấy đơn...</Text>
            </View>
          </View>
          <View style={styles.status_time}>
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
          </View>
        </View>
      </View>
      <View style={styles.suggestion}>
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
              <Text style={styles.food_tilte}>
                <Ionicons
                  style={styles.icons}
                  name="shield-checkmark"
                  color={"orange"}
                ></Ionicons>{" "}
                Cơm tấm Phúc Lộc Thọ - TPHCM
              </Text>
            </View>
            <View style={styles.info}>
              <View style={styles.rating}>
                <Text style={styles.rating_text}>
                  <Ionicons
                    style={styles.icons}
                    name="star"
                    color={"orange"}
                  ></Ionicons>{" "}
                  4.6
                </Text>
              </View>
              <View style={styles.distance}>
                <Text style={styles.distance_text}>0.2km</Text>
              </View>
              <View style={styles.times}>
                <Text style={styles.times_text}>15 phút</Text>
              </View>
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
              <Text style={styles.food_tilte}>
                <Ionicons
                  style={styles.icons}
                  name="shield-checkmark"
                  color={"orange"}
                ></Ionicons>{" "}
                Cơm tấm Phúc Lộc Thọ - TPHCM
              </Text>
            </View>
            <View style={styles.info}>
              <View style={styles.rating}>
                <Text style={styles.rating_text}>
                  <Ionicons
                    style={styles.icons}
                    name="star"
                    color={"orange"}
                  ></Ionicons>{" "}
                  4.6
                </Text>
              </View>
              <View style={styles.distance}>
                <Text style={styles.distance_text}>0.2km</Text>
              </View>
              <View style={styles.times}>
                <Text style={styles.times_text}>15 phút</Text>
              </View>
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
              <Text style={styles.food_tilte}>
                <Ionicons
                  style={styles.icons}
                  name="shield-checkmark"
                  color={"orange"}
                ></Ionicons>{" "}
                Cơm tấm Phúc Lộc Thọ - TPHCM
              </Text>
            </View>
            <View style={styles.info}>
              <View style={styles.rating}>
                <Text style={styles.rating_text}>
                  <Ionicons
                    style={styles.icons}
                    name="star"
                    color={"orange"}
                  ></Ionicons>{" "}
                  4.6
                </Text>
              </View>
              <View style={styles.distance}>
                <Text style={styles.distance_text}>0.2km</Text>
              </View>
              <View style={styles.times}>
                <Text style={styles.times_text}>15 phút</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Incoming;