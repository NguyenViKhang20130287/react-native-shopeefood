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

const UserEdit = () => {
  const [username, onChangeUsernameText] = React.useState(
    "hieutrung9081@gmail.com"
  );
  const [fullname, onChangeFullnameText] = React.useState("Nguyen Trung Hieu");
  const [phone, onChangePhoneText] = React.useState("0364352223");
  const [role, onChangeRoleText] = React.useState("Admin");

  return (
    <View style={styles.container}>
      <View style={styles.header_edit}>
        <Action style={styles.icons} icon={"user"} color={"orange"}></Action>
        <Text style={styles.text_header_edit}>
          Chỉnh sửa thông tin tài khoản
        </Text>
        <Action style={styles.icons} icon={"shield"} color={"orange"}></Action>
      </View>
      <View>
        <Text style={styles.text_title_edit}>Thông tin tài khoản:</Text>
      </View>
      <View style={styles.edit_info}>
        <View style={styles.value_element}>
          <Ionicons
            style={styles.icon_element}
            name="person-outline"
            color={"blue"}
          ></Ionicons>
          <Text style={styles.value_text}>Tên đăng nhập:</Text>
          <TextInput
            style={styles.textfield}
            editable
            numberOfLines={1}
            value={username}
            onChangeText={(text) => onChangeUsernameText(text)}
          ></TextInput>
        </View>
        <View style={styles.value_element}>
          <Ionicons
            style={styles.icon_element}
            name="newspaper-outline"
            color={"blue"}
          ></Ionicons>
          <Text style={styles.value_text}>Họ và tên:</Text>
          <TextInput
            style={styles.textfield}
            editable
            numberOfLines={1}
            value={fullname}
            onChangeText={(text) => onChangeFullnameText(text)}
          ></TextInput>
        </View>
        <View style={styles.value_element}>
          <Ionicons
            style={styles.icon_element}
            name="call-outline"
            color={"blue"}
          ></Ionicons>
          <Text style={styles.value_text}>Số điện thoại:</Text>
          <TextInput
            style={styles.textfield}
            editable
            numberOfLines={1}
            value={phone}
            onChangeText={(text) => onChangePhoneText(text)}
          ></TextInput>
        </View>
        <View style={styles.value_element}>
          <Ionicons
            style={styles.icon_element}
            name="shield-outline"
            color={"blue"}
          ></Ionicons>
          <Text style={styles.value_text}>Quyền tài khoản:</Text>
          <TextInput
            style={styles.textfield}
            editable
            numberOfLines={1}
            value={role}
            onChangeText={(text) => onChangeRoleText(text)}
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

export default UserEdit;
