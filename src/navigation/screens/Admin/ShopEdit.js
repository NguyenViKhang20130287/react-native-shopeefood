import * as React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  SafeAreaView,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./Admin.style";
import { FontAwesome } from "@expo/vector-icons";

const Action = ({ icon, title, color, screen }) => {
  return (
    <View style={styles.action}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={styles.iconContainer}>
          <FontAwesome name={icon} size={22} color={color} />
        </View>
        <Text style={styles.actionTitle}>{title}</Text>
      </View>
    </View>
  );
};

const ShopEdit = () => {
  const [name, onChangeNameText] = React.useState("Cơm Tấm Phúc Lộc Thọ Q9");
  const [address, onChangeAddressText] = React.useState("205 Lê Văn Việt, Q9");
  const [image, onChangeImageText] = React.useState("link");

  return (
    <View style={styles.container}>
      <View style={styles.header_edit}>
        <Action style={styles.icons} icon={"home"} color={"orange"}></Action>
        <Text style={styles.text_header_edit}>
          Chỉnh sửa thông tin cửa hàng
        </Text>
        <Action style={styles.icons} icon={"shield"} color={"orange"}></Action>
      </View>
      <View>
        <Text style={styles.text_title_edit}>Thông tin cửa hàng:</Text>
      </View>
      <View style={styles.edit_info}>
        <View style={styles.value_element}>
          <Ionicons
            style={styles.icon_element}
            name="cart-outline"
            color={"blue"}
          ></Ionicons>
          <Text style={styles.value_text}>Tên cửa hàng:</Text>
          <TextInput
            style={styles.textfield}
            editable
            numberOfLines={1}
            value={name}
            onChangeText={(text) => onChangeNameText(text)}
          ></TextInput>
        </View>
        <View style={styles.value_element}>
          <Ionicons
            style={styles.icon_element}
            name="home-outline"
            color={"blue"}
          ></Ionicons>
          <Text style={styles.value_text}>Địa chỉ:</Text>
          <TextInput
            style={styles.textfield}
            editable
            numberOfLines={1}
            value={address}
            onChangeText={(text) => onChangeAddressText(text)}
          ></TextInput>
        </View>
        <View style={styles.value_element}>
          <Ionicons
            style={styles.icon_element}
            name="image-outline"
            color={"blue"}
          ></Ionicons>
          <Text style={styles.value_text}>Ảnh cửa hàng:</Text>
          <TextInput
            style={styles.textfield}
            editable
            numberOfLines={1}
            value={image}
            onChangeText={(text) => onChangeImageText(text)}
          ></TextInput>
        </View>
        <View style={styles.button_section}>
          <View style={styles.button_press}>
            <Action
              style={{ padding: 5 }}
              icon={"save"}
              color={"green"}
            ></Action>
            <Text style={styles.button_text}>Lưu lại</Text>
          </View>
          <View style={styles.button_press}>
            <Action
              style={{ padding: 5 }}
              icon={"backward"}
              color={"orange"}
            ></Action>
            <Text style={styles.button_text}>Quay về</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ShopEdit;
