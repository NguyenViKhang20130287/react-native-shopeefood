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
import { ScrollView } from "react-native";
import { useState } from "react";

const History = () => {
  const [hasData, setHasData] = useState(true);
  return (
    <View style={styles.container}>
      {hasData ? (
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
            <View style={styles.content}>
              <View style={styles.content_title}>
                <View style={styles.title_order}>
                  <Text style={styles.cate_title}>Đồ ăn</Text>
                  <Text style={styles.id_title}> #1702</Text>
                </View>
                <View style={styles.title_time}>
                  <Text style={styles.time_title}>Hôm nay 18:30</Text>
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
                    Cơm tấm Phúc Lộc Thọ - TPHCM
                  </Text>
                </View>
                <View style={styles.history_content_info}>
                  <View style={styles.content_image}>
                    <Image
                      style={styles.foods_image}
                      source={require("../../../../assets/product/prod_1.jpeg")}
                    />
                  </View>
                  <View style={styles.history_content_price}>
                    <View style={styles.price}>
                      <Text style={styles.price_text}>120.000đ</Text>
                    </View>
                    <View style={styles.quantity}>
                      <Text style={styles.quantity_text}>2 món</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.status_now_complete}>
                <View style={styles.now1_complete}>
                  <Text style={styles.complete_text}>Hoàn thành</Text>
                </View>
                <View style={styles.now2_complete}>
                  <View style={styles.reorder_button}>
                    <Button color={"#EE4E2E"} title="Đặt lại" />
                  </View>
                </View>
              </View>
            </View>
          </View>
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
            <View style={styles.content}>
              <View style={styles.content_title}>
                <View style={styles.title_order}>
                  <Text style={styles.cate_title}>Đồ ăn</Text>
                  <Text style={styles.id_title}> #1702</Text>
                </View>
                <View style={styles.title_time}>
                  <Text style={styles.time_title}>Hôm nay 18:30</Text>
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
                    Cơm tấm Phúc Lộc Thọ - TPHCM
                  </Text>
                </View>
                <View style={styles.history_content_info}>
                  <View style={styles.content_image}>
                    <Image
                      style={styles.foods_image}
                      source={require("../../../../assets/product/prod_1.jpeg")}
                    />
                  </View>
                  <View style={styles.history_content_price}>
                    <View style={styles.price}>
                      <Text style={styles.price_text}>120.000đ</Text>
                    </View>
                    <View style={styles.quantity}>
                      <Text style={styles.quantity_text}>2 món</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.status_now_complete}>
                <View style={styles.now1_complete}>
                  <Text style={styles.complete_text}>Hoàn thành</Text>
                </View>
                <View style={styles.now2_complete}>
                  <View style={styles.reorder_button}>
                    <Button color={"#EE4E2E"} title="Đặt lại" />
                  </View>
                </View>
              </View>
            </View>
          </View>
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
            <View style={styles.content}>
              <View style={styles.content_title}>
                <View style={styles.title_order}>
                  <Text style={styles.cate_title}>Đồ ăn</Text>
                  <Text style={styles.id_title}> #1702</Text>
                </View>
                <View style={styles.title_time}>
                  <Text style={styles.time_title}>Hôm nay 18:30</Text>
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
                    Cơm tấm Phúc Lộc Thọ - TPHCM
                  </Text>
                </View>
                <View style={styles.history_content_info}>
                  <View style={styles.content_image}>
                    <Image
                      style={styles.foods_image}
                      source={require("../../../../assets/product/prod_1.jpeg")}
                    />
                  </View>
                  <View style={styles.history_content_price}>
                    <View style={styles.price}>
                      <Text style={styles.price_text}>120.000đ</Text>
                    </View>
                    <View style={styles.quantity}>
                      <Text style={styles.quantity_text}>2 món</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.status_now_complete}>
                <View style={styles.now1_complete}>
                  <Text style={styles.complete_text}>Hoàn thành</Text>
                </View>
                <View style={styles.now2_complete}>
                  <View style={styles.reorder_button}>
                    <Button color={"#EE4E2E"} title="Đặt lại" />
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

    </View>
  );
};

export default History;