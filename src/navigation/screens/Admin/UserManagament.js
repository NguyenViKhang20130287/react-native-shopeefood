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
  Modal,
  TextInput,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./Admin.style";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { encode as base64Encode, encode } from "base-64";

const Action = ({ icon, title, color, screen, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
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
    </TouchableOpacity>
  );
};

const UserMangement = ({ navigation }) => {

  const [userNoLock, setUserNoLock] = useState([]);
  const [userLocked, setUserLocked] = useState([]);
  const [isLocked, setIsLocked] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [modalEditUserVisible, setModalEditUserVisible] = useState(false);

  // const [userId, setUserId] = useState(false)
  const [user, setUser] = useState({
    full_name: null,
    phone_number: null,
    role_id: null,
  })

  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [roleName, setRoleName] = useState("");
  const [roleId, setRoleId] = useState('');

  const getRoleName = (roleId) => {
    if (roleId === '0') {
      setRoleName('ADMIN')
    }
    if (roleId === '1') {
      setRoleName('STORE')
    }
    if (roleId === '2') {
      setRoleName('CUSTOMER')
    }
  }

  const showModal = (message) => {
    setMessage(message);
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 1500);
  };

  const loadUserNoLock = async () => {
    const url = "http://localhost:8080/api/user/admin/find-all-user-no-lock";
    try {
      const res = await axios.get(url);
      setUserNoLock(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadUserLocked = async () => {
    const url = "http://localhost:8080/api/user/admin/find-all-user-locked";
    try {
      const res = await axios.get(url);
      console.log();
      setUserLocked(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const lockUser = async (userId) => {
    try {
      setIsLocked(false);
      const url = `http://localhost:8080/api/user/admin/lock-user?userId=${userId}`;
      const res = await axios.post(url);
      setIsLocked(true);
      showModal("Locked user successful");
      console.log("User is locked: ", res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const unLockUser = async (userId) => {
    try {
      setIsLocked(true);
      const url = `http://localhost:8080/api/user/admin/unlock-user?userId=${userId}`;
      const res = await axios.post(url);
      showModal("Unlock user successful");
      setIsLocked(false);
      console.log("User is locked: ", res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUser = async (userId) => {
    try {
      setIsDeleted(false);
      const url = `http://localhost:8080/api/user/admin/delete-user?userId=${userId}`;
      const res = await axios.delete(url);
      showModal("Delete user successful");
      setIsDeleted(true);
      console.log("User is deleted: ", res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadUserDetails = async (userId) => {
    // setUserId(userId);

    try {
      const url = `http://localhost:8080/api/user/find-user-by-id?id=${userId}`;
      const res = await axios.get(url);
      console.log("Data user: ", res.data);
      setUser(res.data)
      setUsername(user.username)
      setFullName(user.full_name)
      setPhone(user.phone_number)
      setRoleId(user.role_id.toString())
      setModalEditUserVisible(true);
    } catch (err) {
      console.log(err);
    }
  }

  const editUser = async (userId) => {
    console.log(phone);
    const requestData = {
      id: userId,
      username: username,
      fullName: fullName,
      phoneNumber: phone,
      roleId: roleId,
    }
    try {
      const url = `http://localhost:8080/api/user/admin/edit-user`;
      const res = await axios.post(url, requestData);
      console.log(res.data);
      console.log('success');
      showModal('Edit user successfully')
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadUserNoLock();
    loadUserLocked();
    console.log("loading...");
    console.log("OOK!!!");
  }, [isLocked, isDeleted]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.account_list}>
        <View style={styles.table_title}>
          <Text style={styles.title_text}>
            Danh sách tài khoản đang hoạt động
          </Text>
        </View>
        <View style={styles.table_content}>
          {userNoLock.map((userNoLock) => (
            <View style={styles.table_row} key={userNoLock.id}>
              <View style={styles.id}>
                <Text style={styles.id_text}>{userNoLock.id}</Text>
              </View>
              <View style={styles.email}>
                <Text style={styles.email_text}>{userNoLock.email}</Text>
              </View>
              <View style={styles.funtion_section}>
                <Action
                  style={styles.action}
                  icon={"unlock"}
                  color={"green"}
                  onPress={() => lockUser(userNoLock.id)}
                ></Action>
                <Action
                  style={styles.action}
                  icon={"edit"}
                  color={"orange"}
                  onPress={() => loadUserDetails(userNoLock.id)}
                ></Action>
                <Action
                  style={styles.action}
                  icon={"trash"}
                  color={"red"}
                  onPress={() => deleteUser(userNoLock.id)}
                ></Action>
              </View>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.account_list}>
        <View style={styles.table_title}>
          <Text style={styles.title_text}>Danh sách tài khoản bị khóa</Text>
        </View>
        <View style={styles.table_content}>
          {userLocked.map((userLocked) => (
            <View style={styles.table_row} key={userLocked.id}>
              <View style={styles.id}>
                <Text style={styles.id_text}>{userLocked.id}</Text>
              </View>
              <View style={styles.email}>
                <Text style={styles.email_text}>{userLocked.email}</Text>
              </View>
              <View style={styles.funtion_section}>
                <Action
                  style={styles.action}
                  icon={"lock"}
                  color={"black"}
                  onPress={() => unLockUser(userLocked.id)}
                ></Action>
                <Action
                  style={styles.action}
                  icon={"edit"}
                  color={"orange"}
                  onPress={() => loadUserDetails(userLocked.id)}
                ></Action>
                <Action
                  style={styles.action}
                  icon={"trash"}
                  color={"red"}
                  onPress={() => deleteUser(userLocked.id)}
                ></Action>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/*  */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
      // onRequestClose={() => {
      //     Alert.alert('Modal has been closed.');
      //     setModalVisible(!modalVisible);
      // }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Ionicons name="warning-outline" size={50} color={"white"} />
            <Text style={styles.modalText}>{message}</Text>
          </View>
        </View>
      </Modal>

      {/*  */}
      <Modal animationType="fade"
        transparent={true}
        visible={modalEditUserVisible}>
        {modalEditUserVisible === true && user !== null ?
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
                <Text style={styles.value_text}>Username:</Text>
                <TextInput
                  style={styles.textfield}
                  editable
                  numberOfLines={1}
                  value={username}
                // onChangeText={() => setUserName(user.username)}
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
                  value={fullName}
                  onChangeText={(text) => setFullName(text)}
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
                  onChangeText={(text) => setPhone(text)}
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
                  value={roleId}
                  onChangeText={(text) => setRoleId(text)}
                ></TextInput>
              </View>
              <Pressable style={styles.button_section} onPress={() => editUser(user.id)}>
                <View style={styles.button_press}>
                  <Action
                    style={{ padding: 5 }}
                    icon={"save"}
                    color={"green"}
                  ></Action>
                  <Text style={styles.button_text}>Lưu lại</Text>
                </View>
                <Pressable onPress={() => setModalEditUserVisible(false)}
                  style={styles.button_press}>
                  <Action
                    style={{ padding: 5 }}
                    icon={"backward"}
                    color={"orange"}
                  ></Action>
                  <Text style={styles.button_text}>Quay về</Text>
                </Pressable>
              </Pressable>
            </View>
          </View>
          : null}
      </Modal>
    </ScrollView>
  );
};

export default UserMangement;
