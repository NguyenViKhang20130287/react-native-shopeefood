import * as React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  ScrollView,
  SafeAreaView,
  Modal,
  TextInput,
  Pressable
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./Admin.style";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

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

const ShopMangement = () => {

  const [storeNoLock, setStoreNoLock] = useState([])
  const [storeLocked, setStoreLocked] = useState([])

  const [isLocked, setIsLocked] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);
  const [modalStoreVisible, setModalStoreVisible] = useState(false);

  const [storeId, setStoreId] = useState(0)
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  const [store, setStore] = useState(null)

  const showModal = (message) => {
    setMessage(message);
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 1500);
  };

  const loadStoresNoLock = async () => {
    const url = "http://localhost:8080/api/stores/admin/load-store-no-lock";
    try {
      const res = await axios.get(url);
      // console.log(res.data);
      setStoreNoLock(res.data.slice(813, 816));
    } catch (err) {
      console.log(err);
    }
  }

  const loadStoresLocked = async () => {
    const url = "http://localhost:8080/api/stores/admin/load-store-locked";
    try {
      const res = await axios.get(url);
      setStoreLocked(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  const lockStore = async (storeId) => {
    setIsLocked(false)
    const url = `http://localhost:8080/api/stores/admin/lock-store?storeId=${storeId}`;
    try {
      const res = await axios.post(url);
      setIsLocked(true);
      console.log('Lock store status: ', res.data);
      showModal('Lock store successfully')
    } catch (err) {
      console.log(err);
    }
  }

  const unLockStore = async (storeId) => {
    setIsLocked(true)
    const url = `http://localhost:8080/api/stores/admin/unlock-store?storeId=${storeId}`;
    try {
      const res = await axios.post(url);
      setIsLocked(false);
      console.log('Unlock store status: ', res.data);
      showModal('Unlock store successfully')
    } catch (err) {
      console.log(err);
    }
  }

  const loadStoreDetails = async (storeId) => {
    setModalStoreVisible(true)
    const url = `http://localhost:8080/api/stores/admin/load-store-details?storeId=${storeId}`;
    try {
      const res = await axios.get(url);
      console.log('Store data: ', res.data);
      setStore(res.data)
      setStoreId(res.data.id)
      setName(res.data.name)
      setAddress(res.data.address)
      setImage(res.data.image)
    } catch (err) {
      console.log(err);
    }
  }

  const editStore = async () => {
    const url = `http://localhost:8080/api/stores/admin/edit-store`;
    const requestData = {
      id: storeId,
      name: name,
      address: address,
      image: image
    }
    try {
      const res = await axios.post(url, requestData);
      console.log('Edit store status: ', res.data);
      showModal('Edit store success')
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    console.log();
    console.log('loading...');

    loadStoresNoLock();
    loadStoresLocked()
    // loadStoreDetails(2)

    console.log('OK!!!....');
  }, [isLocked])

  return (
    <View style={styles.container}>
      <View style={styles.account_list}>
        <View style={styles.table_title}>
          <Text style={styles.title_text}>
            Danh sách cửa hàng đang hoạt động
          </Text>
        </View>
        <ScrollView style={styles.table_content}>
          {storeNoLock.map((storeNoLock) => (
            <View style={styles.table_row} key={storeNoLock.id}>
              <View style={styles.id}>
                <Text style={styles.id_text}>{storeNoLock.id}</Text>
              </View>
              <View style={styles.email}>
                <Text style={styles.email_text} numberOfLines={1} ellipsizeMode="tail" >{storeNoLock.name}</Text>
              </View>
              <View style={styles.funtion_section}>
                <Action
                  style={styles.action}
                  icon={"unlock"}
                  color={"green"}
                  onPress={() => lockStore(storeNoLock.id)}
                ></Action>
                <Action
                  style={styles.action}
                  icon={"edit"}
                  color={"orange"}
                  onPress={() => loadStoreDetails(storeNoLock.id)}
                ></Action>
                <Action
                  style={styles.action}
                  icon={"trash"}
                  color={"red"}
                ></Action>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <ScrollView style={styles.account_list}>
        <View style={styles.table_title}>
          <Text style={styles.title_text}>
            Danh sách cửa hàng tạm ngưng hoạt động
          </Text>
        </View>
        <View style={styles.table_content}>
          {storeLocked.map((storeLocked) => (
            <View style={styles.table_row} key={storeLocked.id}>
              <View style={styles.id}>
                <Text style={styles.id_text}>{storeLocked.id}</Text>
              </View>
              <View style={styles.email}>
                <Text style={styles.email_text}>{storeLocked.name}</Text>
              </View>
              <View style={styles.funtion_section}>
                <Action
                  style={styles.action}
                  icon={"lock"}
                  color={"black"}
                  onPress={() => unLockStore(storeLocked.id)}
                ></Action>
                <Action
                  style={styles.action}
                  icon={"edit"}
                  color={"orange"}
                  onPress={() => loadStoreDetails(storeLocked.id)}
                ></Action>
                <Action
                  style={styles.action}
                  icon={"trash"}
                  color={"red"}
                ></Action>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <Modal animationType="fade"
        transparent={true}
        visible={modalStoreVisible}>
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
                onChangeText={(text) => setName(text)}
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
                onChangeText={(text) => setAddress(text)}
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
                onChangeText={(text) => setImage(text)}
              ></TextInput>
            </View>
            <Pressable style={styles.button_section} onPress={() => editStore()}>
              <View style={styles.button_press}>
                <Action
                  style={{ padding: 5 }}
                  icon={"save"}
                  color={"green"}
                ></Action>
                <Text style={styles.button_text}>Lưu lại</Text>
              </View>
              <Pressable style={styles.button_press} onPress={() => setModalStoreVisible(false)}>
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
      </Modal>

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
    </View>
  );
};

export default ShopMangement;
