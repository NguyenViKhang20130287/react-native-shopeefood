import * as React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  SafeAreaView,
  ScrollView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./Admin.style";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {decode as atob, encode as btoa} from 'base-64'

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


const UserMangement = () => {

  const [user, setUser] = useState([]);


  const loadUserNoLock = async () => {
    const storageUser = await AsyncStorage.getItem('user');
    console.log(storageUser);
    const url = 'http://localhost:8080/api/user/admin/find-all-user-no-lock';
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Basic ${btoa(`${storageUser.email}:${storageUser.storagePass}`)}`,
          'Content-Type': 'application/json',
        },
      })
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadUserNoLock()
  }, [user])

  return (
    <ScrollView style={styles.container}>
      <View style={styles.account_list}>
        <View style={styles.table_title}>
          <Text style={styles.title_text}>
            Danh sách tài khoản đang hoạt động
          </Text>
        </View>
        <View style={styles.table_content}>
          <View style={styles.table_row}>
            <View style={styles.id}>
              <Text style={styles.id_text}>1</Text>
            </View>
            <View style={styles.email}>
              <Text style={styles.email_text}>hieutrung9081@gmail.com</Text>
            </View>
            <View style={styles.funtion_section}>
              <Action
                style={styles.action}
                icon={"unlock"}
                color={"green"}
              ></Action>
              <Action
                style={styles.action}
                icon={"edit"}
                color={"orange"}
              ></Action>
              <Action
                style={styles.action}
                icon={"trash"}
                color={"red"}
              ></Action>
            </View>
          </View>
          <View style={styles.table_row}>
            <View style={styles.id}>
              <Text style={styles.id_text}>1</Text>
            </View>
            <View style={styles.email}>
              <Text style={styles.email_text}>hieutrung9081@gmail.com</Text>
            </View>
            <View style={styles.funtion_section}>
              <Action
                style={styles.action}
                icon={"unlock"}
                color={"green"}
              ></Action>
              <Action
                style={styles.action}
                icon={"edit"}
                color={"orange"}
              ></Action>
              <Action
                style={styles.action}
                icon={"trash"}
                color={"red"}
              ></Action>
            </View>
          </View>
          <View style={styles.table_row}>
            <View style={styles.id}>
              <Text style={styles.id_text}>1</Text>
            </View>
            <View style={styles.email}>
              <Text style={styles.email_text}>hieutrung9081@gmail.com</Text>
            </View>
            <View style={styles.funtion_section}>
              <Action
                style={styles.action}
                icon={"unlock"}
                color={"green"}
              ></Action>
              <Action
                style={styles.action}
                icon={"edit"}
                color={"orange"}
              ></Action>
              <Action
                style={styles.action}
                icon={"trash"}
                color={"red"}
              ></Action>
            </View>
          </View>
          <View style={styles.table_row}>
            <View style={styles.id}>
              <Text style={styles.id_text}>1</Text>
            </View>
            <View style={styles.email}>
              <Text style={styles.email_text}>hieutrung9081@gmail.com</Text>
            </View>
            <View style={styles.funtion_section}>
              <Action
                style={styles.action}
                icon={"unlock"}
                color={"green"}
              ></Action>
              <Action
                style={styles.action}
                icon={"edit"}
                color={"orange"}
              ></Action>
              <Action
                style={styles.action}
                icon={"trash"}
                color={"red"}
              ></Action>
            </View>
          </View>
          <View style={styles.table_row}>
            <View style={styles.id}>
              <Text style={styles.id_text}>1</Text>
            </View>
            <View style={styles.email}>
              <Text style={styles.email_text}>hieutrung9081@gmail.com</Text>
            </View>
            <View style={styles.funtion_section}>
              <Action
                style={styles.action}
                icon={"unlock"}
                color={"green"}
              ></Action>
              <Action
                style={styles.action}
                icon={"edit"}
                color={"orange"}
              ></Action>
              <Action
                style={styles.action}
                icon={"trash"}
                color={"red"}
              ></Action>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.account_list}>
        <View style={styles.table_title}>
          <Text style={styles.title_text}>Danh sách tài khoản bị khóa</Text>
        </View>
        <View style={styles.table_content}>
          <View style={styles.table_row}>
            <View style={styles.id}>
              <Text style={styles.id_text}>1</Text>
            </View>
            <View style={styles.email}>
              <Text style={styles.email_text}>hieutrung9081@gmail.com</Text>
            </View>
            <View style={styles.funtion_section}>
              <Action
                style={styles.action}
                icon={"lock"}
                color={"black"}
              ></Action>
              <Action
                style={styles.action}
                icon={"edit"}
                color={"orange"}
              ></Action>
              <Action
                style={styles.action}
                icon={"trash"}
                color={"red"}
              ></Action>
            </View>
          </View>
          <View style={styles.table_row}>
            <View style={styles.id}>
              <Text style={styles.id_text}>1</Text>
            </View>
            <View style={styles.email}>
              <Text style={styles.email_text}>hieutrung9081@gmail.com</Text>
            </View>
            <View style={styles.funtion_section}>
              <Action
                style={styles.action}
                icon={"lock"}
                color={"black"}
              ></Action>
              <Action
                style={styles.action}
                icon={"edit"}
                color={"orange"}
              ></Action>
              <Action
                style={styles.action}
                icon={"trash"}
                color={"red"}
              ></Action>
            </View>
          </View>
          <View style={styles.table_row}>
            <View style={styles.id}>
              <Text style={styles.id_text}>1</Text>
            </View>
            <View style={styles.email}>
              <Text style={styles.email_text}>hieutrung9081@gmail.com</Text>
            </View>
            <View style={styles.funtion_section}>
              <Action
                style={styles.action}
                icon={"lock"}
                color={"black"}
              ></Action>
              <Action
                style={styles.action}
                icon={"edit"}
                color={"orange"}
              ></Action>
              <Action
                style={styles.action}
                icon={"trash"}
                color={"red"}
              ></Action>
            </View>
          </View>
          <View style={styles.table_row}>
            <View style={styles.id}>
              <Text style={styles.id_text}>1</Text>
            </View>
            <View style={styles.email}>
              <Text style={styles.email_text}>hieutrung9081@gmail.com</Text>
            </View>
            <View style={styles.funtion_section}>
              <Action
                style={styles.action}
                icon={"lock"}
                color={"black"}
              ></Action>
              <Action
                style={styles.action}
                icon={"edit"}
                color={"orange"}
              ></Action>
              <Action
                style={styles.action}
                icon={"trash"}
                color={"red"}
              ></Action>
            </View>
          </View>
          <View style={styles.table_row}>
            <View style={styles.id}>
              <Text style={styles.id_text}>1</Text>
            </View>
            <View style={styles.email}>
              <Text style={styles.email_text}>hieutrung9081@gmail.com</Text>
            </View>
            <View style={styles.funtion_section}>
              <Action
                style={styles.action}
                icon={"lock"}
                color={"black"}
              ></Action>
              <Action
                style={styles.action}
                icon={"edit"}
                color={"orange"}
              ></Action>
              <Action
                style={styles.action}
                icon={"trash"}
                color={"red"}
              ></Action>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default UserMangement;
